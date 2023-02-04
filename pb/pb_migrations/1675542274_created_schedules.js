migrate((db) => {
  const collection = new Collection({
    "id": "29p05cgw40jwx8z",
    "created": "2023-02-04 20:24:34.773Z",
    "updated": "2023-02-04 20:24:34.773Z",
    "name": "schedules",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mnmvbhsq",
        "name": "author",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "vavj1s2g",
        "name": "day",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "bqql7dy1rt9he91",
          "cascadeDelete": true,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "hecfgeb3",
        "name": "times",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("29p05cgw40jwx8z");

  return dao.deleteCollection(collection);
})
