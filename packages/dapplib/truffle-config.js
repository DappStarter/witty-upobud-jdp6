require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture struggle return rural exchange goddess light army genius'; 
let testAccounts = [
"0xab557b8be60dd70c78f2e53217200ebdc84ca64d37660f3012a5ddc0e88fecc5",
"0x5abf29131bcec82d414bd1af117c31c108985ee9a5b7aa25977526fc8c407008",
"0xa113da8cc5c90fa824db2d76835d704fb3c1910e6bb4b92cefa0307e34c70048",
"0xa2ae08aaae8b6a6fa57e2d153e1a95edd944e6bfbc8cc0a37d286bcb9d7e193e",
"0xd57434c71133659c67d4a2809cfbb865d1620c88d589be124d65b990dfbdd653",
"0x4723f8a8d90f7a272f1249853ec1130b9223d4203c6d3ba19bb18b38adf85043",
"0x55b97deccd9692111758c7ebad1c57eb8e8b5aade8c1f3f326b018210d435867",
"0x147952522d5a2cf93887c0a49e9ca0762b141299cfe281c53f7567228fe6eef2",
"0xe523f8335e7311227c54b204206a439f8e01ac4bd10000ce06e5c7dda59e3b9f",
"0x8c259596cb69bc6d117068aa6e0e517489d1d4f3cacc5e34f05246b22861515a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


