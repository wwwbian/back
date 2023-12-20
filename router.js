//router
const express = require('express');
const router = express.Router();
const Cancion = require('./models/model');


router.post('/agregarcancion', async (req, res) => {
  try {
    // Crea una nueva instancia del modelo Cancion con los datos del cuerpo de la solicitud (req.body)
    const nuevaCancion = new Cancion(req.body);

    // Guarda la nueva canción en la base de datos
    const resultado = await nuevaCancion.save();

    // Devuelve la nueva canción como respuesta
    res.status(201).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // Ruta GET para obtener datos



router.get('/leercancion', async (req, res) => {
  try {
    const datos = await Cancion.find();
    res.json(datos);
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).send('Error interno del servidor');
  }
});
  router.delete('/eliminarcancion/:id', async (req, res) => {
    try {
      const idCancion = req.params.id;
  
      // Verifica si el ID proporcionado es válido
      if (!mongoose.Types.ObjectId.isValid(idCancion)) {
        return res.status(400).json({ error: 'ID de canción no válido' });
      }
  
      // Busca y elimina la canción por su ID
      const resultado = await Cancion.findByIdAndDelete(idCancion);
  
      // Si la canción no existe, devuelve un mensaje adecuado
      if (!resultado) {
        return res.status(404).json({ error: 'Canción no encontrada' });
      }
  
      res.json({ mensaje: 'Canción eliminada exitosamente' });
    } catch (error) {
      console.error('Error al eliminar canción:', error);
      res.status(500).send('Error interno del servidor');
    }
  });
});
module.exports = router;