migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		collection.listRule = 'members.id ?= @request.auth.id';
		collection.viewRule = 'members.id ?= @request.auth.id';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		collection.listRule = null;
		collection.viewRule = null;

		return dao.saveCollection(collection);
	}
);
