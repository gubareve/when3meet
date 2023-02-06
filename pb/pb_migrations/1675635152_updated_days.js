migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('lm2u55tvi7m5oc2');

		// remove
		collection.schema.removeField('dguwy3ox');

		// remove
		collection.schema.removeField('jrydtfkz');

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('lm2u55tvi7m5oc2');

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'dguwy3ox',
				name: 'start',
				type: 'number',
				required: false,
				unique: false,
				options: {
					min: 0,
					max: 24
				}
			})
		);

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'jrydtfkz',
				name: 'end',
				type: 'number',
				required: false,
				unique: false,
				options: {
					min: 0,
					max: 24
				}
			})
		);

		return dao.saveCollection(collection);
	}
);
