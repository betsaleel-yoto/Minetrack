const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getAll =  async(req,res)=>{
  try {
    const SuperAdmin = await prisma.SuperAdmin.findMany();
    return res.status(201).json(SuperAdmin) ;
  } catch (error) {
    console.error('Erreur lors de la récupération des SuperAdmins :', error);
    throw error;
  }
}

module.exports={getAll}