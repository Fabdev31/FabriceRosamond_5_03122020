const express = require('express')
const app = express()
const port = 3000
app.get('/api/furniture', (req, res) => {
  res.send(['./images/oak_1.jpg', './images/oak_2.jpg', './images/oak_3.jpg', './images/oak_4.jpg', './images/oak_5.jpg'])
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})