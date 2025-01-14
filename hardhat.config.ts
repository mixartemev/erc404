import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "hardhat-gas-reporter"

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: "0.8.23" }, { version: "0.4.18" }] },
  gasReporter: {
    currency: "USD",
    gasPrice: 50,
    enabled: true,
  },
}

export default config
