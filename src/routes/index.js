module.exports = (express) => {
  const router = express.Router();

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // Routes
  router.use('/webhooks/', require('./webhooks')(express));

  return router;
};
