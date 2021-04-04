const dotenv = require("dotenv");

dotenv.config();

const mongodb = require("mongodb");

mongodb
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((client) => {
    module.exports = client.db();
    const app = require("./app");
    app.listen(process.env.PORT || 3000, () => {
      console.log("server works successfully");
    });
  })
  .catch((err) => {
    console.log(err);
  });
