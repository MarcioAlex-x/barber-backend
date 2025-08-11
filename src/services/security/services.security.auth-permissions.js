const jwt = require('jsonwebtoken')
const { serialize } = require('v8')
require('dotenv').config()

function verifyToken(req, res, next){
    const token = req.headers['authorization']?.split(' ')[1]

    if(!token){
        return res.status(401).json({message:"Acesso negado."})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET,{algorithms:['HS256']})

        req.userId = decoded.userId
        req.isAdmin = decoded.isAdmin
        
        next()

    } catch (error) {
        return res.status(403).json({message:'Token inválido ou expirado.'})
    }
}

function checkIsAdmin(req, res, next){
    if(req.isAdmin){
        return next()
    }

    return res.status(403).json({message:'Acesso negado.'})
}

module.exports = {
    verifyToken,
    checkIsAdmin
}
