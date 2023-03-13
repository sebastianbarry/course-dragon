import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import passport from "passport";
import saml from "passport-saml";
import fs from "fs";

//--------------- List of Route Resources (add new file paths to routes here) ---------------
import homeRoutes from "./api/home/homeRoutes.js"
import userRoutes from "./api/users/userRoutes.js"
import creditsRoutes from "./api/credits/creditsRoutes.js"
import courseRoutes from "./api/course/courseRoutes.js"
import instructorScoreRoutes from "./api/instructor-score/instructorScoreRoutes.js"
import semesterRoutes from "./api/semester/semesterRoutes.js"
import degreeMapRoutes from "./api/degree-map/degreeMapRoutes.js"
//Load config
dotenv.config({ path: "./config/config.env" });

//Create express app
const app = express();

//Grab port number from /config/config.env or defaultly use 4000
const PORT = process.env.PORT || 4000;

//making the server accessible to any domain that requests a resource from your server via a browser
// https://stackoverflow.com/questions/46024363/what-does-app-usecors-do
app.use(cors());

//make the server parse incoming messages as json payloads
app.use(express.json());

//--------------- List of our Routes (add new routes here) ---------------
app.use("/", homeRoutes);
app.use("/users", userRoutes);
app.use("/credits", creditsRoutes);
app.use("/course",courseRoutes);
app.use("/instructor-score", instructorScoreRoutes);
app.use("/semester", semesterRoutes);
app.use("/degree-map", degreeMapRoutes);
// example of a route defined here
/*app.get("/", (req, res) => {
  res.send("employee backende erisildi");
});*/

passport.use(new SamlStrategy(
  {
    path: '/login/callback',
    entryPoint: 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
    issuer: 'passport-saml',
    cert: 'fake cert', // cert must be provided
  },
  function(profile, done) {
    findByEmail(profile.email, function(err, user) {
      if (err) {
        return done(err);
      }
      return done(null, user);
    });
  })
);


app.route("/metadata").get(function(req, res) {
  res.type("application/xml");
  res.status(200);
  res.send(
  Strategy.generateServiceProviderMetadata(
      fs.readFileSync("./certs/cert.pem", "utf8"),
      fs.readFileSync("./certs/cert.pem", "utf8")
  )
  );
});

// Begin listening on the server
app.listen(PORT, () => {
  connectDB(); //Connect to MongoDB
  console.log(`Server is running on port: ${PORT}`);
});