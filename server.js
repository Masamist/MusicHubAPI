const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: './config.env' })
const app = require('./app')

const DB = process.env.DATABASE_URL

mongoose.connect(DB, {
  useNewUrlParser:true,
  useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'))

const port = process.env.PORT || 3000
app.listen(port, () =>{
  console.log(`App running on port ${port}...`)
})
