// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRateProvider {
    function getRate() external view returns (uint256);
}

contract USDTRateProvider is IRateProvider {
    // Return the fixed rate for USDT (1 in 18 decimals)
    function getRate() external pure override returns (uint256) {
        // 1 USDT = 1 USD, hence return 1 * 10^18
        return 1e18; // 1 in Wei
    }
}
