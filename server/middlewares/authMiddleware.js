const tokenHandler = require('../utilities/tokenHandler');
const ResponseModel = require('../utilities/responseModel');


const allowedUrls = [
    "/api/v1/accounts",
];
module.exports = async (req, res, next) => {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split(' ')[1];
    }
    req.token = token;

    const url = req.url;
    console.log(url);
    for (let i = 0; i < allowedUrls.length; i++) {
        if (url.startsWith(allowedUrls[i])) {
            return next();
        }
    }

    try {
        const decodedToken = tokenHandler.verifyToken(token);
        req.user = decodedToken;
      
        next();
    } catch (error) {
        res.status(401).json(new ResponseModel(null, null, ["Unauthorized"]));
    }
}