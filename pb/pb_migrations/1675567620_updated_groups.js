migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfhv4t5qutwjiuc")

  // remove
  collection.schema.removeField("x8nmrgnz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ffp09wh4",
    "name": "organizers",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nfhv4t5qutwjiuc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x8nmrgnz",
    "name": "required",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("ffp09wh4")

  return dao.saveCollection(collection)
})
