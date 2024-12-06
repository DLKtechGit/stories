const userModel = require('../models/userModel')

const registerUser = async (req, res) => {
    const { userName, address, email, password, confirmPassword } = req.body;

    // Validate input fields
    if (!userName || !address || !email || !password || !confirmPassword) {
        return res.status(400).send({
            message: "All fields are required",
        });
    }

    try {
        // Check if the email already exists
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(409).send({
                message: "Email already exists",
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).send({
                message: "Password and Confirm Password do not match",
            });
        }


        const userData = await userModel.create({
            userName,
            address,
            email,
            password
        });

        return res.status(201).send({
            message: "User registered successfully",
            user: { id: userData._id, userName, email,address},
        });
    } catch (error) {
        return res.status(500).send({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({
            message: "Email and Password are required",
        });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                message: "User not found",
            });
        }

        const isPasswordValid = user.password === password
        if (!isPasswordValid) {
            return res.status(401).send({
                message: "Invalid credentials",
            });
        }
  
        return res.status(200).send({
            message: "Login successfully",
            user: { id: user._id, userName: user.userName, email: user.email,address:user.address }, 
        });
    } catch (error) {
        return res.status(500).send({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

module.exports={
    registerUser,
    loginUser
}