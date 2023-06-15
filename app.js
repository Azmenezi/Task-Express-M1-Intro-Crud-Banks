const PORT = 8000;
const express = require("express");
const accountRoute = require("./api/accounts/accounts.routes");

app = express();

app.use(express.json());

app.use("/accounts", accountRoute);

app.listen(PORT, () => console.log(`server running in ${PORT}`));
