migrate(
	(db) => {
		const collection = new Collection({
			id: 'nfhv4t5qutwjiuc',
			created: '2023-02-04 20:15:08.453Z',
			updated: '2023-02-04 20:15:08.453Z',
			name: 'groups',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: '9xrenp2g',
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
					id: 'rnaaqjgv',
					name: 'members',
					type: 'relation',
					required: false,
					unique: false,
					options: {
						collectionId: '_pb_users_auth_',
						cascadeDelete: false,
						maxSelect: null,
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
		const collection = dao.findCollectionByNameOrId('nfhv4t5qutwjiuc');

		return dao.deleteCollection(collection);
	}
);
