import express from 'express'
import dotenv from 'dotenv'
import request from 'request-promise'

dotenv.config()
const PORT = process.env.PORT
const ApiKey = process.env.KEY
const baseUrl = `http://api.scraperapi.com?api_key=${ApiKey}&autoparse=true`

const app = express()
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Welcome Explore-best API V1.0.0')
})

// product details
app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params
  try {
    console.log("productid", productId)
    const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`)
    res.json(JSON.parse(response))
  } catch (error) {
    res.json(error)
  }
})

// product reviews
app.get('/products/:productId/reviews', async (req, res) => {
  const { productId } = req.params
  try {
    const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`)
    res.json(JSON.parse(response))
  } catch (error) {
    res.json(error)
  }
})

// product offers
app.get('/products/:productId/offers', async (req, res) => {
  const { productId } = req.params
  try {
    const response = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`)
    res.json(JSON.parse(response))
  } catch (error) {
    res.json(error)
  }
})

// Search query
app.get('/search/:searchQuery', async (req, res) => {
  const { searchQuery } = req.params
  try {
    const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`)
    res.json(JSON.parse(response))
  } catch (error) {
    res.json(error)
  }
})


app.listen(PORT, () => {
  console.log(`Explore-best backend server running on port ${PORT}`)
})