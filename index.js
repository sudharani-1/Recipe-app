const express=require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();
require('./config/db');

const app=express();

app.use(express.json());
app.use(cors());

app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", function (request, response) {
    return response.status(201).json({
        message: "Api is working"
    })
})