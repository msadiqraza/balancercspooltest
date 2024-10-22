// const ComposableStablePoolFactory = artifacts.require(
// 	"ComposableStablePoolFactory"
// );

// module.exports = async function (deployer, network, accounts) {
// 	// Deploy Composable Stable Pool Factory
// 	await deployer.deploy(ComposableStablePoolFactory);
// 	const factoryInstance = await ComposableStablePoolFactory.deployed();

// 	console.log(
// 		`ComposableStablePoolFactory deployed at: ${factoryInstance.address}`
// 	);

// 	// Example of creating a pool (replace parameters as needed)
// 	// Pool parameters: name, symbol, tokens, weights, amplificationParameter, swapFeePercentage, etc.
// 	const poolName = "MyComposableStablePool";
// 	const poolSymbol = "MCSP";
// 	const tokens = ["0xTokenAddress1", "0xTokenAddress2"]; // Replace with actual token addresses on Sepolia
// 	const amplificationParameter = "500"; // Adjust amplification factor as needed
// 	const swapFeePercentage = "0.003"; // 0.3% swap fee

// 	// Creating a new pool using the factory
// 	const createPoolTx = await factoryInstance.create(
// 		poolName,
// 		poolSymbol,
// 		tokens,
// 		amplificationParameter,
// 		swapFeePercentage,
// 		{ from: accounts[0] }
// 	);

// 	console.log(
// 		`Composable Stable Pool created successfully with transaction: ${createPoolTx.tx}`
// 	);
// };

const { Web3 } = require("web3");
const web3 = new Web3("http://172.26.32.1:7545");
// const web3 = new Web3("http://127.0.0.1:8545");
// const fs = require("fs");

const GSURateProvider = artifacts.require("GSURateProvider");
const USDTRateProvider = artifacts.require("USDTRateProvider");

// Load the ABI from the JSON file you saved
// const factoryABI = JSON.parse(
// 	fs.readFileSync(
// 		"../contracts/ComposableStablePoolFactory.json",
// 		"utf8"
// 	)
// );

const factoryABI = [
	{
		inputs: [
			{
				internalType: "contract IVault",
				name: "vault",
				type: "address",
			},
			{
				internalType: "contract IProtocolFeePercentagesProvider",
				name: "protocolFeeProvider",
				type: "address",
			},
			{
				internalType: "string",
				name: "factoryVersion",
				type: "string",
			},
			{
				internalType: "string",
				name: "poolVersion",
				type: "string",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [],
		name: "FactoryDisabled",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "pool",
				type: "address",
			},
		],
		name: "PoolCreated",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				internalType: "string",
				name: "symbol",
				type: "string",
			},
			{
				internalType: "contract IERC20[]",
				name: "tokens",
				type: "address[]",
			},
			{
				internalType: "uint256",
				name: "amplificationParameter",
				type: "uint256",
			},
			{
				internalType: "contract IRateProvider[]",
				name: "rateProviders",
				type: "address[]",
			},
			{
				internalType: "uint256[]",
				name: "tokenRateCacheDurations",
				type: "uint256[]",
			},
			{
				internalType: "bool",
				name: "exemptFromYieldProtocolFeeFlag",
				type: "bool",
			},
			{
				internalType: "uint256",
				name: "swapFeePercentage",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "salt",
				type: "bytes32",
			},
		],
		name: "create",
		outputs: [
			{
				internalType: "contract ComposableStablePool",
				name: "",
				type: "address",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "disable",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes4",
				name: "selector",
				type: "bytes4",
			},
		],
		name: "getActionId",
		outputs: [
			{
				internalType: "bytes32",
				name: "",
				type: "bytes32",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getAuthorizer",
		outputs: [
			{
				internalType: "contract IAuthorizer",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getCreationCode",
		outputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getCreationCodeContracts",
		outputs: [
			{
				internalType: "address",
				name: "contractA",
				type: "address",
			},
			{
				internalType: "address",
				name: "contractB",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getPauseConfiguration",
		outputs: [
			{
				internalType: "uint256",
				name: "pauseWindowDuration",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "bufferPeriodDuration",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getPoolVersion",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getProtocolFeePercentagesProvider",
		outputs: [
			{
				internalType: "contract IProtocolFeePercentagesProvider",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getVault",
		outputs: [
			{
				internalType: "contract IVault",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "isDisabled",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "pool",
				type: "address",
			},
		],
		name: "isPoolFromFactory",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "version",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

module.exports = async function (deployer, network, accounts) {
	const factoryAddress = "0xDB8d758BCb971e482B2C45f7F8a7740283A1bd3A";

	// Create a contract instance using the ABI and the deployed address
	const factoryInstance = new web3.eth.Contract(
		factoryABI,
		factoryAddress
	);

	console.log(
		`Interacting with ComposableStablePoolFactory deployed at: ${factoryAddress}`
	);

	await deployer.deploy(GSURateProvider);
	const gsuRateProviderAddress = GSURateProvider.address;
	console.log(
		`GSU Rate Provider deployed at: ${gsuRateProviderAddress}`
	);

	// Deploy USDT Rate Provider
	await deployer.deploy(USDTRateProvider);
	const usdtRateProviderAddress = USDTRateProvider.address;
	console.log(
		`USDT Rate Provider deployed at: ${usdtRateProviderAddress}`
	);

	// Example of creating a pool (replace parameters as needed)
	const poolName = "MyComposableStablePool";
	const poolSymbol = "MCSP";

	const tokens = [
		"0x2958f2F961446d33715fA76e23aceB6Bca3072F5",
		"0xdAC17F958D2ee523a2206206994597C13D831ec7",
	].map((address)=> web3.utils.toChecksumAddress(address));

	const amplificationParameter = web3.utils.toBigInt(500); // web3.utils.toWei("500", "ether");
	const rateProviders = [
		gsuRateProviderAddress,
		usdtRateProviderAddress,
    ].map((address) => web3.utils.toChecksumAddress(address));
    
	const tokenRateCacheDurations = [
		web3.utils.toBigInt(600),
		web3.utils.toBigInt(600),
    ]; 
    
	const exemptFromYieldProtocolFeeFlag = true; // Set to false unless you have specific yield exemptions
	// const swapFeePercentage = web3.utils.toWei("0.003", "ether"); // 0.3% swap fee
	const swapFeePercentage = web3.utils.toBigInt(3000000000000000); // 0.3% swap fee
	const owner = accounts[0]; // Address that will own the pool
	const salt = web3.utils.randomHex(32); // Random salt for the pool creation

    const version = await factoryInstance.methods.version().call();
	console.log("version", version);

	const gasEstimate = await factoryInstance.methods
		.create(
			poolName,
			poolSymbol,
			tokens,
			amplificationParameter,
			rateProviders,
			tokenRateCacheDurations,
			exemptFromYieldProtocolFeeFlag,
			swapFeePercentage,
			owner,
			salt
		)
		.estimateGas({ from: accounts[0] });
	console.log("Gas estimate:", gasEstimate);

	try {
		const createPoolTx = await factoryInstance.methods
			.create(
				poolName,
				poolSymbol,
				tokens,
				amplificationParameter,
				rateProviders,
				tokenRateCacheDurations,
				exemptFromYieldProtocolFeeFlag,
				swapFeePercentage,
				owner,
				salt
			)
			.send({
				from: accounts[0],
				gas: gasEstimate+1000000,
			});
		console.log(
			`Composable Stable Pool created successfully with transaction: ${createPoolTx.transactionHash}`
		);
	} catch (error) {
		console.error("Error creating pool:", error);
	}
};
