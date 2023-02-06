migrate(
	(db) => {
		const collection = new Collection({
			id: 'qs6y4fnwd3ir8gd',
			created: '2023-02-04 20:05:25.740Z',
			updated: '2023-02-04 20:05:25.740Z',
			name: 'meetings',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: 'ubsrx8oo',
					name: 'author',
					type: 'relation',
					required: false,
					unique: false,
					options: {
						collectionId: '_pb_users_auth_',
						cascadeDelete: true,
						maxSelect: 1,
						displayFields: []
					}
				},
				{
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
		const collection = dao.findCollectionByNameOrId('qs6y4fnwd3ir8gd');

		return dao.deleteCollection(collection);
	}
);
