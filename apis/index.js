const recents = require('./recents.json');
const regulation = require('./regulation.json');
const orders = require('./orders.json');
const saved = require('./saved.json');
const supplier = require('./supplier-historic.json');

module.exports = () => ({
    recents: recents,
    regulation: regulation,
    orders: orders,
    saved: saved,
    supplier: supplier
});