const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const app = express()
const AuthRouter = require('./routes/AuthRouter')
const AccountRouter = require('./routes/AccountRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/account', AccountRouter)

app.get('/', (req, res) => res.json({ message: 'Server Running!' }))
app.listen(PORT, () => console.log(`Serving up self-love on Port ${PORT} 💕`))
