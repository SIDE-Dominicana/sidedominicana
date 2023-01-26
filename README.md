# Side Dominicana

## **Introducción**

Este manual se estará usando como guías y método de documentación de los diferentes cambios que puedan establecerse en la aplicación como todo lo demás que opera todo el sistema.

- **NPM Scripts** – Estos son los comandos establecidos para las diferentes formas de ejecutar ambos lados del proyecto (Front End & Back End).

- **npm run client-admin –** Ejecutar lado de cliente solamente.
- **npm run server-dev** – Ejecutar lado del servidor o api solamente con la configuración de desarrollo.
- **npm run dev** – Ejecutar ambos lados simultáneamente con la configuración de desarrollo.
- **npm run server-prod** – Ejecutar lado del servidor o api solamente con la configuración de producción.
- **npm run prod**  – Ejecutar ambos lados simultáneamente con la configuración de producción.

- **Pasos para la migración automática de nuevos modelos**  - Los siguientes pasos a seguir será para la creación de las tablas de la base de datos.

- Entrar y abrir la siguiente ruta **src\config\db.config.js**
- Seguir siguiente formato para crear la tablas:

![Text

Description automatically generated](Aspose.Words.04e010a5-10d7-4366-ba50-a7cb0d76680e.001.png)

- Seguir siguiente formato para la realización de las relaciones entre las tablas – Información más detallada en este enlace [aqui:](https://sequelize.org/docs/v6/category/advanced-association-concepts/)

![Text

Description automatically generated](Aspose.Words.04e010a5-10d7-4366-ba50-a7cb0d76680e.002.png)