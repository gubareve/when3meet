migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		collection.viewRule = 'author.id = @request.auth.id || members.id ?= @request.auth.id';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		collection.viewRule = null;

		return dao.saveCollection(collection);
	}
);
