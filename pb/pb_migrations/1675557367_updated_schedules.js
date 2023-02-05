migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fzgss27xc07nc7i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gnzj7brl",
    "name": "available",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fzgss27xc07nc7i")

  // remove
  collection.schema.removeField("gnzj7brl")

  return dao.saveCollection(collection)
})
