    var express = require('express'),
        app = express();

    app.get('/bits', function(req, res) {
        res.send([{name:'bit1'}, {name:'bit2'}]);
    });

    app.get('/bits/:id', function(req, res) {
        res.send({id:req.params.id, name: "The Name", description: "description"});
    });


    var port = process.env.VCAP_APP_PORT || 8080;

    app.listen(port);
    console.log('Listening on port ' + port);
