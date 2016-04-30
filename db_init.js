var Datastore = require('nedb')
  , db = new Datastore({ filename: 'data/followee.db' })
db.loadDatabase()

console.log('end')