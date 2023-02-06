migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'x8nmrgnz',
				name: 'required',
				type: 'relation',
				required: false,
				unique: false,
				options: {
					collectionId: '_pb_users_auth_',
					cascadeDelete: false,
					maxSelect: null,
					displayFields: []
				}
			})
		);

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		// remove
		collection.schema.removeField('x8nmrgnz');

		return dao.saveCollection(collection);
	}
);
