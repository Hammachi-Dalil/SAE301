/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gr2u7klnwghh14o",
    "created": "2023-10-24 07:48:38.953Z",
    "updated": "2023-10-24 07:48:38.953Z",
    "name": "Materiau",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g2ckoxvf",
        "name": "libelle_materiau",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("gr2u7klnwghh14o");

  return dao.deleteCollection(collection);
})
