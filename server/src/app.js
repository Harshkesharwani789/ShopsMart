const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'ShopSmart Backend is running',
    timestamp: new Date().toISOString(),
  });
});

// Mock Products Data (Simple in-memory store)
const mockProducts = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Electronics', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Smart Watch', price: 149.99, category: 'Electronics', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Running Shoes', price: 79.99, category: 'Fitness', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Yoga Mat', price: 29.99, category: 'Fitness', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Coffee Maker', price: 89.99, category: 'Home', image: 'https://via.placeholder.com/150' },
];

// Products Route
app.get('/api/products', (req, res) => {
  res.json(mockProducts);
});

// Root Route (optional, just to show something)
app.get('/', (req, res) => {
  res.send('ShopSmart Backend Service');
});

module.exports = app;
