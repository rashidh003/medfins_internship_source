const express = require("express");
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/RiskClassification", (req, res) => {
    res.render("riskclassification", { device: [] });
});

const jsonFilesDirectory = path.join(__dirname, 'src/data/');

app.post('/searchDevice', (req, res) => {
    const { deviceName, panel } = req.body;

    if (!deviceName && !panel) {
        return res.status(400).json({ error: 'Enter any one value ....' });
    } else if (panel && deviceName) {
        try {
            const panelFilePath = path.join(jsonFilesDirectory, `${panel}.json`);
            const searchResults = [];
            searchInPanel(panelFilePath, deviceName, searchResults);
            searchResults.forEach((result) => {
                result["Device Name"] = highlightKeyword(result["Device Name"], deviceName);
                result["Intended Use"] = highlightKeyword(result["Intended Use"], deviceName);
            });
            res.render("riskclassification", { device: searchResults });
        } catch (error) {
            console.error(`Error reading or parsing ${panelFilePath}:`, error);
            res.render("riskclassification", { device: [] });
        }
    } else if (deviceName && !panel) {
        try {
            const allPanelFiles = fs.readdirSync(jsonFilesDirectory);
            const searchResults = [];

            allPanelFiles.forEach((panelFile) => {
                const panelFilePath = path.join(jsonFilesDirectory, panelFile);
                searchInPanel(panelFilePath, deviceName, searchResults);
            });

            searchResults.forEach((result) => {
                result["Device Name"] = highlightKeyword(result["Device Name"], deviceName);
                result["Intended Use"] = highlightKeyword(result["Intended Use"], deviceName);
            });

            res.render("riskclassification", { device: searchResults });
        } catch (error) {
            console.error(`Error reading or parsing ${panelFilePath}:`, error);
            res.render("riskclassification", { device: [] });
        }
    } else {
        try {
            const panelFilePath = path.join(jsonFilesDirectory, `${panel}.json`);
            const panelData = JSON.parse(fs.readFileSync(panelFilePath, 'utf8'));
            res.render("riskclassification", { device: panelData });
        } catch (error) {
            console.error(`Error reading or parsing ${panelFilePath}:`, error);
            res.render("riskclassification", { device: [] });
        }
    }
});

app.get('/country/:countryId', (req, res) => { 
    const countryId = req.params.countryId;
    res.render(`countries/${countryId}`);
});

app.get('/IN', (req, res) => {
    res.render('countries/IN.ejs');
})

app.get('/US', (req, res) => {
    res.render('countries/US.ejs');
})

app.get('/AU', (req, res) => {
    res.render('countries/AU.ejs');
})

app.get('/JP', (req, res) => {
    res.render('countries/JP.ejs');
})

app.get('/CN', (req, res) => {
    res.render('countries/CN.ejs');
})

app.get('/KR', (req, res) => {
    res.render('countries/KR.ejs');
})

app.get('/SA', (req, res) => {
    res.render('countries/SA.ejs');
})

app.get('/CA', (req, res) => {
    res.render('countries/CA.ejs');
})


function searchInPanel(panelFilePath, deviceName, resultArray) {
    try {
        const panelData = JSON.parse(fs.readFileSync(panelFilePath, 'utf8'));

        const matchingObjectsDeviceName = panelData.filter((item) => {
            const deviceNameMatch = (item["Device Name"] || '').toLowerCase().includes(deviceName.toLowerCase());
            return deviceNameMatch;
        });
        
        const matchingObjectsIntendedUse = panelData.filter((item) => {
            const intendedUseMatch = (item["Intended Use"] || '').toLowerCase().includes(deviceName.toLowerCase());
            return intendedUseMatch;
        });
        
        const matchingObjects = [...matchingObjectsDeviceName, ...matchingObjectsIntendedUse];

        resultArray.push(...matchingObjects);
    } catch (error) {
        console.error(`Error reading or parsing ${panelFilePath}:`, error);
    }
}

function highlightKeyword(text, keyword) {
    const regex = new RegExp(keyword, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});
