const express = require('express');
const router = new express.Router();
const Student = require('../models/students');

router.get('/router', (req, res) => {
    res.send('hello from the router side..!')
});

// Create a new students
// Using .then & .catch
// router.post("/students", (req, res) => {
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
router.post("/students", async (req, res) => {
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
// This method is called as a middleware in your routerlication using code: router.use(express.json());



// Adding Express Router in RESTFul API

// 1: create a new Router
// const router = new express.Router();


// 2. we need to define the router
// router.get('/router', (req, res) => {
//     res.send('hello from the router side..!')
// });


// 3. we need to register the router
// router.use(router);


// Read the data of Registered Students
router.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})


// Get the indivisual Student data using id
router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        console.log(_id);
        const studentData = await Student.findById(_id);
        console.log(studentData);

        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})


// Get the indivisual Student data using name
router.get('/students/:name', async (req, res) => {
    try {
        const name = req.params.name;
        console.log(name);
        const studentDatabyname = await Student.find(name);
        console.log(studentDatabyname);

        if (!studentDatabyname) {
            return res.status(404).send();
        } else {
            res.send(studentDatabyname);

        }
    } catch (e) {
        res.status(500).send(e);

    }
})


// Update the student by it id
router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new: true   // to show current updated data
        });
        res.send(updateStudents);
    } catch (e) {
        res.status(404).send(e)

    }
})


// Delete the student by it id
router.delete('/students/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        const deleteStudent = await Student.findByIdAndDelete(id);

        if (!id) {
            return res.status(404).send();
        } else {
            res.send(deleteStudent);
        }
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router;