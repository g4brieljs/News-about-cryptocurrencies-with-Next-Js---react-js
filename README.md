# Project with Nextjs - React - FetchApi

What is?

Es un framework sencillo para crear aplicaciones React con SSR.

SSR:

Server side rendering, nos permite crear el HTML desde el servidor, esto permite que sea más rápido, ya que los recursos son de parte del servidor.

El SSR se recomienda para aplicaciones escalables.

Mejoramiento del SEO.

### Características de Nextjs

- Code splitting y Lazy Loading a los components, es decir, seperara el código de tus componentes, algo similar a lo que realiza webpack, por ejemplo si tienes 50% del código se usa en un componente se pondrá en otro archivo para no cargar tanto la página.

- Routing en base de los archivos
- URL's Limpias : /nosotro.js = /nosotros
- Soporte para Css
- Hot reload

# First step with Nextjs

### Enlazando páginas

En React podíamos usar Router, en nextjs ya cuenta con la función Link.

Lo importas 

```js
import Link from 'next/link';
```

Y hemos creado una carpeta en la cual almacenamos todos nuestros componentes, creamos un componente con los enlaces y ya con ese componente lo reutilizamos.


### Agregando css 

En nextjs podemos agregar estilos en nuestros componentes mediante una etiqueta llamada `<style jsx>` con un parametro jsx, estos estilo se aislarán en el archivo que los apliques, es decir, si aplicas estilos a un componente, en algún otro componente no te afectará.

Existe muchas maneras de aplicar css en nextjs, usa la que más te convenga.

```js
<style jsx>
    h1{
        color: red;
    }
</style>
```

### MasterPage

Si deseamos agregar alguna librería de estilo como bootstrap, podemos crear una masterpage, para poder usar los estilos en todos los otros componentes.

Primero importamos head de next
Esto nos permitira tener un **head** donde añadir los enlaces a las librerías como bootstrap:
```js
import Head from 'next/head';
```

y creamos nuestro componente MasterPage

```js
const MasterPage = (props) => (
    <div>
        <Head>
            <title>Bitcoin</title>
        </Head>

        {/*Importante*/}
        {props.children}
    </div>
);

export defaul MasterPage;
```

Ese `{props.children}` que tenemos en nuestra MasterPage es lo que nos permite imprimir las etiquetas que esten dentro del componente `<MasterPage>Todolo que este acá dentro vendría siendo el {props.childre} </MasterPage>`.

### Consumir API en Nextjs

Las consultas a una api o base de datos se realizan en `componentDidmount,` pero en nextjs tenemos `getInitialProps` y en este consultamos la API

**getInitialProps** este metodo lo que realiza es enviar nuestra consulta como props para usarlos en los componentes

Tenemo varias opciones,

## Isomorphic Fetch

Primera opcion:

Usar "Fetch API", lo pongo entre comillas porque realmente no se puede usar Fetch API dado a que es una tecnologia del Front-end, la alternativa es usar algo llamado:

- **isomorphic-unfetch**

Esto nos permite poder utilizar Fetch Api del lado del servidor.

Ejemplo:


```js
// Importamos nuestro ismorphic-unfetch
import fetch from 'isomorphic-unfetch';

// Realizaremos una peticion asincrona
Component.getInitialProps = async () => {
    //ahora vamos a consultar la API con fetch
    const api = await fetc('api');
    // una vez lleguen los datos y se almacenen en api lo pasamos a json
    const resApi = await api.json();
    // enviamos nuestro json para poder usarlo
    return{
        resultadoApi: resApi
    }
}
```

## Axios

Segunda opcion:

Utilizar **Axios** esto te permite realizar consultas a una api, base datos de manera mas simple y menos verbosa.

Ejemplo:

```js
//importamos nuestro axios§s
import axios from 'axios';

// realizamo nuestra peticion asincrona
Index.getInitialProps = async () => {
    // esperamos que los datos carguen con await
    const precio = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&api_key={}')
    // retornamos los datos de precio
    return precio.data
};
```

