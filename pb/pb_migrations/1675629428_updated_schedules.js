migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('fzgss27xc07nc7i');

		collection.listRule = 'day.meeting.group.members.id ?= @request.auth.id';
		collection.viewRule = 'day.meeting.group.members.id ?= @request.auth.id';
		collection.createRule = 'author.id = @request.auth.id';
		collection.updateRule = 'author.id = @request.auth.id';
		collection.deleteRule = 'author.id = @request.auth.id';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('fzgss27xc07nc7i');

		collection.listRule = null;
		collection.viewRule = null;
		collection.createRule = null;
		collection.updateRule = null;
		collection.deleteRule = null;

		return dao.saveCollection(collection);
	}
);
