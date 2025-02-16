require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.4",
      }
    ],
    overrides: {
        "contracts/ERC1155Tradable.sol": {
        version: "0.7.4"
      },
      "contracts/Stirngs.sol": {
        version: "0.7.4"
      }
    }
  },
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: +process.env.HARDHAT_CHAIN_ID || 1337
    },
    ropsten: {
      url: process.env.ROPSTEN_URL,
      accounts: [`0x${process.env.ROPSTEN_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`]
    }
  }
};
