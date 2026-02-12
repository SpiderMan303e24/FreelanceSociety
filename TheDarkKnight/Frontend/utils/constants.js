import { getCookie } from "./commonFunctions.js";

// Task short names
export const TASK_SHORT_NAMES = ["h", "dh", "v"];

let usersContractAddress;
let theListContractAddress;
let hashTaskContractAddress;
let doubleHashTaskContractAddress;
let validatorTaskContractAddress;

let usersContractMinimumBlock;
let theListContractMinimumBlock;
let hashTaskContractMinimumBlock;
let doubleHashTaskContractMinimumBlock;
let validatorTaskContractMinimumBlock;

// Try to get the blockchain data from the local storage, otherwise use default
// values
const throwDataError = () => {
    throw new Error("Invalid data");
};
try {
    const data = JSON.parse(localStorage.getItem("blockchainData"));
    // Contract addresses
    usersContractAddress
        = data.usersContractAddress ?? throwDataError();
    theListContractAddress
        = data.theListContractAddress ?? throwDataError();
    hashTaskContractAddress
        = data.hashTaskContractAddress ?? throwDataError();
    doubleHashTaskContractAddress
        = data.doubleHashTaskContractAddress ?? throwDataError();
    validatorTaskContractAddress
        = data.validatorTaskContractAddress ?? throwDataError;

    // Contract creation block indices
    usersContractMinimumBlock
        = Number(data.usersContractMinimumBlock) ?? throwDataError()
    theListContractMinimumBlock
        = Number(data.theListContractMinimumBlock) ?? throwDataError();
    hashTaskContractMinimumBlock
        = Number(data.hashTaskContractMinimumBlock) ?? throwDataError();
    doubleHashTaskContractMinimumBlock
        = Number(data.doubleHashTaskContractMinimumBlock)
            ?? throwDataError();
    validatorTaskContractMinimumBlock
        = Number(data.validatorTaskContractMinimumBlock)
            ?? throwDataError();;
} catch {
    console.log("catch");
    if (getCookie("isLocalBlockchain") === "true") {

        // Localhost contract addresses
        usersContractAddress
            = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        theListContractAddress
            = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
        hashTaskContractAddress
            = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
        doubleHashTaskContractAddress
            = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
        validatorTaskContractAddress
            = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

        // Localhost contract creation block indices
        usersContractMinimumBlock = 0;
        theListContractMinimumBlock = 0;
        hashTaskContractMinimumBlock = 0;
        doubleHashTaskContractMinimumBlock = 0;
        validatorTaskContractMinimumBlock = 0;
    } else {

        // Ethereum mainnet contract addresses
        usersContractAddress
            = "0xc9D45163cEF5f6c9E97AbE57DcfdeF693585B056";
        theListContractAddress
            = "0xea11585C6B8961CDe38a8edEE432328E69689B42";
        hashTaskContractAddress
            = "0xDFd1bE7B2F8628F89288EF7d65A1a28588315F8D";
        doubleHashTaskContractAddress
            = "0x96C397E47C672BAa7Ae13BAd34aDdfd18e895566";
        validatorTaskContractAddress
            = "0x76bc136117567f967816Bb4B1A7d77c325Fd19d0";

        // Sepolia contract creation block indices
        usersContractMinimumBlock = 24438298;
        theListContractMinimumBlock = 24438483;
        hashTaskContractMinimumBlock = 24438558;
        doubleHashTaskContractMinimumBlock = 24438579;
        validatorTaskContractMinimumBlock = 24438596;
    }
}

// Save blockchain data to user local storage
localStorage.setItem("blockchainData", JSON.stringify({
    usersContractAddress: usersContractAddress,
    theListContractAddress: theListContractAddress,
    hashTaskContractAddress: hashTaskContractAddress,
    doubleHashTaskContractAddress: doubleHashTaskContractAddress,
    validatorTaskContractAddress: validatorTaskContractAddress,
    usersContractMinimumBlock: usersContractMinimumBlock,
    theListContractMinimumBlock: theListContractMinimumBlock,
    hashTaskContractMinimumBlock: hashTaskContractMinimumBlock,
    doubleHashTaskContractMinimumBlock: doubleHashTaskContractMinimumBlock,
    validatorTaskContractMinimumBlock: validatorTaskContractMinimumBlock
}));

// Contract addresses by blockchain environment
export const USERS_CONTRACT_ADDRESS
    = usersContractAddress;
export const THE_LIST_CONTRACT_ADDRESS
    = theListContractAddress;
export const HASH_TASK_CONTRACT_ADDRESS
    = hashTaskContractAddress;
export const DOUBLE_HASH_TASK_CONTRACT_ADDRESS
    = doubleHashTaskContractAddress;
export const VALIDATOR_TASK_CONTRACT_ADDRESS
    = validatorTaskContractAddress;

// Contract block indices by blockchain environment
export const USERS_CONTRACT_MINIMUM_BLOCK
    = usersContractMinimumBlock;
export const THE_LIST_CONTRACT_MINIMUM_BLOCK
    = theListContractMinimumBlock;
export const HASH_TASK_CONTRACT_MINIMUM_BLOCK
    = hashTaskContractMinimumBlock;
export const DOUBLE_HASH_TASK_CONTRACT_MINIMUM_BLOCK
    = doubleHashTaskContractMinimumBlock;
export const VALIDATOR_TASK_CONTRACT_MINIMUM_BLOCK
    = validatorTaskContractMinimumBlock;
