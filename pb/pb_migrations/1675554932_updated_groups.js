migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: '8u2gohgi',
				name: 'title',
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
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: '8u2gohgi',
				name: 'title',
				type: 'text',
				required: false,
				unique: false,
				options: {
					min: null,
					max: 10,
					pattern: ''
				}
			})
		);

		return dao.saveCollection(collection);
	}
);
