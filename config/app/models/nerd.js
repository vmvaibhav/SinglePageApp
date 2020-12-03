var mongoose = require('mongoose');

module.exports = mongoose.model('Nerd', {
    Name: {type: String, default: ''}
});

