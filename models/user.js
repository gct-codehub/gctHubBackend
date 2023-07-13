import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mailId: {
      type: String,
      required: true,
      unique: true,
    },
    rollNum: {
      type: String,
      required: true,
    },
    department: {
      type: String,
    },
    year: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    orgSubscribed: [],
    roles: [
      {
        orgId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Organization",
        },
        role: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("Users", userSchema);
export default userModel;
