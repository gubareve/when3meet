migrate(
	(db) => {
		const collection = new Collection({
			id: 'bqql7dy1rt9he91',
			created: '2023-02-04 20:18:27.976Z',
			updated: '2023-02-04 20:18:27.976Z',
			name: 'days',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: 'cghhrj43',
					name: 'meeting',
					type: 'relation',
					required: false,
					unique: false,
					options: {
						collectionId: 'qs6y4fnwd3ir8gd',
						cascadeDelete: true,
						maxSelect: 1,
						displayFields: []
					}
				},
				{
					system: false,
					id: 'wkt7a4go',
					name: 'start',
					type: 'number',
					required: false,
					unique: false,
					options: {
						min: 0,
						max: 24
					}
				},
				{
					system: false,
					id: 'jnrrce7g',
					name: 'end',
					type: 'number',
					required: false,
					unique: false,
					options: {
						min: 0,
						max: 24
					}
				}
			],
			listRule: null,
			viewRule: null,
			createRule: null,
			updateRule: null,
			deleteRule: null,
			options: {}
		});

		return Dao(db).saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('bqql7dy1rt9he91');

		return dao.deleteCollection(collection);
	}
);
