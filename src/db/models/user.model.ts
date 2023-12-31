import mongoose from "mongoose";
const { Schema } = mongoose;

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  profile: string;
  password: string;
}

const UserSchema = new Schema<IUser>(
  {
    firstname: String,
    lastname: String,
    email: {
      required: true,
      type: String,
    },
    profile: String,
    password: String,
  },
  {
    timestamps: true,
    virtuals: {
      fullname: {
        get() {
          return this.firstname + " " + this.lastname;
        },
      },
    },
  },
);

export const UserModel = mongoose.model("User", UserSchema);
