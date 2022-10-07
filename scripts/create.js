const { ethers, upgrades } = require("hardhat");

async function main() {
	  const MasterMeme = await ethers.getContractFactory("MasterMeme");
	  const masterMeme = await upgrades.deployProxy(MasterMeme, ["ErisianLiberationFront","ELF", "https://d1k6fm1hgt02b7.cloudfront.net"]);
	  await masterMeme.deployed();
	  console.log("MasterMeme deployed to:", masterMeme.address);
}

main();
