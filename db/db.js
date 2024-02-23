const mongoose = require('mongoose')

const dbConnect = async () => {
    const uri = `${process.env.URI}`;
    const { connection } = await mongoose.connect(uri);
    console.log(`Database connect successfully on ${connection.host}`);
    
};



module.exports = dbConnect




