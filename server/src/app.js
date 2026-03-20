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
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    category: 'Electronics',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 149.99,
    category: 'Electronics',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 79.99,
    category: 'Fitness',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
  },
  {
    id: 4,
    name: 'Yoga Mat',
    price: 29.99,
    category: 'Fitness',
    image:
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&q=80',
  },
  {
    id: 5,
    name: 'Coffee Maker',
    price: 89.99,
    category: 'Home',
    image:
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80',
  },
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
