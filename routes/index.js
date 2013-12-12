
/*
 * routes/index.js
 * 
 * Routes contains the functions (callbacks) associated with request urls.
 */

var moment = require("moment"); // date manipulation library
var potentialCustomer = require("../models/customer.js"); //db model


/*
	GET /
*/
exports.firework = function(req, res) {
	
	console.log("main page requested");

	// query for all astronauts
	// .find will accept 3 arguments
	// 1) an object for filtering {} (empty here)
	// 2) a string of properties to be return, 'name slug source' will return only the name, slug and source returned astronauts
	// 3) callback function with (err, results)
	//    err will include any error that occurred
	// 	  allAstros is our resulting array of astronauts

	// astronautModel.find({}, 'name slug source', function(err, allAstros){

	// 	if (err) {
	// 		res.send("Unable to query database for astronauts").status(500);
	// 	};

	// 	console.log("retrieved " + allAstros.length + " astronauts from database");

		var templateData = {
			// astros : allAstros,
			pageTitle : "dod.io"
		}

		res.render('index.html', templateData);

}

exports.index = function(req,res){

	console.log("fireworks req");

	var templateData = {
		pageTitle : "prelaunch",
		misc : "misc"
	}

	res.render('firework.html', templateData);

}

exports.signup = function(req,res){

	var customer = new potentialCustomer({
		name : req.body.name,
		email : req.body.email,
		slug : req.body.name.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'_')
	});

	customer.save(function(err){
		if (err) {
			console.error("Error on saving new customer");
			console.error(err);
			return res.send("There was an error when creating a new customer");

		} else {
			console.log("new signup");
			console.log(customer);
			
			// redirect to the astronaut's page
			res.redirect('/thanks');
		}
	});

}

exports.thanks = function(req,res){
		res.render('thanks.html',{layout:null});
}

exports.secretInfo = function(req,res){
		res.render('numbers.html')
}

