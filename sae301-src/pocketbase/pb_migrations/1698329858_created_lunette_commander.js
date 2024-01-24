/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ais40ju1ragwrq8",
    "created": "2023-10-26 14:17:38.438Z",
    "updated": "2023-10-26 14:17:38.438Z",
    "name": "lunette_commander",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ezxnwauo",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, id as id_lunette from lunette\nWHERE lunette.commander = TRUE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ais40ju1ragwrq8");

  return dao.deleteCollection(collection);
})
