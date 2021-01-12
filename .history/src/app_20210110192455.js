const express = require('express');
const app = express();
const port = process.env.PORT || 8000;   // Provie Proper PORT Number


app.get("/", (req, res) =>{
    res.send("Hello From The Home Side..!")
})

// Create a new students
app.post("/students", (req, res) => {
    res.send("Hello From The Other Side..!")
});

app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})
