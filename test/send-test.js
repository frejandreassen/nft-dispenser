const assert = require('assert');
const web3Service = require('../src/service')

describe('### Send transaction polygon', async function () {
    describe('happy case:', async function () {
        it('should send transaction polygon', async function () {
            const result = await web3Service
                .transferNft(
                    '14104903334266501569704123442886848732076764548768528037732679359471959408740',
                    '0x0F91B8C173eE7fE2Df246639917547a918d2CbE4'
                    )
        });
        
    });
    
});
