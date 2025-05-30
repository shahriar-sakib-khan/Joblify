import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "lastName",
  },
  location: {
    type: String,
    default: "my city",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  avatar: String,
  avatarPublicId: String,
});

UserSchema.methods.toJSON = function () {
  let userObj = this.toObject();
  delete userObj.password;
  console.log("password deleted")
  return userObj;
};

export default mongoose.model("User", UserSchema);
