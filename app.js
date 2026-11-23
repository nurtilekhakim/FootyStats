
require('dotenv').config();

const express = require('express');
const path = require('path');
const footballRoutes = require('./routes/footballRoutes');
const requestLogger = require('./middleware/requestLogger');

const app = express();
const PORT = process.env.PORT || 3000;

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Built-in middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Custom request logging middleware
app.use(requestLogger);

// Home page
app.get('/', (req, res) => {
    res.render('index');
});

// Football routes
app.use('/', footballRoutes);


// 404 - Page Not Found
app.use((req, res) => {
    res.status(404).render('error', {
        status: 404,
        message: 'Page Not Found'
    });
});

// Centralized error handler
app.use((err, req, res, next) => {
    console.error(err);

    const apiStatus = err.response?.status;

    if (apiStatus === 429) {
        return res.status(503).render('error', {
            status: 503,
            message: 'Football data is temporarily unavailable. Please try again later.'
        });
    }

    res.status(500).render('error', {
        status: 500,
        message: 'Internal Server Error'
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`FootyStats running at http://localhost:${PORT}`);
});
