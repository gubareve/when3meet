migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('bqql7dy1rt9he91');

		collection.listRule = '';
		collection.viewRule = '';
		collection.createRule = '@request.auth.id = meeting.author.id';
		collection.updateRule = '@request.auth.id = meeting.author.id';
		collection.deleteRule = '@request.auth.id = meeting.author.id';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('bqql7dy1rt9he91');

		collection.listRule = null;
		collection.viewRule = null;
		collection.createRule = null;
		collection.updateRule = null;
		collection.deleteRule = null;

		return dao.saveCollection(collection);
	}
);
