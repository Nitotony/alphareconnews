import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userid: {// this is the id of the user this id is created by mogodb atlas for a document(client) from the client schema
      type: String,
      required: true,
      unique: true,
    },
    newstracked:{// this contains the news tracked by the user
        type:Array,
    },
    savednews:{//this contains the id of the news saved by the user
         type:Array,

    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
