import express from 'express';
import { connectToDb, getDb } from './db.js';
import bodyParser from "body-parser";
import env from 'dotenv';
const port = 3000;
const app = express()
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
let db


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
env.config()
app.get("/", (req, res) =>{
  res.render("index.ejs");
});

// 


// Connect to the database before setting up the routes
connectToDb((err) => {
  if (!err) {
      console.log("db connection established");
      db = getDb();
      
      // Set up your Express routes inside this callback
      app.get("/documents", async (req, res) => {
          try {
              const filenames = await db.collection('filenames').find({}).sort({ _id: -1 }).toArray();
              console.log(filenames);
              res.render("documents.ejs", { filenames:filenames });
          } catch (error) {
              console.error("Error fetching filenames:", error);
              res.status(500).send("Internal Server Error");
          }
      });

      // Add more routes as needed...
  } else {
      console.error("Failed to connect to the database:", err);
  }
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

