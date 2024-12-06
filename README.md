# CARS LANDING

Esto es un ejemplo de landing de reserva de coches usando React 19 con Nexts.

Para instalar la aplicación ejecuta los siguientes comandos en la terminal:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

La aplicación está desarrollada en Ubuntu, así que si la descargas en un entorno Windows, fijate en actualizar los paquetes que lo necesiten.


Si deseas correr los test de la aplicación ejecuta el siguiente comando:

```bash
npm run test
```

Se usa una base de dato de mongoose, por lo que tendras que completar los datos del example.env para que los tests de routing funcionen.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Historial de versiones

- Versión 1.0.0

En esta versión se está maquetando la base de la aplicación y estructurando el diseño. De momento, los datos de los coches se toman de constantes definidas en un archivo. Más adelante se creará una interfaz de base de datos, para que se pueda tomar la información de varios tipos de bases de datos, como sqlite, mysql o mongodb.
