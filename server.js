const express = require("express");

const app = express();

//Middleware for recieving json data
app.use(express.json());

//Health check route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Note taking Api is running"
    });
});

//Server's port
const PORT = process.env.PORT|| 3000

//Server check
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
