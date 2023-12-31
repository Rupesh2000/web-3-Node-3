const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require('ejs')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.json("Working!");
});

const DUMMY_DB = {
  rupesh: {
    firstname: "Rupesh",
    nature: "Shy",
    place: "India",
    techStack: "MERN Stack",
    batchNo: 3,
    hobbies: ["Playing", "Singing", "Dancing"],
    experience: "",
    image: "",
  },
  kumar: {
    firstname: "Kumar",
    nature: "Good",
    place: "France",
    techStack: "MEAN",
    batchNo: 8,
    hobbies: ["Cycling", "Swimming"],
    experience: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRau3LRm__X28IiVN9iddcY7WzrALBVGAKx09i1VsXQrw&s",
  },
  sujit: {
    firstname: "Sujit",
    nature: "Smart",
    place: "USA",
    techStack: "MEVN",
    batchNo: 10,
    hobbies: ["Coding", "Running"],
    experience: `To achieve a challenging position in Software Testing in a result-oriented company, where acquired skills and education will be utilized towards continued growth and advancement. Currently pursuing my career as Software Tester.`,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
};

app.get("/user-details/:username", (req, res) => {
  let username = req.params.username;
  let userDetails = DUMMY_DB[username];
  if (userDetails) {
    res.render("index", userDetails);
  } else {
    res.render("not-found");
  }
});

// app.get("/user-details/kumar", (req, res) => {
//   res.render("index", {
//     firstname: "Kumar",
//     nature: "Good",
//     place: "France",
//     techStack: "MEAN",
//     batchNo: 8,
//   });
// });

// /*
//     rupesh
//     mine
//     sujit
// */

// app.get("/user-details/sujit", (req, res) => {
//   res.render("index", {
//     firstname: "Sujit",
//     nature: "Smart",
//     place: "USA",
//     techStack: "MEVN",
//     batchNo: 10,
//   });
// });

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});

/*
    View Engine : (Also known as Template engine)
     - Dynamic HTML webpages
     - res.render()
        - First argument : HTML file inside views folder
        - Second argument : Variables Objects (Key value pairs)

    - EJS : Embadded JavaScript Templating (https://ejs.co/)

    - Express Routing parameters
*/
