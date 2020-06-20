const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`Mongo DB connected ${conn.connection.host}`.cyan.underline.bold)
    }
    catch (e) {
        console.log(`Error: ${error.msg}`.red)
        process.exit(1)
    }
}

module.exports = connectDB