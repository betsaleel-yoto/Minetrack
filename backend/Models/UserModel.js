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

const edit = async (req, res) => {
  try {
    const { matriculationNumber,UserName,UserRole,UserTitle } = req.body;
    const { matriculation } = req.params; // Récupérer le matriculationNumber des paramètres de la requête
    await prisma.$transaction(async(prisma)=>{
      const updatedUser = await prisma.User.update({
        where: {
          matriculationNumber: matriculation
        },
        data: {
          matriculationNumber,
          UserName,
          UserRole,
          UserTitle
        }
      });
      console.log('sAdmin updated:',updatedUser)
      return res.status(201).json(updatedUser);
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
const deleteUser= await prisma.User.delete({
  where:{
    matriculationNumber: matriculation
  }
})
   
    console.log('User deleted:',deleteUser);

    res.status(201).json({message: "User deleted successfully"})
  });
} catch(error){
console.error('Error deleting user:',error)
res.status(500).json({error:"Internal Server Error"})
}
}
module.exports={
  getAll,edit,delet
}