migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('29p05cgw40jwx8z');

		collection.listRule = '';
		collection.viewRule = '';
		collection.createRule =
			'@request.auth.id ?= day.meeting.group.members.id && @request.auth.id = author';
		collection.updateRule = '@request.auth.id = author';
		collection.deleteRule = '@request.auth.id = author';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('29p05cgw40jwx8z');

		collection.listRule = null;
		collection.viewRule = null;
		collection.createRule = null;
		collection.updateRule = null;
		collection.deleteRule = null;

		return dao.saveCollection(collection);
	}
);
