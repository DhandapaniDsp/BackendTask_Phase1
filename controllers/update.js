let customers = require('../utills/customerList')

module.exports = (req, res) => {
    try {
        const customerId = req.params.id
        const index = customers.findIndex((c) => c.id === customerId)

        if (index !== -1) {
            customers[index] = { ...customers[index], ...req.body }
            res.status(200).json({
                message: 'Customer updated successfully!',
                customer: customers[index]
            })
        } else {
            res.status(404).json({ message: 'Customer not found' })
        }
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while updating the customer.',
            error: error.message
        })
    }
}
