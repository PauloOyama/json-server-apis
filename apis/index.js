const recents = require('./recents.json');
const regulation = require('./regulation.json');
const orders = require('./orders.json');
const saved = require('./saved.json');
const supplier = require('./supplier-historic.json');
const details = require('./details.json');

module.exports = () => ({
    recents: recents.recents,
    regulation: regulation.items,
    orders: orders,
    saved: saved.saved,
    supplier: supplier.supplier_historic,
    details: details.data,
});