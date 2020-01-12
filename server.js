const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 5000;
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
const creds = require("./client/src/.env")

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// create a POST route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });
app.post("/send", (req, res, next) => {
  console.log("ok")
  res.json({
              msg: 'success'
            })
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));