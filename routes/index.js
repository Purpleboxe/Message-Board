var express = require("express");
var router = express.Router();
const { getMessages, addMessage } = require("../db/db");

const formatDate = (date) => {
  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

router.get("/", async function (req, res, next) {
  try {
    const messages = await getMessages();
    messages.forEach((message) => {
      message.formattedDate = formatDate(message.added);
    });
    res.render("index", { title: "Message Board", messages });
  } catch (err) {
    next(err);
  }
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", async function (req, res, next) {
  try {
    const { username, text } = req.body;
    await addMessage(text, username);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
