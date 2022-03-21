function safeTransferFrom() {
  return {
    blockHash: '0x52a365c13869a93a4d1d129443406ea79ebc6d5abb84e5b7efde495857b96079',
    blockNumber: 25596764,
    contractAddress: null,
    cumulativeGasUsed: 3716296,
    effectiveGasPrice: 4759966006,
    from: '0x1f2f17a605ebbbbd49392d9cb3ff1355e8ba0475',
    gasUsed: 50353,
    logsBloom: '0x00000000000000002000000000000000000001000000000000000000000000000000000000000000000000000000000000008000000000000000000000002000000000000000000000010000000000800000000000002000000100000000004000000000000000000000000000000000040000000000000080000000000000000000000000000000000000000000000000000000000080000000000000000000200000000000000000000000000000000000000000000000000000000000004000000008000000000001000000000004000000000008000000100040000000000020000000000000000000000000000000000000000000000000080000100000',
    status: true,
    to: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
    transactionHash: '0x1c9bc067aaa51b515953c32e419125e6e8bb6b7c19ff8d23dae49905c944696e',
    transactionIndex: 21,
    type: '0x2',
    events: {
      '0': {
        address: '0x0000000000000000000000000000000000001010',
        blockHash: '0x52a365c13869a93a4d1d129443406ea79ebc6d5abb84e5b7efde495857b96079',
        blockNumber: 25596764,
        logIndex: 57,
        removed: false,
        transactionHash: '0x1c9bc067aaa51b515953c32e419125e6e8bb6b7c19ff8d23dae49905c944696e',
        transactionIndex: 21,
        id: 'log_76b1af94',
        returnValues: "Result {}",
        event: undefined,
        signature: null,
        raw: ["Object"]
      },
      TransferSingle: {
        address: '0x2953399124F0cBB46d2CbACD8A89cF0599974963',
        blockHash: '0x52a365c13869a93a4d1d129443406ea79ebc6d5abb84e5b7efde495857b96079',
        blockNumber: 25596764,
        logIndex: 56,
        removed: false,
        transactionHash: '0x1c9bc067aaa51b515953c32e419125e6e8bb6b7c19ff8d23dae49905c944696e',
        transactionIndex: 21,
        id: 'log_2c17d7da',
        returnValues: ["Result"],
        event: 'TransferSingle',
        signature: '0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62',
        raw: [Object]
      }
    }
  }
}

module.exports.safeTransferFrom = safeTransferFrom