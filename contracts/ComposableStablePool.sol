// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IComposableStablePool {
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function tokens() external view returns (address[] memory); // Assuming IERC20[] was supposed to be token addresses
    function amplificationParameter() external view returns (uint256);
    function rateProviders() external view returns (address[] memory); // Assuming IRateProvider[] are addresses
    function tokenRateCacheDurations() external view returns (uint256[] memory);
    function exemptFromYieldProtocolFeeFlag() external view returns (bool);
    function swapFeePercentage() external view returns (uint256);
    function owner() external view returns (address);
    function salt() external view returns (bytes32);
}

contract ComposableStablePool is IComposableStablePool{
constructor(
     string memory name,
        string memory symbol,
        IERC20[] memory tokens,
        uint256 amplificationParameter,
        IRateProvider[] memory rateProviders,
        uint256[] memory tokenRateCacheDurations,
        bool exemptFromYieldProtocolFeeFlag,
        uint256 swapFeePercentage,
        address owner,
        bytes32 salt
)
}