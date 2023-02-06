migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		collection.createRule = 'group.author.id = @request.auth.id';
		collection.updateRule = 'group.author.id = @request.auth.id';
		collection.deleteRule = 'group.author.id = @request.auth.id';

		// remove
		collection.schema.removeField('ubsrx8oo');

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		collection.createRule = null;
		collection.updateRule = null;
		collection.deleteRule = null;

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'ubsrx8oo',
				name: 'author',
				type: 'relation',
				required: false,
				unique: false,
				options: {
					collectionId: '_pb_users_auth_',
					cascadeDelete: true,
					maxSelect: 1,
					displayFields: []
				}
			})
		);

		return dao.saveCollection(collection);
	}
);
