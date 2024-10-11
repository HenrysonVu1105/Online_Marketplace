const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
const productRoutes = require('./routes/productRoutes');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const dbURI = 'mongodb+srv://hvu46:deptrai2005.@sonvucluster.sciwj.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=SonVuCluster';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    
    // Example fetch
    Product.find().then(products => {
      console.log('Products:', products);
    }).catch(err => {
      console.error('Error fetching products:', err);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('Welcome to the Iphone Marketplace!'); 
    console.log('ehllo')
});
app.use('/api', productRoutes);
 
const port = 5678;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
