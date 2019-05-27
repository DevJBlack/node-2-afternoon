let messages = []
let id = 0

module.exports = {
  read: (req,res) => {
    res.send(messages)
  },

  create: (req, res) => {
    const {text, time} = req.body
    let newMessage = {
      text, 
      time, 
      id
    }
    messages.push(newMessage)
    id++
    res.send(messages)
  },

  update: (req, res) => {
    const { text, time } = req.body
    let { id } = req.params

    let updateMessage = {
      text,
      time,
      id
    }
    console.log(updateMessage)

    let index = messages.findIndex(message => {
      console.log(message.id)
      return +message.id === +id})
    messages.splice(index, 1, updateMessage)
    console.log(messages,index)
    res.send(messages)
  },

  delete: (req, res) => {
    let { id } = req.params
    let index = messages.findIndex(messages => +messages.id === +id)
    messages.splice(index, 1)
    res.send(messages)
  }
}