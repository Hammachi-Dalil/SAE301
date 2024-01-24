/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uxpcjhn4hh9join")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, id as id_lunette, user from lunette\nGROUP BY user"
  }

  // remove
  collection.schema.removeField("oganvqmc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bjbpkmdw",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tglo27wc",
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
  const collection = dao.findCollectionByNameOrId("uxpcjhn4hh9join")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id, user from lunette\nGROUP BY user"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("bjbpkmdw")

  // remove
  collection.schema.removeField("tglo27wc")

  return dao.saveCollection(collection)
})
