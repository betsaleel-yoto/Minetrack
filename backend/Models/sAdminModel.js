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
    const { matriculationNumber,username } = req.body;
    const { matriculation } = req.params; // Récupérer le matriculationNumber des paramètres de la requête
    await prisma.$transaction(async(prisma)=>{
      const updatedSuperAdmin = await prisma.SuperAdmin.update({
        where: {
          matriculationNumber: matriculation
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


const delet = async(req,res)=>{
  try{
    const { matriculation } = req.params;

    await prisma.$transaction(async(prisma)=>{
const SuperAdminDelete= await prisma.SuperAdmin.delete({
  where:{
    matriculationNumber: matriculation
  }
})
   
    console.log('SuperAdmin deleted:',SuperAdminDelete);

    res.status(201).json({message: "SuperAdmin deleted successfully"})
  });
} catch(error){
console.error('Error deleting SuperAdmin:',error)
res.status(500).json({error:"Internal Server Error"})
}
}
module.exports={
getAll,edit,delet
}