migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		collection.listRule = '';
		collection.viewRule = '';
		collection.createRule = 'author = @request.auth.id';
		collection.updateRule = 'author = @request.auth.id';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		collection.listRule = null;
		collection.viewRule = null;
		collection.createRule = null;
		collection.updateRule = null;

		return dao.saveCollection(collection);
	}
);
