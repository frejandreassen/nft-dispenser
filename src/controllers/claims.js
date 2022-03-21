const nftModel = require('../models/nft')
const { validateAddress } = require('../utils/validate-address')
const service = require('../service')

async function get(req, res, next) {
  try {
      
      const slug = req.params.slug
      const secret = req.query.secret

      //Check model to get keys
      const [result] = await nftModel.getBySlug(slug)
      const nft = result[0]
      //Bail out if token not found
      if (!nft) return res.status(404).send("can't find token. Should render 404")
    

      // Render the page with metadata
      return res.status(200).render("nft", {secret, nft})

  } catch (error) {
      return res.redirect('/login?e='+encodeURIComponent(`The email or pasword is incorrect`))
  }
}


async function post(req, res, next) {
  try {
      
      const slug = req.params.slug
      const secret = req.query.secret || req.body.claimSecret

      //Check model to get keys
      const [result] = await nftModel.getBySlug(slug)
      const nft = result[0]
      //Bail out if token not found
      if (!nft) return res.status(404).send("can't find token. Should render 404")
      if (nft.claimed) return res.status(401).send("This nft has already been claimed.")
      if (secret !== nft.claimSecret) return res.status(401).send("That's not the correct secret")

      // Collect metadata from opensea - NO POLYGON APIs AS OF 20220321!
      
      //Validate address
      const toAddress = await validateAddress(req.body.toAddress)
      if (!toAddress) return res.status(400).send(`We could not validate the address ${req.body.toAddress}. Are you sure it's correct?`)
      //Send the NFT to toAddress
      const receipt = service.transferNft(nft.tokenId, toAddress)

      //TODO Update NFT data entity


      // Render the page with metadata
      return res.status(200).render("nft", {secret, nft})

  } catch (error) {
      return res.redirect('/login?e='+encodeURIComponent(`The email or pasword is incorrect`))
  }
}


module.exports.get = get
module.exports.post = post