/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gr2u7klnwghh14o")

  collection.name = "materiau"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gr2u7klnwghh14o")

  collection.name = "Materiau"

  return dao.saveCollection(collection)
})
