migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'ffs4zlsp',
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
				id: 'im3rryp5',
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
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		// remove
		collection.schema.removeField('ffs4zlsp');

		// remove
		collection.schema.removeField('im3rryp5');

		return dao.saveCollection(collection);
	}
);
