const express = require('express')
const router = express.Router()

const claimsController = require('../controllers/claims')
const nftsController = require('../controllers/nfts')

router.get('/', (req, res) => {res.status(200).render("nft")})


//Set up NFTs
router.get('/create/:contractId', (req, res) => {res.status(200).render("create-nft")})
router.post('/create/:contractId', nftsController.create)
// router.get('/:tokenId', nftController.get)

//Claim NFT
router.get('/nft/:slug', claimsController.get)
router.post('/nft/:slug', claimsController.post)

// Redeem value
// router.get('/:tokenId/redeem/:redeemCode', redeemsController.get)
// router.post('/:tokenId/redeem/:redeemCode', redeemsController.post)

module.exports = router