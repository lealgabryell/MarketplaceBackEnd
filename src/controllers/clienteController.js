const Cliente= require('../models/cliente');

    // Listar todos os clientes
    exports.listAll = async(req, res) => {
        try{
            const clientes = await Cliente.find()
            res.status(200).json(clientes);
        }catch(error){
            res.status(400).json({ message: error.message})
        }
    }
    // Listar um cliente específico
    exports.listOne = async(req, res) => {
        try{
            const cliente = await Cliente.findById(req.params.id)
            res.status(200).json(cliente);
        }catch{
            res.status(404).json({ message: 'Cliente não encontrado!'})
        }
    }
    // Criar cliente novo
   exports.create = async(req, res) =>{
        try{
              const cliente= await Cliente.create(req.body)
              res.status(201).json(cliente);
            } catch (error){
                res.status(400).json({error: error.message});
            }
    }
    // Criar varios clientes novos
    exports.createMany = async(req, res) =>{
        try{
            const cliente= await Cliente.createMany(req.body)
            res.status(201).json(cliente);
            } catch (error){
            res.status(400).json({message: error.message})
            }
    }
    // Editar clientes 
    exports.update = async(req, res) =>{

     try{  const cliente= await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(cliente);

     } catch(error){
        res.status(400).json({message: error.message});
     }
    }

    //Deletar cliente
    exports.delete = async(req, res) =>{
        try{
            const cliente= await Cliente.findByIdAndDelete(req.params.id)
            res.status(204).json({message: 'Deletado com sucesso!', content: req.body}) 
        } catch(error){
            res.status(400).json({message: error.message})
                
        }
    }






