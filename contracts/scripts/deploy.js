async function main() {
  // Get the contract factories
  const Matic = await ethers.getContractFactory("Matic");
  const Tether = await ethers.getContractFactory("Tether");
  const Link = await ethers.getContractFactory("Link");

  // Deploy the contracts
  const matic = await Matic.deploy();
  const tether = await Tether.deploy();
  const link = await Link.deploy();

  // Wait for the contracts to be mined
  await matic.deployed();
  await tether.deployed();
  await link.deployed();

  // Log the contract addresses
  console.log("Matic token deployed to:", matic.address);
  console.log("Tether token deployed to:", tether.address);
  console.log("Link token deployed to:", link.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
