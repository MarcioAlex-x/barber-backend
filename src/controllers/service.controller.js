const Service = require('../models/Service')

module.exports = class ServiceController{
    static async list(req, res){
        try {
            const services = await Service.findAll()
            return res.status(200).json(services)
        } catch (error) {
            return res.status(500).json({message:error.message})
        }
    }

    static async show(req, res){
        const { id } = req.params
        if(Object.keys(req.params).length === 0){
            return res.status(400).json({message:'Dados insuficientes.'})
        }
        try {
            const service = await Service.findByPk(id)  
            if(!service){
                return res.status(404).json({message:"Usuário cadastrado"})
            }

            if(service === null){
                return res.status(404).json({message:"Usuário não encontrado"})
            }

            return res.status(200).json(service)          
        } catch (error) {
            
        }
    }

    static async create(req, res){
        const { name, price } = req.body
        if(!name || !price){
            return res.status(400).json({message:'Dados insuficientes.'})
        }

        const serviceExiste = await Service.findOne({where:{ name }})

        if(serviceExiste){
            return res.status(400).json({message:"Serviço já existe."})
        }

        try {
            const service = await Service.create({
                name,
                price
            })
            
            return res.status(201).status(service)
        } catch (error) {
            return res.status(500).json({message:error.message})
        }
    }

    static async update(req, res){
        const { id } = req.params
        const { name, price} = req.body

        if(Object.keys(req.params).length === 0){
            return res.status(404).json({message:"Serviço não encontrado."})
        }

        if(!id){
            return res.status(404).json({message:"Serviço não encontrado."})
        }

        try {
            const service = await Service.findByPk(id)
            
            if(name) service.name = name

            if(price) service.price = price
            
            service.save()

            return res.status(200).json(service)

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    static async delete(req, res){
        const { id } = req.params

        if(Object.keys(req.params).length === 0){
            return res.status(404).json({message:"Dados insuficientes."})
        }

        if(!id){
            return res.status(404).json({message:"Serviço não encontrado."})
        }

        const service = await Service.findByPk(id)
        service.destroy()
        return res.status(200).json({message:"Serviço removido com sucesso."})
    }
}
