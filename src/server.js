//Express Setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3100;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    if (req.body.message === 'ping') {
        res
            .status(200)
            .json({ message: 'pong' });
    } else {
        res
            .status(400)
            .json({ message: 'no ping, no pong' });
    };
});

app.listen(PORT, () => {
    // db.initDb();
    console.log(`Server started on localhost:${PORT} at: ` +Date());
});