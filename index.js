const express = require('express');
const PORT = 9000;

const app = express();
app.get('/test', (req, res) => {
  res.json({ok: true});
});

app.listen(PORT, () => console.log('server is listening on 9000'));
