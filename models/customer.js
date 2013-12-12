var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define astronaut schema
var potentialCustomer = new Schema({
	name : { type: String, required: true},
	email: { type: String, required: true},
    slug : { type: String, lowercase: true, required: true, unique: true },

});


// export 'Astronaut' model
module.exports = mongoose.model('customer',potentialCustomer);