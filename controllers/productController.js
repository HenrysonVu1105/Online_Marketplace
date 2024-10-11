const Product = require('../models/product');
console.log('ehllo')
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addNewProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateProductById = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        res.json({ message: 'All products deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const findProductsByExactName = async (req, res) => {
    try {
      const productName = req.params.name;
      
      // Find the product by name
      const product = await Product.findOne({ name: new RegExp('^' + productName + '$', 'i') });
       
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
        

module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProductById,
    deleteProductById,
    deleteAllProducts,
    findProductsByExactName,
};
 