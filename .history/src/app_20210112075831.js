const express = require('express');
require('./db/conn')
const Student = require('./models/students')
const studentRouter = require('./routers/student');

const app = express();
const port = process.env.PORT || 8000;   // Provie Proper PORT Number

app.use(express.json());     // See Note
app.use(studentRouter)
app.get("/", (req, res) => {
    res.send("Hello From The Home Side..!")
})


app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})
