const Web3 = require("web3");
const openseaContract = require('./abi/opensea')
const receiptExample = require('../test/example-safeTransferFrom')
const nftModel = require('./models/nft')

async function transferNft(tokenId, toAddress) {

  // Configuring the connection to the Polygon node
  const network = process.env.POLYGON_NETWORK;
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${network}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    )
  );

  // Creating a signing account from a private key
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.SIGNER_PRIVATE_KEY
  );
  web3.eth.accounts.wallet.add(signer);
  
  // Assigning the right amount of gas
  const tx = {
    from: signer.address,
    to: toAddress
  }
  tx.gas = await web3.eth.estimateGas(tx);

  // OpenSea contract
  const contractAddress = "0x2953399124F0cBB46d2CbACD8A89cF0599974963";
  const nftContract = new web3.eth.Contract(openseaContract.abi, contractAddress);

  //Transfer NFT
  // const receipt = await nftContract
  //                       .methods
  //                       .safeTransferFrom(
  //                         signer.address,
  //                         toAddress,
  //                         tokenId,
  //                         1,
  //                         '0x0')
  //                       .send({
  //                         from: signer.address,
  //                         gas: tx.gas * 10,
  //                       })
  const receipt = receiptExample.safeTransferFrom()

  //Store data (load from model)
  const insert = await nftModel.insert()
  const NFTs = await nftModel.list()
  const NFT = await nftModel.getById('123421221')
  
  //Store successinformation
  return receipt
}

module.exports.transferNft = transferNft