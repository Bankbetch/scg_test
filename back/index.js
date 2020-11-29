const express = require("express"),
  app = express(),
  config = require("./configs/app");

require("./configs/express")(app);

app.use(require("./routes"));

require("./configs/errorHandler")(config.isProduction, app);

const server = app.listen(config.port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server is running at http://${host}:${port}`);
});
