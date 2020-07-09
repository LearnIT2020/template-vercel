module.exports = async (req, res) => {
  let parameters = null;
  if ( Object.keys(req.query).length > 0 ){
    parameters = req.query;
    console.log('parameters is query');
  } else {
    parameters = req.body;
    console.log('parameters is body');
  }

  console.log('parameters => ' + Object.keys(parameters));

  res.status(200).json({result : 'success'});
}