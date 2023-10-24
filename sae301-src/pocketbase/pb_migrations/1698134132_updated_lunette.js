/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xns7d3z65znexjt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9cwrlabb",
    "name": "enregistrer",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "keom2xq9",
    "name": "commander",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xns7d3z65znexjt")

  // remove
  collection.schema.removeField("9cwrlabb")

  // remove
  collection.schema.removeField("keom2xq9")

  return dao.saveCollection(collection)
})
