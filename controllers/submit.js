var express = require('express');
var router = express.Router();

var Video = require('../models/videomodel');

/*
 * Controller that receives information about submitted youtube videos
 * Updates the database with this new information
 *
 *
 */

 router.get('/', function(req, res, next) {

    res.render('submit');

    // if (req.user) {
    //     res.render('submit', {
    //         user: req.user
    //     });
    // }
    // else {
    //   res.redirect('/login');
    // };
});



 router.post('/video', function(req, res, next) {

    var body = req.body;

    
    var video = new Video({
        youtubeId: getYouTubeID(body.youtubeLink),
        speakerLocation: body.speakerLocation,
        date: Date.now(),
        storytitle: body.storytitle,
        speaker: body.speakerName,
        referredBy: body.referredBy
        // email: req.user.google.email
    });

    video.save(function(err) {
        if (err) console.log(err)
    }); 

    res.redirect('/');
});



var getYouTubeID = function(youtubeLink) {
    var array;
    var id;
    if (youtubeLink.includes("youtu.be")) {
        array = youtubeLink.split("youtu.be/");
        id = array[array.length - 1];        
    } else if (youtubeLink.includes("youtube.com/watch")) {
        array = youtubeLink.split('=');
        id = array[array.length - 1];        
    } else {
        id = youtubeLink;
    }

    return id;
};


module.exports = router;