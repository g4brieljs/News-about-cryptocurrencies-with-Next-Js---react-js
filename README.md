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

#### Enlazando páginas

En React podíamos usar Router, en nextjs ya cuenta con la función Link.

Lo importas 

```js
import Link from 'next/link';
```

Y hemos creado una carpeta en la cual almacenamos todos nuestros componentes, creamos un componente con los enlaces y ya con ese componente lo reutilizamos.



