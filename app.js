const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/main"));


let port = process.env.PORT || 3001;
if(port == null || port == ""){
    port = 3001
}
app.listen(port, () => console.log(`Server running on Port ${port}`));