const {Datastore} = require('@google-cloud/datastore');
const datastore = new Datastore({
  projectId: 'andreassens',
});

const insert = () => {
  const NFTKey = datastore.key('NFT');
  const entity = {
    key: NFTKey,
    data: [
      {
        name: 'redeemedAt',
        value: new Date().toJSON(),
      },
      {
        name: 'claimAddress',
        value: '0x2as81..92',
      },
      {
        name: 'tokenId',
        value: '12342122',
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
const list = () => {
  const query = datastore
    .createQuery('NFT')
    .limit(10);

  return datastore.runQuery(query);
};

module.exports.insert = insert
module.exports.getById = getById
module.exports.list = list