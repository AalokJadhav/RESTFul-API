const express = require('express');
require('./db/conn')
const Student = require('./models/students')

const app = express();
const port = process.env.PORT || 8000;   // Provie Proper PORT Number

app.use(express.json());     // See Note

app.get("/", (req, res) =>{
    res.send("Hello From The Home Side..!")
})

// Create a new students
app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    res.send("Hello From The Other Side..!");

});

app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})


// Note -

// You DO NOT NEED express.json() & exprss.urlencoded()
// For GET Requests or DELETE requests we only need it for POST & PUT request.

// express.json() is a method inbulit in express to recognize the incoming request object as A JSON object.
// This method is called as a middleware in your application using code: app.use(express.json());