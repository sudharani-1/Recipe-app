const mongoose = require('mongoose');

// Database detail
//const dbName = "recipesdb"

// Connection URi
const uri = process.env.MONGODB_ATLAS_DB;

mongoose.connect(uri)
.then((response) => {
    if(response) {
        console.log("Connection to database is successful")
    }
}).catch((err) => {
    console.log(err)
})