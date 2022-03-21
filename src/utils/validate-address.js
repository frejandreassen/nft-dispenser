const Web3 = require("web3");
  
async function validateAddress(address) {

  try {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
      )
    );

    //Validate address
    const isAddress = web3.utils.isAddress(address)
    if (isAddress) return address
    const resolvedAddress = await web3.eth.ens.getAddress(address)
    if (resolvedAddress) return resolvedAddress

    return false
    
  } catch(error) {
    return false
  }
}

module.exports.validateAddress = validateAddress