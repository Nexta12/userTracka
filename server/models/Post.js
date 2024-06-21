const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const { stripHtml } = require("string-strip-html");

// initialize plugin
 mongoose.plugin(slug)

const postSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    desc: String,
    author: String,
    snippet: String,
    slug: {
      type: String,
      slug: "title",
      uniqueSlug: true,
      slug_padding_size: 2,
    },
  },
  { timestamps: true }
);

postSchema.pre("validate", function (next) {
  if (this.desc) {
    this.snippet = stripHtml(this.desc.substring(0, 150)).result;
  }

  next();
});

module.exports = mongoose.model("Post", postSchema);
