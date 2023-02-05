migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfhv4t5qutwjiuc")

  collection.listRule = "author = @request.auth.id || members ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfhv4t5qutwjiuc")

  collection.listRule = null

  return dao.saveCollection(collection)
})
