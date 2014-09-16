
module.exports = {

	index:function(req,res){
		 
		First.find(function(err, user) {
			if(user === undefined) return res.notFound();
			if (err) return next(err);
			res.json(user);
			
		});

	},

	insert_data: function(req,res){
		First.create({
  				nickname: 'Walter Jr',
  				email:"fff@dsdd.com"
				})
			.exec(function(err, data) {
				res.json(data);
			});

	},

    
  


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to FirstController)
   */
  _config: {}

  
};
