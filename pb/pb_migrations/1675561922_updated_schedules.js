migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fzgss27xc07nc7i")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rs6mb3ks",
    "name": "day",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "lm2u55tvi7m5oc2",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fzgss27xc07nc7i")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rs6mb3ks",
    "name": "meeting",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qs6y4fnwd3ir8gd",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
