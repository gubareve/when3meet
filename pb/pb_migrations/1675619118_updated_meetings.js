migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qs6y4fnwd3ir8gd")

  collection.viewRule = "group.members.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qs6y4fnwd3ir8gd")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
