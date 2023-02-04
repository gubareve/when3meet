migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qs6y4fnwd3ir8gd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "focr2cwj",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kpkpfd4z",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("qs6y4fnwd3ir8gd")

  // remove
  collection.schema.removeField("focr2cwj")

  // remove
  collection.schema.removeField("kpkpfd4z")

  return dao.saveCollection(collection)
})
