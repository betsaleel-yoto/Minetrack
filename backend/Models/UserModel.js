const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll =  async(req,res)=>{
  try {
    const Users = await prisma.User.findMany();
    return res.status(201).json(Users) ;
  } catch (error) {
    console.error('Erreur lors de la récupération des Users :', error);
    throw error;
  }
}

module.exports={
  getAll
}