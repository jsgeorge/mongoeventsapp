//const express = require("express");
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
//import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";

import users from "./routes/users";
import auth from "./routes/auth";
import events from "./routes/events";

const app = express();

//mongo DB
mongoose.connect(
  "mongodb://localhost:27017/auth" || "mongodb://localhost/react/auth"
);

app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/events", events);

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler));
// app.use(
//   webpackMiddleware(compiler, {
//     hot: true,
//     publicPath: webpackConfig.output.publicPath,
//     noInfo: true
//   })
// );

//app.use(webpackHotMiddleware(compiler));

const port = process.env.PORT || 3002;

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
