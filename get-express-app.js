const express = require('express');
const { join } = require('path');

module.exports = () => {
    const app = express();
    app.get(/^\/$/, (req, res, next) => res.redirect('/bachata-science'));
    app.use('/bachata-science', express.static(join(__dirname, 'docs')));
    return app;
};
