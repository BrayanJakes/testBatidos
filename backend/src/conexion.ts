import mongoose from 'mongoose';

const conexion = async () => {
    await mongoose.connect('mongodb://localhost:27017/batido', 
            { useNewUrlParser: true,
              useUnifiedTopology: true,
                useCreateIndex: true } )
            .then(resp => console.log('DB Conectado'))
            .catch(e => console.log('error en conexion DB:', e))
}

export default conexion;