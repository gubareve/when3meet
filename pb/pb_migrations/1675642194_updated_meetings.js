migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qs6y4fnwd3ir8gd")

  collection.createRule = "group.author.id = @request.auth.id || group.organizers.id ?= @request.auth.id"
  collection.updateRule = "group.author.id = @request.auth.id || group.organizers.id ?= @request.auth.id"
  collection.deleteRule = "group.author.id = @request.auth.id || group.organizers.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qs6y4fnwd3ir8gd")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
