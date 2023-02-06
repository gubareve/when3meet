migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		// remove
		collection.schema.removeField('i0qmdidi');

		// remove
		collection.schema.removeField('czwo0ptf');

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

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'i0qmdidi',
				name: 'start',
				type: 'date',
				required: false,
				unique: false,
				options: {
					min: '',
					max: ''
				}
			})
		);

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'czwo0ptf',
				name: 'end',
				type: 'date',
				required: false,
				unique: false,
				options: {
					min: '',
					max: ''
				}
			})
		);

		// remove
		collection.schema.removeField('fafd1nbu');

		return dao.saveCollection(collection);
	}
);
