const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");

//Wallet Addresses
const whiteList = [
  "0x0000000000000000000000000000000000000001",
  "0x0000000000000000000000000000000000000002",
  "0x0000000000000000000000000000000000000003"
];

const leaves = whiteList.map((x) => keccak256(x));
const merkle = new MerkleTree(leaves, keccak256, { sortPairs: true });

const roothash = merkle.getRoot();

console.log(merkle.toString());

console.log("MerkleTree " , roothash.toString("hex"));
console.log("Merkle proof for given wallet address " ,
  merkle.getHexProof(keccak256("0x0000000000000000000000000000000000000001"))
);

