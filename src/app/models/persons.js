var Collection = require('ampersand-rest-collection');
var Person = require('./person');


module.exports = Collection.extend({
    model: Person,
    url: 'http://localhost:3000/api/people'
});
