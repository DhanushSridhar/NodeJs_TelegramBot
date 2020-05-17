const mysql = require('mysql');

const db = require('./databaseConnection');



var queries = {
	velocity: 'SELECT velocity FROM total_Machine ORDER BY updatedOn DESC LIMIT 1'
};

const getList = (queryName) => {
	return new Promise(function(resolve, reject){
		db.query(queries[queryName], function(err, result, fields){
			if (!err) resolve(JSON.parse(JSON.stringify(result))); // Hacky solution
			else reject(err);
		});
	});
};

module.exports = {
	getList
};