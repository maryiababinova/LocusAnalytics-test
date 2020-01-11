const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use('/api', require('./router'))

app.listen(8080, () => {
    console.log('listening')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
  })

module.exports = app

