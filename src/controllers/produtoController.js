const { asec } = require('mathjs')
const Produto= require('../models/produto')
const produto = require('../models/produto')

//Listar um novo produtpo

exports.listar = async (req,res) => {
   try { 
    const produto = await Produto.find()
    res.status(200).json(produto)
   }catch( error) {
    res.status(400).json({message: error.message})
   }
}
// Listar um produto especifico
 exports.listarOne = async (req, res) => {
    try{
        const produto = await Produto.findById(req.params.id)
        res.status(200).json(produto);
    }catch(error){
        res.status(400).json({message: 'O produto não foi encontrado'})
    }
 }
exports.create= async(req, res) => {
  try{
      const produto= await produto.create( req.body)
      res.status(201).json(produto)
  } catch ( error){
    res.status(400).json({message: error.message})
  }
}

//criar varios produtos novos 

exports.createMany= async(req, res) => {
    try{
        const produto= await Produto.insertMany(req.body)
        res.status(201).json({message:'Os produtos foram criados com sucesso', content: produto})
    }catch( error ) {
        
    }
  }


exports.update= async(req, res) => {
    
     try{
         const produto= await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json({message:''})
     } catch(error){
        res.status(400).json({message:error.message})
     }
}
    
   exports.delete= async(req, res) =>{
    try{ const produto = await Produto.findByIdAndDelete(req.params.id)
        res.status(200).json({message:'O produto foi deltado com sucesso!', content:req.body})
    } catch(error){
        res.status(400).json({message: error.message})
    }
   }