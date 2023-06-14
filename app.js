const PORT = 8000;
const express = require("express");
let accounts = require("./accounts");
app = express();

app.use(express.json());

app.get("/accounts", (req, res) => {
  return res.status(200).json(accounts);
});

app.post("/accounts", (req, res) => {
  //   const { accountId } = req.params;
  const newId = accounts[accounts.length - 1].id + 1;
  console.log();
  let newAccount = { id: newId, ...req.body, funds: 0 };
  accounts.push(newAccount);
  return res.status(201).json(accounts);
});

app.delete("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const foundAccount = accounts.find((account) => account.id === +accountId);
  if (foundAccount) {
    accounts = accounts.filter((account) => account.id !== +foundAccount.id);
    return res.status(201).json(accounts);
  } else {
    return res.status(404).json({ message: "not found" });
  }
});

app.put("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const foundAccount = accounts.find((account) => account.id === +accountId);
  if (foundAccount) {
    const accountIndex = accounts.indexOf(foundAccount);
    accounts[accountIndex] = { id: foundAccount.id, ...req.body };
    return res.status(201).json(accounts);
  } else {
    return res.status(404).json({ message: "not found" });
  }
});

app.get("/accounts/:accountName", (req, res) => {
  const { accountName } = req.params;
  const foundAccount = accounts.find(
    (account) => account.username == accountName
  );
  if (foundAccount) {
    return res.status(200).json(foundAccount);
  } else {
    return res.status(404).json({ message: "not found" });
  }
});

app.listen(PORT, () => console.log(`server running in ${PORT}`));
