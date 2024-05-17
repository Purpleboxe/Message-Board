var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

messages.forEach((message) => {
  message.formattedDate = message.added.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

module.exports = router;
