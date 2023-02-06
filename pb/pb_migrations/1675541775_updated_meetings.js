migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		// remove
		collection.schema.removeField('xrjfwsrb');

		// remove
		collection.schema.removeField('fafd1nbu');

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'dndork9l',
				name: 'group',
				type: 'relation',
				required: false,
				unique: false,
				options: {
					collectionId: 'nfhv4t5qutwjiuc',
					cascadeDelete: true,
					maxSelect: 1,
					displayFields: []
				}
			})
		);

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'xrjfwsrb',
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
				id: 'fafd1nbu',
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

		// remove
		collection.schema.removeField('dndork9l');

		return dao.saveCollection(collection);
	}
);
