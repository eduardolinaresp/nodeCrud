# se instala los siguientes modulos 
 npm i express morgan promise-mysql cors

# Se crea carpeta src/index.js
    console.log('ok')

# Instalar typescript
  npm install typscript
  tsc --init
# editar tsconfig.json 
     "target": "es6",         
      "outDir": "./build",  

# convertir codigo de js a ts
  Crear archivo ts en carpeta src
  ejecutar tsc
# agregar nuevos script en package.json
  "build": "tsc -w"
  "dev": "nodemon build/index.js"
   
# instalar nodemon como dependencia de desarrollo
  npm i nodemon -D
# Ejecutar scripts nodemon
  npm run build
  npm run dev
# Instalar types de para que vs interprete referencias a librerias ts
  npm i @types/express -D 
  npm i @types/morgan @types/cors -D 
