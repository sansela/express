const registerUser = (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        passwrod: req.body.password
    }
    console.log(user);
    
    const response = {
        response: "success"
    }
    res.send(response)
}

module.exports = registerUser;