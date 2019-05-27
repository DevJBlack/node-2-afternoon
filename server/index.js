let express = require('express')
let mc = require('./controllers/messages_controller')

let app = express()
let port = 3001

app.use(express.json())
app.use(express.static('node-2-afternoon' + '/../public/build'))

app.get('/api/messages', mc.read)
app.post('/api/messages', mc.create)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)

app.listen(port, () => {
  console.log('Listening on port', port)
})