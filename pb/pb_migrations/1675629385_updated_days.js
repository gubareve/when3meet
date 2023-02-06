migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lm2u55tvi7m5oc2")

  collection.listRule = "meeting.group.members.id ?= @request.auth.id"
  collection.viewRule = "meeting.group.members.id ?= @request.auth.id"
  collection.createRule = "@request.auth.id = meeting.group.author.id"
  collection.updateRule = "meeting.group.members.id ?= @request.auth.id"
  collection.deleteRule = "meeting.group.members.id ?= @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lm2u55tvi7m5oc2")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
