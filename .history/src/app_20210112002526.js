const express = require('express');
require('./db/conn')
const Student = require('./models/students')

const app = express();
const port = process.env.PORT || 8000;   // Provie Proper PORT Number

app.use(express.json());     // See Note

app.get("/", (req, res) => {
    res.send("Hello From The Home Side..!")
})

// Create a new students

// Using .then & .catch
// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
//     // res.send("Hello From The Other Side..!");

// });

// Using Async-await
app.post("/students", async (req, res) => {
    console.log(req.body);
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (e) {
        res.status(400).send(e);
    }
})


// Note -

// You DO NOT NEED express.json() & exprss.urlencoded()
// For GET Requests or DELETE requests we only need it for POST & PUT request.

// express.json() is a method inbulit in express to recognize the incoming request object as A JSON object.
// This method is called as a middleware in your application using code: app.use(express.json());


// Read the data of Registered Students

app.get('/students', async(req, res) => {
    try {
       const studentsData = await Student.find();
       res.send(studentsData);
    } catch(e) {
        res.send(e);
    }
})


// Get the indivisual Student data using id

app.get('/students/:id', async(req, res) => {
    try {
       const _id = req.params._id;
       console.log(_id);
       res.send(studentsData);
    } catch(e) {
        res.send(e);
    }
})


app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})
