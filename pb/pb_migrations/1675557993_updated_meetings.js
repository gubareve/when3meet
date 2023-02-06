migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		collection.createRule = 'author = @request.auth.id && group.author.id = @request.auth.id';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		collection.createRule = null;

		return dao.saveCollection(collection);
	}
);
