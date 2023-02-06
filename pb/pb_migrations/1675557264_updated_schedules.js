migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('29p05cgw40jwx8z');

		collection.createRule = '';

		// remove
		collection.schema.removeField('vavj1s2g');

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('29p05cgw40jwx8z');

		collection.createRule = null;

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'vavj1s2g',
				name: 'day',
				type: 'relation',
				required: false,
				unique: false,
				options: {
					collectionId: 'bqql7dy1rt9he91',
					cascadeDelete: true,
					maxSelect: 1,
					displayFields: []
				}
			})
		);

		return dao.saveCollection(collection);
	}
);
