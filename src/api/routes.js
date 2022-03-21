const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {res.status(200).render("index")})


//Set up NFTs
// router.get('/create', (req, res) => {res.status(200).render("create-nft")})
// router.post('/create', nftController.create)
// router.get('/:tokenId', nftController.get)

//Claim NFT
// router.get('/:tokenId/claim/:claimCode', claimsController.get)
// router.post('/:tokenId/claim/:claimCode', claimsController.post)

// Redeem value
// router.get('/:tokenId/redeem/:redeemCode', redeemsController.get)
// router.post('/:tokenId/redeem/:redeemCode', redeemsController.post)

module.exports = router