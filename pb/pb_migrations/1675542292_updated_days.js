migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('bqql7dy1rt9he91');

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'ea9m6htf',
				name: 'schedules',
				type: 'relation',
				required: false,
				unique: false,
				options: {
					collectionId: '29p05cgw40jwx8z',
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
		const collection = dao.findCollectionByNameOrId('bqql7dy1rt9he91');

		// remove
		collection.schema.removeField('ea9m6htf');

		return dao.saveCollection(collection);
	}
);
