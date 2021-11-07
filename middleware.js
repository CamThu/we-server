
var middleware ={
    requestAuthentication: function(req, res, next){
            console.log('private route hit!');
            next();
    },
    logger: function(req, res, next){
            

            console.log('Request on : ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
            next();
    }
};

module.exports = middleware;



















