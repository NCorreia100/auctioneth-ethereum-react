const path = require('path');
const fs = require('fs');
const SRC_DIR= path.join(__dirname,'../contracts/Auction.sol');


module.exports = {
    "language": "Solidity",
    "sources": {
        "Factory": {
            "content": fs.readFileSync(SRC_DIR, "utf8")
        }
    },
    "settings": {
        "outputSelection": {
            "*": {
                "*": [
                    "abi",
                    "evm.bytecode"
                ]
            }
        }
    }
}