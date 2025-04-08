const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('To-Do List API');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
