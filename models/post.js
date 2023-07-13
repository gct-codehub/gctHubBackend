import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    postUrl: {
      type: String,
    },
    postDesc: {
      type: String,
    },
    orgId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
    reactions: {
      type: String,
    },
    rsvp: {
      type: String,
    },
    category: [],
    notifiContent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("Posts", postSchema);
export default postModel;
