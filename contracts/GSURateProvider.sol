// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IRateProvider {
    function getRate() external view returns (uint256);
}

contract GSURateProvider is IRateProvider {
    // Return the fixed rate for GSU (0.985246468484953 in 18 decimals)
    function getRate() external pure override returns (uint256) {
        // Convert the rate to 18 decimal precision
        return 985246468484953000; // 0.985246468484953 * 10^18
    }
}
