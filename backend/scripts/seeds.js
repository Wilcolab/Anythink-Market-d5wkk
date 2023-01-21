//TODO: seeds script should come here, so we'll be able to put some data in our local env

var mongoose = require('mongoose');
var UserModel = require('../models/User');
var ItemModel = require('../models/Item')
var CommentModel = require('../models/Comment')
var User = mongoose.model('User');
var Item = mongoose.model('Item');
var Comment = mongoose.model('Comment');

mongoose.connect(process.env.MONGODB_URI);
var names = ["nice"]

for (let i = 0; i < 100; i++) {

    var username = names[0].toLocaleLowerCase() + i.toString();
    var mail = names[0] + i.toString() + '@mail.com';


    var user = new User({
        username: username,
        email: mail,
    });
    user
        .save().then(console.log).catch(console.error);


    var item = new Item({
        title: 'stuff' + names[i],
        description: 'good stuff',
        image: '../../frontend/public/placeholder.png',
        tagList: 'nice',
    });
    item
        .save().then(console.log).catch(console.error);


    var comment = new Comment({ body: 'I did find it in the end, I`m not saying that it was easy but I am sure that it was worth it.' });
    comment
        .save().then(console.log).catch(console.error);

    if (i === 100) mongoose.disconnect();
}