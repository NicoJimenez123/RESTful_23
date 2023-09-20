# Este es la API que el profe fue desarrollando
### Para levantar el servidor en local hay que hacer lo siguiente:
Estando en el directorio raíz del proyecto, hay que ejecutar
```
npm install
```
para instalar las dependencias que se encuentran en el package.json.
Una vez instaladas las dependencias habría que crear un archivo llamado <b>.env</b> en el que vamos a poner lo siguiente:
```
MONGO_CONNECTION_STRING='<Acá hay que poner el string de conexión a mongo>'
```
Una vez completado eso, hay que levantar el servidor con el siguiente comando:
```
npm run dev
```
De esta forma, vamos a tener el servidor levantado con <b>nodemon</b> y cualquier cambio que hagamos en el código, se aplicará sin tener que reiniciar manualmente el servidor.