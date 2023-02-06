migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('_pb_users_auth_');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'users_avatar',
				name: 'avatar',
				type: 'file',
				required: false,
				unique: false,
				options: {
					maxSelect: 1,
					maxSize: 5242880,
					mimeTypes: ['image/jpeg', 'image/png'],
					thumbs: ['128x128', '256x256']
				}
			})
		);

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('_pb_users_auth_');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'users_avatar',
				name: 'avatar',
				type: 'file',
				required: false,
				unique: false,
				options: {
					maxSelect: 1,
					maxSize: 5242880,
					mimeTypes: ['image/jpeg', 'image/png'],
					thumbs: ['128x128']
				}
			})
		);

		return dao.saveCollection(collection);
	}
);
