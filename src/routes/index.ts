import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.send("Got a POST request");
});

router.put('/', function(req, res, next) {
  res.send("Got a PUT request");
});

router.delete('/', function(req, res, next) {
  res.send("Got a DELETE request");
});

export default router;
