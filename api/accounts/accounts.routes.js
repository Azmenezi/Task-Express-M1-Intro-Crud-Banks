const express = require("express");
const {
  getAllAccounts,
  createNewAccount,
  updateAccountById,
  getAccountByName,
  deleteAccountById,
} = require("./accounts.controllers");
const router = express.Router();

router.get("", getAllAccounts);

router.post("", createNewAccount);

router.delete("/:accountId", deleteAccountById);

router.put("/:accountId", updateAccountById);

router.get("/:accountName", getAccountByName);

module.exports = router;
