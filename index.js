import express from 'express';

import bodyParser from "body-parser";

const port = 3000;
const app = express()
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
let db


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) =>{
  res.render("index.ejs");
});

// 


app.get("/documents", async (req, res) => {
  res.render("documents.ejs",)
});


app.get("/about", (req, res) =>{
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/gallery", (req, res) => {
  res.render("gallery.ejs");
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

