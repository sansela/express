const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const userRouter = require("./UserRouter");

const PORT = 8000;
const app = express();
app.use(bodyParser.urlencoded( {extended: false}));
app.use(express.json());
app.use("/api/v1",userRouter);

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>")
});

app.get("/contact", (req, res) =>{
    res.send("<h1>Contact Page</h1>");
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname +"/index.html"));
})

// app.post("/api/v1/register", (req, res) => {
//     console.log(req.body);
//     res.send(`<h1>Registered Successfully</h1>
//     <h2>Name: ${req.body.name}</h2>
//     <h3>Email: ${req.body.email}</h3>
//     <h4>Password: ${req.body.password}</h4>`);
// });

// app.post("/api/v1/register", (req, res) => {
//     const user = {
//         name: req.body.name,
//         email: req.body.email,
//         passwrod: req.body.password
//     }
//     console.log(user);

//     const response = {
//         response: "success"
//     }
//     res.send(response)
// })

app.listen(PORT, ()=> {
    console.log(`server started running on the port ${PORT}`);
})