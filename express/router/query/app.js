const express = require('express');
const app = express();
const port = 3000;

// Example 1: Simple query param
app.get('/search', (req, res) => {
    const { q } = req.query; // q comes from ?q=value
    res.send(`You searched for: ${q || 'Nothing'}`);
});

// Example 2: Multiple query params
app.get('/products', (req, res) => {
    const { category, sort, page } = req.query;
    res.send(`Category: ${category}, Sort: ${sort}, Page: ${page}`);
});

// Example 3: Filtering an array using query params
const products = [
    { id: 1, name: 'Laptop', category: 'electronics' },
    { id: 2, name: 'Shoes', category: 'fashion' },
    { id: 3, name: 'Phone', category: 'electronics' }
];

app.get('/filter', (req, res) => {
    const { category } = req.query;
    const filtered = category
        ? products.filter(p => p.category === category)
        : products;
    res.json(filtered);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
