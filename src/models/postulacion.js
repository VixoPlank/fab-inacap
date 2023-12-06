import { Schema, model, models } from "mongoose";


const PostulacionSchema = new Schema({
  dni: {
    type: String,
    required: true
    
  },
  personalidad: {
    type: String,
    
    
  },
  razon_social: {
    type: String,
    
  },

  nombre: {
    type: String,
    
    select: false,
  },

  apellido: {
    type: String,
    
  },
  date: {
    type: String,
    
  },
  ocupacion: {
    type: String,
    
  },
  nivel_educacional: {
    type: String,
    
  },
  institucion: {
    type: String,
    
  },

  //info proyecto
  nombre_proyecto: {
    type: String,
    
  },
  objetivo_proyecto: {
    type: String,
    
  },
  problematica: {
    type: String,
    
  },
  descripcion: {
    type: String,
    
  },
  resultados: {
    type: String,
    
  },
  fab: {
    type: String,
    
  },
  comentarios: {
    type: String,
    
  },
  estado: {
    type: String,
    
    default:"En Revisión"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
},{
    timestamps: true,

});

const Postulacion = models.Postulacion || model("Postulacion", PostulacionSchema);
export default Postulacion;