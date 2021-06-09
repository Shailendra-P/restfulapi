const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
    
// create a new student
// app.post("/students",(req, res) => {
//     console.log(req.body);
//     const user = new Student(req.boby);
      
//     user.save().then(() => {
//        res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })


    app.post("/students",async(req, res) =>{
        try {
            const user = new Student(req.boby);
            console.log(req.body);
            const createUser = await user.save();
            
            res.status(201).send(createUser);
        }catch (e) {
            res.status(400).send(e);
            
        }

    }
 
     //res.send("HELLO Student Now U R Registered :)");
)



//Read Data From Postman

app.post("/students",async(req, res) =>{
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
        
       
    }catch (e) {
        res.send(e);
        
    }

}

 //res.send("HELLO Student Now U R Registered :)");
)

app.listen(port , () => {
    console.log(`listening UR port at ${port}`);
})