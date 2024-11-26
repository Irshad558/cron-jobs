const cron = require('node-cron');

cron.schedule('*/3 * * * *', () => {
  fetch('https://qr-server-x8sq.onrender.com')
    .then(response => console.log('Ping successful:', response.status))
    .catch(error => console.error('Ping failed:', error));
});
