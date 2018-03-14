//const SafeMath = artifacts.require('./math/SafeMath.sol');
//const Ownable = artifacts.require('./ownership/Ownable.sol');
const Mevu = artifacts.require("./build/Mevu.sol");
const Admin = artifacts.require("./build/Admin.sol");
const Events = artifacts.require("./build/Events.sol");
const Wagers = artifacts.require("./build/Wagers.sol");
const WagersController = artifacts.require("./build/WagersController.sol");
const CustomWagers = artifacts.require("./build/CustomWagers.sol");
const CustomWagersController = artifacts.require("./build/CustomWagersController.sol");
const Rewards = artifacts.require("./build/Rewards.sol");
const OracleVerifier = artifacts.require("./build/OracleVerifier.sol");
const Oracles = artifacts.require("./build/Oracles.sol");
const OraclesController = artifacts.require("./build/OraclesController.sol");
const MvuToken = artifacts.require("./build/MvuToken.sol");
const CancelController = artifacts.require("./build/CancelController.sol");

const BigNumber = require('bignumber.js');

module.exports = (deployer, network, accounts) => {
    //  let totalSupply, minimumGoal, minimumContribution, maximumContribution, deployAddress, start, hours, isPresale, discounts;
    let deployAddress = accounts[0];    
    let totalSupply = 500000000000;
  

     //deployer.deploy(SafeMath, {from: deployAddress});
    // deployer.deploy(Ownable, {from: deployAddress});

     //deployer.link(Ownable, [MvuToken, MvuSale], {from: deployAddress});
    // deployer.link(SafeMath, [MvuToken, MvuSale], {from: deployAddress});

    // deployer.deploy(MvuToken, totalSupply, {from: deployAddress}).then(() => { 
    //     return deployer.deploy(MvuSale,
    //         MvuToken.address,
    //         isPresale,
    //         new BigNumber(minimumGoal),
    //         new BigNumber(minimumContribution),
    //         new BigNumber(maximumContribution),
    //         new BigNumber(start),
    //         new BigNumber(hours),
    //         discounts.map(v => new BigNumber(v)),
    //         {from: deployAddress});
    // });
    
    deployer.deploy(Oracles,  {from: deployAddress, gas:9000000});
    deployer.deploy(OraclesController,  {from: deployAddress, gas:9000000});
    deployer.deploy(Admin,  {from: deployAddress, gas:9000000});
    deployer.deploy(Events,  {from: deployAddress, gas:9000000});
    deployer.deploy(OracleVerifier,  {from: deployAddress, gas:9000000});
    deployer.deploy(Wagers,  {from: deployAddress, gas:9000000});
    deployer.deploy(WagersController,  {from: deployAddress, gas:9000000});
    deployer.deploy(CustomWagers,  {from: deployAddress, gas:9000000});
    deployer.deploy(CustomWagersController,  {from: deployAddress, gas:9000000});
    deployer.deploy(CancelController,  {from: deployAddress, gas:9000000});
    deployer.deploy(Rewards, {from: deployAddress, gas:9000000});
    deployer.deploy(Mevu,  {from: deployAddress, gas:9000000, value:9100000000000000000});
    deployer.deploy(MvuToken, totalSupply,  {from: deployAddress});

    //  deployer.deploy(MvuToken, totalSupply,  {from: deployAddress}).then(() => {
      
    //      deployer.deploy(MvuSale, MvuToken.address,  1512145434, 1612145434, 1, deployAddress, {from: deployAddress}).then(() => {
    //         MvuToken.transfer(MvuSale.address, totalSupply, {from: deployAddress});
    //         //deployer.link(MvuSale, MvuToken, {from: deployAddress});
    //     });
    // });
};
