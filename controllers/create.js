const { v4: uuidv4 } = require('uuid')
let customers = require('../utills/customerList')


module.exports = (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.phone) {
            return res.status(400).json({ message: 'All fields (name, email, phone) are required.' })
        }
        const newCustomer = {
            id: uuidv4(),
            ...req.body,
        }
        customers.push(newCustomer)

        res.status(201).json({
            message: 'Customer added successfully!',
            customer: newCustomer
        })

    } catch (error) {
        res.status(500).json({ message: 'An error occurred while adding the customer.' })
    }
}
