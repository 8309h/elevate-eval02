const mongoose =  require("mongoose");

const connectDB  =  async()=> {
      try {
            await mongoose.connect(process.env.MONGO_URL);
            console.log("Mongo DB Connected Succesfully")
      }catch(err) {
            console.log("Mongo DB connection Failed");
            console.log(err.message);
            process.exit(1);
      }
}

module.exports = connectDB;