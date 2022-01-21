require('dotenv').config()
const app = require(".");

const connectDatabase = require("./config/db");


app.listen(process.env.PORT, async() => {
    try{
        await connectDatabase();
        console.log(`Server is working on http://localhost:${process.env.PORT}`);
    }catch(err){
       console.log(err)
    }
    
});

