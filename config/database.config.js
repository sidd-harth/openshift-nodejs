module.exports = {
    //url: 'mongodb://localhost:27017/easy-notes'
	//url: 'mongodb://admin:admin@mongodb/admin'
	url: 'mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@mongodb/${MONGODB_DATABASE}'
}
