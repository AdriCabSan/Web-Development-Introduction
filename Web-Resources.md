# Web Resources
Lista de todos los sitios web que usaremos o pueden usar para el curso o proyectos personales

## Graphic Mockups
Recursos visuales para sus sitios web:

### Fonts
Antes de descargar y usar estas fuentes, debes conocer las reglas. El hecho de que sea gratis no significa que puedas hacer lo que quieras con estas fuentes.

La mayoría de las fuentes gratuitas disponibles en la web vienen con licencias limitadas, lo que significa que sólo puedes usarlas con proyectos personales. Sin embargo, hay sitios que ofrecen fuentes gratuitas con licencias comerciales.

Sólo asegúrate de comprobar la licencia de cada fuente que descargues antes de usarlas con tus proyectos.
* [Google fonts](https://fonts.google.com/) - amplia galeria de fuentes,encuentras ejemplos de como insertarlas directamente en tu codigo CSS
* [Font Squirrel](https://www.fontsquirrel.com/) - amplia variedad de fuentes de las mismas familias
### Icons
* [font-awesome] - iconos diversos clasificados por tipos
* [material.io]- iconos para material design
* [icon8](https://icons8.com/) - free icons
* [favicon-generator](https://realfavicongenerator.net/) - genera favicons para tamaños de diversos dispositivos

### Libraries/Frameworks
* [Breakdance](https://breakdance.github.io/breakdance/) - HTML to Markdown converter
* [jQuery] - libreria vieja pero conocida de javascript
* [Twitter Bootstrap] - Libreria muy usada de CSS para responsive design cn flexbox implementado
* [Zurb Foundation] - libreria mas extensa que bootstrap pero con una curva  mas larga de aprendizaje,mas modular
* [Bulma] - libreria liviana y facil de utilizar para componentes CSS,muy utilizada en proyectos con PHP Laravel

### Herramientas
* [dillinger](https://dillinger.io/) - Editor de lenguaje markdown para documentacion en repositorios,exporta e importa HTML,PDF,MD para edicion o descarga
* [specificity calculator](https://specificity.keegan.st/) - 
* [specificity visualizer](https://isellsoap.github.io/specificity-visualizer/) - Visualizador de especificidad de tu documento 
* [CSS normalize](http://necolas.github.io/normalize.css/) -minificador de CSS
* [Webpack](https://webpack.js.org/) - bundler para empaquetar y minificar un proyecto entero de javascript(avanzado)

### Hosting/deploying
* [netlify](https://www.netlify.com/) - plataforma para desplegar y hostear un sitio web estatico

### Referencias a recursos
Para poder visualizar los iconos o utilizar cualquier recurso en nuestros proyectos es necesario saber referenciarlos en nuestro proecto para poderlos usar,aqui se dejan ejemplos de como referenciarlos:
```html
<!--para insertar el favicon(logotipo de pestaña)--->
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> 
<!--Ejemplos de como insertar librerias de CSS--->
 <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet">
 <link href="css/style.css" rel="stylesheet">
<!--para insertar librerias de javascript(se insertan al final del body)--->
<script type="text/javascript" src="path-to-javascript-file.js"></script>
<!--Ejemplos de referencias a Fuentes para tu documento--->
 <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
 <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic' rel='stylesheet' type='text/css'>
```
```css
## para referenciar fuentes(en tu CSS)
@font-face {
font-family: "CustomFont";
src: url("https://yoursite.com/css/fonts/CustomFont.eot");
src: url("https://yoursite.com/css/fonts/CustomFont.woff") format("woff"),
url("https://yoursite.com/css/fonts/CustomFont.otf") format("opentype"),
url("https://yoursite.com/css/fonts/CustomFont.svg#filename") format("svg");
}
```

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [material.io]: <https://material.io/resources/icons/?style=baseline>
   [font-awesome]: <https://fontawesome.com/>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [Zurb Foundation]: <https://get.foundation/>
   [Bulma]: <https://bulma.io/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   
