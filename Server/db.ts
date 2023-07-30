import mongoose from 'mongoose';

const URL = "mongodb+srv://Admin:Admin@cluster0.ahmcnx1.mongodb.net/?retryWrites=true&w=majority"

mongoose.set("strictQuery", false);

const mongodb = () => {
    mongoose.connect(URL).then(() => {
        console.log("Connected Successfully!");
    }).catch((error) => {
        console.log(error);
    });
}

export default mongodb;