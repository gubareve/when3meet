migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfhv4t5qutwjiuc")

  collection.listRule = null
  collection.viewRule = "@request.auth.id = author.id || @request.data.members.id ?= members"
  collection.updateRule = "@request.auth.id = author.id || @request.data.members.id ?= organizers"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfhv4t5qutwjiuc")

  collection.listRule = ""
  collection.viewRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
