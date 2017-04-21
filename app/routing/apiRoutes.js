module.exports = function(app, path){

    app.get("/api/friends", function(req, res){
        res.sendFile(path.join(__dirname,'../public/api/friends.html'));
    })

    app.post("/api/friends", function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'))
    })

}