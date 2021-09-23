require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space strike curtain saddle essay grace bean outer story'; 
let testAccounts = [
"0x981d733071fe4772a433c2613c71e5a7ee5a4bd5e7619511e06a4828f945f22c",
"0xcf57ae872be8063362d1e0d54838e5e7af781aa734a6625a91fac0b45ea891ca",
"0x637534d5de9610760eefc729b686690aa8fad1fc8be9e3f71177026d23a1da8b",
"0xa10fc6ba4381ae9f02165655f418b936d5f781aa2ca4f0dd73f0cd3db998bf57",
"0x81031286d14d28a650defc9698d90e7e21e2e89c80efa0ee03d17f813f804046",
"0x71b77df727d33ac8fc8b79d822729f31b7780bdc1e4278bd92aaaa57296bd375",
"0x28370041192c94f805feea6e34c1ae58582b5244f457b4ac28d8093bad3dc261",
"0x94ad1fe6ce259cc84db1c9a565a3bef327aed4ea1b137b39818d0cb02076a9b1",
"0x13c907b81d4a3a923d0caea492b0754412bf978915ea8a9b288b266d6c431fe3",
"0xcc2b652c2ca34606de48d678bd906bbe450304d3387e5317c94fa2295de4b857"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

