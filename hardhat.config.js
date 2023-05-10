require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const privateKeys = process.env.PRIVATE_KEYS || "";
const goerliApiKey = process.env.GOERLI_API_KEY;
const mumbaiApiKey = process.env.MUMBAI_API_KEY;
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {},
    goerli: {
      url: goerliApiKey,
      accounts: privateKeys.split(","),
    },
    mumbai: {
      url: mumbaiApiKey,
      accounts: privateKeys.split(","),
    },
  },
};
