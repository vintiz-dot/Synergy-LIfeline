const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const PORT = process.env.PORT || 3000;
const viewsPath = path.join(__dirname, "../templates/views");
const publicFolder = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");

hbs.registerPartials(partialsPath);

app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicFolder));

app.get("/", (_req, res) => {
  res.render("index", { name: "Synergy Lifeline Consulting" });
});

app.get("/about", (_req, res) => {
  res.render("about", { name: "Synergy Lifeline Consulting" });
});

app.get("/cgfns-classes", (_req, res) => {
  res.render("cgfns-classes", { name: "Synergy Lifeline Consulting" });
});

app.get("/contact", (_req, res) => {
  res.render("contact", { name: "Synergy Lifeline Consulting" });
});

app.get("/course-details", (_req, res) => {
  res.render("course-details", { name: "Synergy Lifeline Consulting" });
});

app.get("/courses", (_req, res) => {
  res.render("courses", { name: "Synergy Lifeline Consulting" });
});

app.get("/events", (_req, res) => {
  res.render("events", { name: "Synergy Lifeline Consulting" });
});

app.get("/gmat-classes", (_req, res) => {
  res.render("gmat-classes", { name: "Synergy Lifeline Consulting" });
});

app.get("/gmat-faqs", (_req, res) => {
  res.render("gmat-faqs", { name: "Synergy Lifeline Consulting" });
});

app.get("/gre-classes", (_req, res) => {
  res.render("gre-classes", { name: "Synergy Lifeline Consulting" });
});

app.get("/gre-faqs", (_req, res) => {
  res.render("gre-faqs", { name: "Synergy Lifeline Consulting" });
});

app.get("/ielts-classes", (_req, res) => {
  res.render("ielts-classes", { name: "Synergy Lifeline Consulting" });
});

app.get("/ielts-faqs", (_req, res) => {
  res.render("ielts-faqs", { name: "Synergy Lifeline Consulting" });
});

app.get("/pricing", (_req, res) => {
  res.render("pricing", { name: "Synergy Lifeline Consulting" });
});

app.get("/privacy", (_req, res) => {
  res.render("privacy", { name: "Synergy Lifeline Consulting" });
});

app.get("/pte-classes", (_req, res) => {
  res.render("pte-classes", { name: "Synergy Lifeline Consulting" });
});

app.get("/pte-faqs", (_req, res) => {
  res.render("pte-faqs", { name: "Synergy Lifeline Consulting" });
});

app.get("/sat-classes", (_req, res) => {
  res.render("sat-classes", { name: "Synergy Lifeline Consulting" });
});

app.get("/sat-faqs", (_req, res) => {
  res.render("sat-faqs", { name: "Synergy Lifeline Consulting" });
});

app.get("/terms-of-service", (_req, res) => {
  res.render("terms of service", { name: "Synergy Lifeline Consulting" });
});

app.get("/toefl-classes", (_req, res) => {
  res.render("toefl-classes", { name: "Synergy Lifeline Consulting" });
});

app.get("/toefl-faqs", (_req, res) => {
  res.render("toefl-faqs", { name: "Synergy Lifeline Consulting" });
});

app.get("/trainers", (_req, res) => {
  res.render("trainers", { name: "Synergy Lifeline Consulting" });
});

app.get("*", (_req, res) => {
  res.render("404", { name: "Synergy Lifeline Consulting" });
});
app.listen(PORT, () => console.log("started sever sucesfullly"));
