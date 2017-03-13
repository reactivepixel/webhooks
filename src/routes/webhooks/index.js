module.exports = (express) => {
  const router = express.Router();

  router.post('/dump', (req, res) => {

    console.log('Dumping whole request object to Console', req.body);
    res.json({
      checkLog: true,
    });
  });

  return router;
};
