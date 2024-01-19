
const express = require("express");

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index");
})


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
})