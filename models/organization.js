import mongoose from "mongoose";

const orgSchema = mongoose.Schema(
  {
    orgName: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    roles: [
      {
        accessNumber: {
          type: Number,
        },
        roleName: {
          type: String,
        },
        access: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const orgModel = mongoose.model("Organizations", orgSchema);
export default orgModel;
