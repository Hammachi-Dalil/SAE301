/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xns7d3z65znexjt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3l8rfpe3",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xns7d3z65znexjt")

  // remove
  collection.schema.removeField("3l8rfpe3")

  return dao.saveCollection(collection)
})
