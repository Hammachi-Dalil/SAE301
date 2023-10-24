/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xns7d3z65znexjt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q8ieq0ls",
    "name": "materiau_cadre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gr2u7klnwghh14o",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "41xhqpxe",
    "name": "materiau_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gr2u7klnwghh14o",
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
  collection.schema.removeField("q8ieq0ls")

  // remove
  collection.schema.removeField("41xhqpxe")

  return dao.saveCollection(collection)
})
