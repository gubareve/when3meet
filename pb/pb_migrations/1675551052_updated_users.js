migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('_pb_users_auth_');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'izf8rqqv',
				name: 'name',
				type: 'text',
				required: true,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: ''
				}
			})
		);

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('_pb_users_auth_');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'izf8rqqv',
				name: 'name',
				type: 'text',
				required: false,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: ''
				}
			})
		);

		return dao.saveCollection(collection);
	}
);
