import mongoose from 'mongoose'

async function connect()
{
    mongoose.connect("//mongodb+srv://falconeri1501:admin123@cluster0.aposu55.mongodb.net/?retryWrites=true&w=majority")
    return mongoose.connection;
}


export default connect;


//mongodb+srv://falconeri1501:<password>@cluster0.aposu55.mongodb.net/?retryWrites=true&w=majority