/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "uxpcjhn4hh9join",
    "created": "2023-10-26 14:08:20.739Z",
    "updated": "2023-10-26 14:08:20.739Z",
    "name": "lunette_by_users",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oganvqmc",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, user from lunette\nGROUP BY user"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uxpcjhn4hh9join");

  return dao.deleteCollection(collection);
})
