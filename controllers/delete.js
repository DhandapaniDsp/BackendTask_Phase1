let customers = require('../utills/customerList')

module.exports = (req, res) => {
    try {
        const customerId = req.params.id
        const initialLength = customers.length
        customers = customers.filter((c) => c.id !== customerId)
        if (customers.length < initialLength) {
            res.status(200).json({
                message: 'Customer deleted successfully!'
            })
        } else {
            res.status(404).json({ message: 'Customer not found' })
        }

    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while deleting the customer.',
            error: error.message
        })
    }
}
