const nftModel = require('../models/nft')
const slugify = require('slugify')
const { nanoid } = require('nanoid')
async function create(req, res, next) {
  try {
      
      
      const nft = req.body
      nft.contractId = req.params.contractId
      nft.slug = slugify(nft.tokenName.toLowerCase())

      //Check model to see if any duplicate values on slug, image url or tokenId
      const slugDupl = await nftModel.find('slug', nft.slug)
      if (slugDupl[0][0]) return res.status(200).send('Slug duplicate')
      const tokenImgUrl = await nftModel.find('tokenImgUrl', nft.tokenImgUrl)
      if (tokenImgUrl[0][0]) return res.status(200).send('tokenImgUrl duplicate')
      const tokenId = await nftModel.find('tokenId', nft.tokenId)
      if (tokenId[0][0]) return res.status(200).send('tokenId duplicate')
      
      //Insert nft
      nft.claimSecret = nanoid(8)
      nft.redeemSecret = nanoid(8)
      
      await nftModel.insert(nft)
      
      // Render the page with metadata
      return res.status(200).redirect(`/create/${nft.contractId}`)

  } catch (error) {
      return res.status(500).send(error.message)
  }
}

module.exports.create = create