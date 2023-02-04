migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qs6y4fnwd3ir8gd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmv4wiz6",
    "name": "days",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "bqql7dy1rt9he91",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qs6y4fnwd3ir8gd")

  // remove
  collection.schema.removeField("tmv4wiz6")

  return dao.saveCollection(collection)
})
