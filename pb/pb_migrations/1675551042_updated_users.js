migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('_pb_users_auth_');

		collection.options = {
			allowEmailAuth: true,
			allowOAuth2Auth: true,
			allowUsernameAuth: false,
			exceptEmailDomains: null,
			manageRule: null,
			minPasswordLength: 8,
			onlyEmailDomains: null,
			requireEmail: false
		};

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'izf8rqqv',
				name: 'name',
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
		const collection = dao.findCollectionByNameOrId('_pb_users_auth_');

		collection.options = {
			allowEmailAuth: true,
			allowOAuth2Auth: true,
			allowUsernameAuth: true,
			exceptEmailDomains: null,
			manageRule: null,
			minPasswordLength: 8,
			onlyEmailDomains: null,
			requireEmail: false
		};

		// remove
		collection.schema.removeField('izf8rqqv');

		return dao.saveCollection(collection);
	}
);
