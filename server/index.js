//const express = require("express");
import express from "express";
import path from "path";

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config.dev";

const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));

const port = process.env.PORT || 3002;

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
