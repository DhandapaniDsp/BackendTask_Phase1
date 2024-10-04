const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const customerRoutes = require('./routes/routesAll')

// Create an instance of Express
const app = express()

// Use middleware
app.use(cors()) // Enable CORS for cross-origin requests
app.use(bodyParser.json()) // Parse JSON bodies

// Use customer routes
app.use('/api', customerRoutes)

// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
