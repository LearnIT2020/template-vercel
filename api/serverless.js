const ziplist = require('./japan_postal_zip.json')

module.exports = async (req, res) => {
  let parameters = null;
  if ( Object.keys(req.query).length > 0 ){
    parameters = req.query;
    console.log('parameters is query');
  } else {
    parameters = req.body;
    console.log('parameters is body');
  }

  //console.log('parameters => ' + Object.keys(parameters));

  let result = {};
  if ( parameters.type && parameters.type == 'zip' &&
       parameters.zip ) {
    for (const zip of ziplist) { 
      if (zip.zip == parameters.zip) {
        result = zip;
      } 
    } 
  }

  res.status(200).json(result);
}