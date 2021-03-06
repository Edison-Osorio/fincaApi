const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.listen(app.get('port'), ()=>{
    console.log(`Server on port = ${app.get('port')}`);
})
