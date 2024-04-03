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

app.get("/single", (req, res) => {
  res.render("single.ejs");
});

app.get("/team", (req, res) => {
  res.render("team.ejs");
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.get("/class", (req, res) => {
  res.render("class.ejs");
});




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

