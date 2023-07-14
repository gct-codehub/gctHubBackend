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
            type: mongoose.Schema.Types.ObjectId,
            ref: "Access",
        },
        users:[
          {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Users"
          }
        ],
        roleName: {
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
