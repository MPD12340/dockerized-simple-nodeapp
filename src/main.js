const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'I am from Nepal' });
});

// Change this to 4000 to match the Docker exposed port
app.listen(4000, () => {
  console.log("Your app is running on port 4000");
});
