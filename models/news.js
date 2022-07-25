var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, required: true },

  description: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  created: { type: Date, default: Date.now },
});
module.exports = mongoose.model("News", newsSchema);
// export default newsSchema;
