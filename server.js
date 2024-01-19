
const express = require("express");
const fs = require('fs');
const path = require('path');
const { serialize } = require("v8");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render("index",{device : []});
})

app.use(express.json());

const jsonFilesDirectory = path.join(__dirname, 'src/data/');
app.post('/searchDevice', (req, res) => {
    const { deviceName, panel } = req.body;

    if (!deviceName && !panel) {
        return res.status(400).json({ error: 'Enter any one value ....' });
    } else if (panel && deviceName) {
        try{
            const panelFilePath = path.join(jsonFilesDirectory, `${panel}.json`);
            const searchResults = [];
            searchInPanel(panelFilePath, deviceName, searchResults);
            res.render("index", { device: searchResults });
        }catch(error){
            console.error(`Error reading or parsing ${panelFilePath}:`, error);
            res.render("index", { device: [] });
        }
    } else if (deviceName && !panel) {
        try{
            const allPanelFiles = fs.readdirSync(jsonFilesDirectory);
            const searchResults = [];

            allPanelFiles.forEach((panelFile) => {
            const panelFilePath = path.join(jsonFilesDirectory, panelFile);
            searchInPanel(panelFilePath, deviceName, searchResults);
            });
            res.render("index", { device: searchResults });
        } catch(error){
            console.error(`Error reading or parsing ${panelFilePath}:`, error);
            res.render("index", { device: [] });
        }
        
    } else {
        try {
            const panelFilePath = path.join(jsonFilesDirectory, `${panel}.json`);
            const panelData = JSON.parse(fs.readFileSync(panelFilePath, 'utf8'));
            res.render("index", { device: panelData });
        } catch (error) {
            console.error(`Error reading or parsing ${panelFilePath}:`, error);
            res.render("index", { device: [] });
        }
    }
});

function searchInPanel(panelFilePath, deviceName, resultArray) {
    try {
        const panelData = JSON.parse(fs.readFileSync(panelFilePath, 'utf8'));

        const matchingObjects = panelData.filter((item) => {
            const deviceNameMatch = (item["Device Name"] || '').toLowerCase().includes(deviceName.toLowerCase());
            const intendedUseMatch = (item["Intended Use"] || '').toLowerCase().includes(deviceName.toLowerCase());

            return deviceNameMatch || intendedUseMatch;
        });

        resultArray.push(...matchingObjects);
    } catch (error) {
        console.error(`Error reading or parsing ${panelFilePath}:`, error);
    }
}



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
})