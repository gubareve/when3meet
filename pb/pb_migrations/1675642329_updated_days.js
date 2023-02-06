migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('lm2u55tvi7m5oc2');

		collection.createRule =
			'@request.auth.id = meeting.group.author.id || meeting.group.organizers.id ?= @request.auth.id';
		collection.updateRule =
			'meeting.group.members.id ?= @request.auth.id || meeting.group.organizers.id ?= @request.auth.id';
		collection.deleteRule =
			'meeting.group.members.id ?= @request.auth.id || meeting.group.organizers.id ?= @request.auth.id';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('lm2u55tvi7m5oc2');

		collection.createRule = null;
		collection.updateRule = null;
		collection.deleteRule = null;

		return dao.saveCollection(collection);
	}
);
