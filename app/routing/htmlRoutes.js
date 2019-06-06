var path = require("path");

module.exports = function(app){
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname , "../public/survey.html"));
    });
    
    // viewed at http://localhost:3000
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname , "../public/home.html"));
    });

    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "public/home.html"));
      });

}

// viewed at http://localhost:3000
