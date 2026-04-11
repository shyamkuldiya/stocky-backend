import dotenv from 'dotenv'
dotenv.config()
import { app } from './app'
console.time('T')
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
  console.timeEnd('T')
})
