var dblite = require('dblite'),
        db = dblite('./db/androidbolivia.db');
var json;

exports.cargar = function(req, res){
	//script(src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js')
  db.query('.databases' )
  db.query('SELECT * FROM curso', 
    {id:Number, nombre:String},
  	function (err, rows) {
  	 json=JSON.stringify(rows);  
    }
  );
  res.render('inscribir', { title: 'Inscribir' , inscribir: 'active' , cursos: json} );
};