const ClassContract = artifacts.require("ClassContract");

module.exports = function(deployer) {
    deployer.deploy(ClassContract);
};
