module.exports = (express) => {
  const router = express.Router();
  const path = require('path');
  const serveIndex = require('serve-index');

  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // Routes
  router.use('/webhooks/', require('./webhooks')(express));

  // Static Files
  var logsDir = path.join(__dirname, '../../logs');

  // router.use('/logs', express.static(logsDir));
  router.use('/logs', serveIndex(logsDir));


  return router;
};
