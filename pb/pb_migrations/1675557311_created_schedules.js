migrate(
	(db) => {
		const collection = new Collection({
			id: 'fzgss27xc07nc7i',
			created: '2023-02-05 00:35:11.079Z',
			updated: '2023-02-05 00:35:11.079Z',
			name: 'schedules',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: 'selwggoa',
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
					id: 'rs6mb3ks',
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
		const collection = dao.findCollectionByNameOrId('fzgss27xc07nc7i');

		return dao.deleteCollection(collection);
	}
);
