// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.16;
//pragma solidity =0.6.6; in case of compiling and deploying with SaitaRouter.sol
//pragma solidity =0.5.16; in case of compiling and deploying with SaitaFactory.sol


// a library for performing overflow-safe math, courtesy of DappHub (https://github.com/dapphub/ds-math)

library SafeMath {
    function add(uint x, uint y) internal pure returns (uint z) {
        require((z = x + y) >= x, 'ds-math-add-overflow');
    }

    function sub(uint x, uint y) internal pure returns (uint z) {
        require((z = x - y) <= x, 'ds-math-sub-underflow');
    }

    function mul(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x, 'ds-math-mul-overflow');
    }
}