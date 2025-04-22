const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the blog page
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

// Function to find an available port
function findAvailablePort(startPort) {
    return new Promise((resolve, reject) => {
        const server = app.listen(startPort, () => {
            const port = server.address().port;
            server.close(() => {
                resolve(port);
            });
        }).on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                resolve(findAvailablePort(startPort + 1));
            } else {
                reject(err);
            }
        });
    });
}

// Start server with port handling
findAvailablePort(port)
    .then(availablePort => {
        app.listen(availablePort, () => {
            console.log(`Server is running on port ${availablePort}`);
        });
    })
    .catch(err => {
        console.error('Failed to start server:', err);
    }); 