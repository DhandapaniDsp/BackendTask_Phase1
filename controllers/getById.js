let customers = require('../utills/customerList')

module.exports = (req, res) => {
    try {
        const customerId = req.params.id
        const customer = customers.find((c) => c.id === customerId)
        if (customer) {
            res.status(200).json({
                message: 'Customer fetched successfully!',
                customer: customer
            })
        } else {
            res.status(404).json({ message: 'Customer not found' })
        }

    } catch (error) {
        console.error('sdfwref', error)
        res.status(500).json({
            message: 'An error occurred while fetching the customer.',
            error: error.message
        })
    }
}
