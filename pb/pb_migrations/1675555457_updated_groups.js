migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		collection.updateRule = '@request.auth.id = author.id || members.id ?= @request.auth.id';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		collection.updateRule = null;

		return dao.saveCollection(collection);
	}
);
