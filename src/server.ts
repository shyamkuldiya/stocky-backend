import { app } from './app'
import { authRouter } from './routes/auth.routes'

app.use('/api', authRouter)
app.get('/', (req, res) => {
  res.send({ message: 'Working' })
})
app.listen(8000, () => {
  console.log('Hello')
})
