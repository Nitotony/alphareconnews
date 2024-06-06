import mongoose from "mongoose";

const userprefSchema = new mongoose.Schema(
  {
    userid: {// this is the id of the user this id is created by mogodb atlas for a document(client) from the client schema
      type: String,
      required: true,
      unique: true,
    },
   
    title:{
      type:String,
      required:true,
      },
    description:{
      type:String,
      required:true,

    },
    image:{
      type:String,

    },
    
    link:{
      type:String,
      required:true,
    }
  },
  { timestamps: true }
);

const Userpref = mongoose.model("Userpref", userprefSchema);

export default Userpref;
