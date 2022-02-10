const stanceTOken = artifacts.require("stanceTOken");

module.exports = function(deployer) {
    const _name = "stanceTOken";
    const _symbol = "JS";
    const _decimals = 18;
    deployer.deploy(stanceTOken, _name, _symbol, _decimals);
};
