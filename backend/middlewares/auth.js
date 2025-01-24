const jwt = require("jsonwebtoken")

const ensureAuthentication = (req, res, next)=>{
    const auth = req.headers["authorization"];
    if(!auth){
        return res.status(403).json({message: "Unauthorized, you must logged in to visit this page"})
    }
    
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({message: "Unauthorized, jwt token is wrong or expired"})
    }
}

module.exports = ensureAuthentication;