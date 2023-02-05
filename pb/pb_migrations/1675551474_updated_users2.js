migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4lo41u1wfrzl1s8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "81rxrqqf",
    "name": "a",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4lo41u1wfrzl1s8")

  // remove
  collection.schema.removeField("81rxrqqf")

  return dao.saveCollection(collection)
})
