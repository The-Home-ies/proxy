const app = require('./server.js');

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/1`);
});
