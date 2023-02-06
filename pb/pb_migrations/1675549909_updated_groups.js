migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		// add
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

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'gvexv6md',
				name: 'description',
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

		// remove
		collection.schema.removeField('8u2gohgi');

		// remove
		collection.schema.removeField('gvexv6md');

		return dao.saveCollection(collection);
	}
);
