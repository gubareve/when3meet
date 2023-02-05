migrate((db) => {
  const collection = new Collection({
    "id": "lm2u55tvi7m5oc2",
    "created": "2023-02-05 01:50:19.004Z",
    "updated": "2023-02-05 01:50:19.004Z",
    "name": "days",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "krtkj0gq",
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
      },
      {
        "system": false,
        "id": "dwkokjfl",
        "name": "day",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "dguwy3ox",
        "name": "start",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 24
        }
      },
      {
        "system": false,
        "id": "jrydtfkz",
        "name": "end",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 24
        }
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
  const collection = dao.findCollectionByNameOrId("lm2u55tvi7m5oc2");

  return dao.deleteCollection(collection);
})
