module.exports = function(express){
  var route = express.Router();
  route.get('/write', function(req, res){
    res.send('login please');
  });
  return route;
};
