
const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProductById,
    deleteProductById,
    deleteAllProducts,
    findProductsByExactName // Ensure to import this function
} = require('../controllers/productController');

// Define Routes
router.get('/products', getAllProducts); // Get all products
router.get('/products/name/:name', findProductsByExactName); // Get product by exact name
router.get('/products/:id', getProductById); // Get product by ID
router.post('/products', addNewProduct); // Add new product
router.put('/products/:id', updateProductById); // Update product by ID
router.delete('/products/:id', deleteProductById); // Delete product by ID
router.delete('/products', deleteAllProducts); // Delete all products

module.exports = router;
