const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore({
  projectId: 'andreassens',
});

const insert = (nft) => {
  const NFTKey = datastore.key('NFT');
  const entity = {
    key: NFTKey,
    data: [
      {
        name: 'contractId',
        value: nft.contractId,
      },
      {
        name: 'created',
        value: new Date().toJSON(),
      },
      {
        name: 'tokenId',
        value: nft.tokenId,
      },
      {
        name: 'tokenName',
        value: nft.tokenName,
      },
      {
        name: 'slug',
        value: nft.slug,
      },
      {
        name: 'tokenDescription',
        value: nft.tokenDescription,
      },
      {
        name: 'tokenImgUrl',
        value: nft.tokenImgUrl,
      },
      {
        name: 'claimSecret',
        value: nft.claimSecret,
      },
      {
        name: 'redeemSecret',
        value: nft.redeemSecret,
      },
    ],
  };
  return datastore.save(entity);
}

const getById = (id) => {
  const query = datastore
    .createQuery('NFT')
    .filter('tokenId', '=', id);

  return datastore.runQuery(query);
}

const getBySlug = (slug) => {
  const query = datastore
    .createQuery('NFT')
    .filter('slug', '=', slug);

  return datastore.runQuery(query);
}

const find = (property, value) => {
  const query = datastore
    .createQuery('NFT')
    .filter(`${property}`, '=', value);

  return datastore.runQuery(query);
}
const list = () => {
  const query = datastore
    .createQuery('NFT')
    .limit(10);

  return datastore.runQuery(query);
};

module.exports.insert = insert
module.exports.getById = getById
module.exports.getBySlug = getBySlug
module.exports.find = find
module.exports.list = list