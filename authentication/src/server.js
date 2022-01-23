const app = require("./index");
const connect = require("./configs/db");

app.listen(2345, async function () {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (err) {
    console.log(err);
  }
});
