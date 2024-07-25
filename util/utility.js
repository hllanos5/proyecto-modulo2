import path from "node:path";
import fs from "node:fs/promises";
import multer from 'multer';

/*Manipulacion de Archivos con FS*/
export const grabarArchivo = (nombreArchivo, contenido) => {
    fs.writeFile('./' + nombreArchivo, contenido, err => {
        if (err) {
            console.log('Hubo un error al grabar Archivo: ', err);
        }
        console.log('Operación exitosa');
    })
}

export const leerArchivo = async (nombreArchivo) => {
    return fs.readFile(nombreArchivo, 'utf-8', (err, data) => {
        if (err) {
            console.log('Archivo no encontrado: ', err);
        }
    })
}

export const borrarArchivo = async (nombreArchivo) => {

    return fs.unlink("uploads/"+nombreArchivo)
        .then(() => {
            console.log('Archivo eliminado');
            return true
        })
        .catch(err => {
            console.error('Ocurrió un error al eliminar el archivo', err);
            return false;
        });
}

/*Manipulacion de carga de Archivos con Multer*/
const  MIMETYPE = ["image/jpeg","application/pdf","image/png"]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },

    filename: function(req, file, cb) {
        let extension = (file.originalname).split(".");
        const uniqueSuffix = "imagen-"+Date.now()+ "."+extension[extension.length-1];
        cb(null, uniqueSuffix)
    }
})

export  const uploadFileMulter = multer({
    fileFilter: (req, file, cb)=>{
        if(MIMETYPE.includes(file.mimetype)){
            cb(null, true);
        }
        else {
            cb(`Only ${MIMETYPE.join(' , ')} mimetype area allowed`, false)
        }
    },
    limits: {
        fileSize:1000000
    }
    ,
    storage: storage
});


