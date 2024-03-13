const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll =  async(req,res)=>{
  try {
    const superAdmins = await prisma.superAdmin.findMany();
    return res.status(201).json(superAdmins) ;
  } catch (error) {
    console.error('Erreur lors de la récupération des SuperAdmins :', error);
    throw error;
  }
}

const edit = async (req, res) => {
  try {
    const { username } = req.body;
    const { matriculationNumber } = req.params; // Récupérer le matriculationNumber des paramètres de la requête
    await prisma.$transaction(async(prisma)=>{
      const updatedSuperAdmin = await prisma.SuperAdmin.update({
        where: {
          matriculationNumber: matriculationNumber
        },
        data: {
          matriculationNumber,
          username
        }
      });
      console.log('sAdmin updated:',updatedSuperAdmin)
      return res.status(201).json(updatedSuperAdmin);
    })

  } catch (error) {
    console.error('Erreur lors de la mise à jour du SuperAdmin :', error);
    return res.status(500).json({ error: 'Erreur lors de la mise à jour du SuperAdmin' });
  }
}

module.exports={
getAll,edit
}