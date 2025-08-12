const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = class AuthController{

    static async login(req, res){
        const {email, password} = req.body

        if(!email || !password){
            return res.status(400).json({message:'E-mail e Senha são obrigatórios.'})
        }
        try {
            const user = await User.findOne({where:{ email }})

            if(!user){
                return res.status(401).json({message:'Credendiais inválidas.'})
            }
            
            const isPasswordMatch = await bcrypt.compare(password, user.password)

            if(!isPasswordMatch){
                return res.status(401).json({message:'Credenciais inválidas.'})
            }

            const token = jwt.sign({
                userId: user.id,
                isAdmin:user.isAdmin
            },
            process.env.JWT_SECRET,
            {
                expiresIn:'1d'
            }
        )

        console.log(token)
        return res.status(200).json({
            message:'Login realizado com sucesso.',
            token,
            user:{
                id:user.id,
                name:user.name,
                email:user.email
            }
        })

        } catch (error) {
            return res.status(500).json({message:"Ocorreu um erro no servidor."})
        }
    }

    static async logout(req, res){
        
    }
}
