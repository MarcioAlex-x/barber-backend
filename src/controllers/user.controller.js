const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = class UserController {
  static async list(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async show(req, res) {
    try {
      const id = req.params.id;

      if(Object.keys(req.params).length === 0){
        return res.status(404).json({message:"Dados insuficientes."})
      }

      const user = await User.findByPk(id);

      if(!user) return res.status(404).json({message:"Usuário não encontrado"})
      if(user === null) return res.status(404).json({message:"Usuário não encontrado."})

      return res.status(200).json(user);

    } catch (error) {
      return res.status(500).json({ mesage: error.message });
    }
  }

  static async create(req, res) {
    const { name, email, password, isAdmin } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Dados insuficientes." });
    }

    try {
      const userExist = await User.findOne({ where: { email } });

      if (userExist) {
        return res.status(400).json({ message: "E-mail já está em uso." });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
        name,
        email,
        password:hashedPassword,
        isAdmin: isAdmin || false,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, password, isAdmin } = req.body;

      if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Nenhum dado fornecido." });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ message: "Nenhum usuário encontrado." });
      }

      if(name) user.name = name
      if(email) user.email = email
      if(isAdmin != undefined) user.isAdmin = isAdmin
      if(password){
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
      }

      user.save()

      return res.status(200).json(user)

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async delete(req, res){
    const { id } = req.params
    try {
      if(Object.keys(req.params).length === 0){
        return res.status(404).json({message:"Dados insuficientes"})
    }
    const user = await User.findByPk(id)

    if(!user){
        return res.status(404).json({message:"Usuário não encontrado"})
    }

    await user.destroy() 
    
    return res.status(200).json({message:"Usuário removido com sucesso."})

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
  }
};
