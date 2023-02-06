migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		collection.listRule = '';
		collection.viewRule = '';
		collection.createRule = '@request.auth.id = author.id';
		collection.updateRule = '@request.auth.id = author.id';
		collection.deleteRule = '@request.auth.id = author.id';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		collection.listRule = null;
		collection.viewRule = null;
		collection.createRule = null;
		collection.updateRule = null;
		collection.deleteRule = null;

		return dao.saveCollection(collection);
	}
);
