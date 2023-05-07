# Colorear

## Como preparar los svg

- Photoshop:
    - Eliminar todo lo que no queramos que aparezca en el dibujo
    - Pasar la imagen a escala de grises: Imagen > Modo > Escala de grises
    - Ajustar los niveles para que sea lo mas negro posible: Imagen > Ajustes > Niveles
- Aumentar la resolución de la imagen si es necesarios con el programa **Aumentar Resolución"
- Illustrator:
    - Abrir la imagen y seleccionarla
    - Pasar la imagen a vectores con: Calco de imagen > Logotipo en blanco y negro
    - Darle a expandir
    - Entrar en el grupo y eliminar el fondo blanco
    - Seleccionar la linea exterior negra y **soltar** el grupo
    - Ahora tenemos todas las lineas seleccionadas, aprtetamos **shift** y deseleccionamos el trazo mas exterior, y eliminamos el resto de trazos
    - Si hay alguna parte que tenia que ser transparente la seleccionamos y recortamos el trazo exterior
    - Salimos del grupo
    - Le cambiamos a la imagen el ancho a 210mmm
    - Cambiamos el tamaño de la mesa de trabajo para que tenga el mismo tamaño que la imagen
    - Guardamos la imagen en svg



## Astro Starter Kit: Minimal

```
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
