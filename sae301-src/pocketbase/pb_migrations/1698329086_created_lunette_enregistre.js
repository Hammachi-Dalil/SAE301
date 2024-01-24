/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1hqioiq074tq2qf",
    "created": "2023-10-26 14:04:46.907Z",
    "updated": "2023-10-26 14:04:46.907Z",
    "name": "lunette_enregistre",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o7i8evvk",
        "name": "id_lunette",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "xns7d3z65znexjt",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, id as id_lunette from lunette\nWHERE lunette.enregistrer = TRUE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1hqioiq074tq2qf");

  return dao.deleteCollection(collection);
})
