migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		// remove
		collection.schema.removeField('g5xnosc8');

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'g5xnosc8',
				name: 'days',
				type: 'relation',
				required: false,
				unique: false,
				options: {
					collectionId: 'lm2u55tvi7m5oc2',
					cascadeDelete: false,
					maxSelect: null,
					displayFields: []
				}
			})
		);

		return dao.saveCollection(collection);
	}
);
