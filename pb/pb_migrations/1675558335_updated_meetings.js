migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		collection.createRule = '';
		collection.updateRule = '';
		collection.deleteRule = '';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		collection.createRule = null;
		collection.updateRule = null;
		collection.deleteRule = null;

		return dao.saveCollection(collection);
	}
);
