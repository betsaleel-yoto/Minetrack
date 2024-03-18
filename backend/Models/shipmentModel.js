const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllShipments = async (req, res) => {
  try {
    const shipments = await prisma.Shipment.findMany();
    res.status(200).json(shipments);
  } catch (error) {
    console.error('Erreur lors de la récupération des envois :', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const editShipment = async (req, res) => {
  try {
    const { ShipmentTitle, ShipmentDescription, EndDate } = req.body;
    const { id } = req.params;

    const updatedShipment = await prisma.Shipment.update({
      where: { id: parseInt(id) },
      data: { ShipmentTitle, ShipmentDescription, EndDate },
    });

    res.status(200).json(updatedShipment);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'envoi :', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteShipment = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.Shipment.delete({ where: { id: parseInt(id) } });

    res.status(200).json({ message: 'Shipment deleted successfully' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'envoi :', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const addShipment = async (req, res) => {
  try {
    const { ShipmentTitle, ShipmentDescription, EndDate, matriculationNumberSadmin } = req.body;

    const newShipment = await prisma.Shipment.create({
      data: { ShipmentTitle, ShipmentDescription, EndDate, matriculationNumberSadmin },
    });

    res.status(201).json({ message: 'Shipment added successfully', data: newShipment });
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'envoi :', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllShipments,
  editShipment,
  deleteShipment,
  addShipment
};
