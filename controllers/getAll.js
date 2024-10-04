let customers = require('../utills/customerList')

module.exports = (req, res) => {
    try {
        if (!Array.isArray(customers)) {
            throw new Error('Invalid customer data')
        }
        res.status(200).json({
            message: 'Customers fetched successfully!',
            customers: customers
        })

    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while fetching customers.',
            error: error.message
        })
    }
}
