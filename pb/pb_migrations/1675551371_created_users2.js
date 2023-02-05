migrate((db) => {
  const collection = new Collection({
    "id": "4lo41u1wfrzl1s8",
    "created": "2023-02-04 22:56:11.887Z",
    "updated": "2023-02-04 22:56:11.887Z",
    "name": "users2",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": false,
      "exceptEmailDomains": [],
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": [],
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4lo41u1wfrzl1s8");

  return dao.deleteCollection(collection);
})
