# Test Frontend (Jaime Rodriguez)

Caracteristicas y requisitos:

 * Solucion usando Webpack
 * Tener instalado node y npm
 * Ejecutar *npm install* desde el directorio raiz ./
 * Tambien es posible probar directamente la solucion ejecutando el archivo index.html en el browser que carga el archivo bundle que es generado por la aplicación.


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... -->
    <title>Test FrontEnd</title>
</head>
<body>
    <div class="wrapper">
        <form class="pure-form">
            <!-- ... -->
        </form>
        <ol id="listItems" class="rounded-list"></ol>
    </div>
    <!-- Cargando bundle generado por Webpack -->
	<script type="text/javascript" src="dist/bundles.js"></script>
</body>
</html>
```
* la configuración y especificaciones de webpack para la aplicación estan en el archivo: *webpack.config.js*.

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');

module.exports = {
    entry: {
        bundles: ['./src/js/functions.js','./src/js/app.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'), //__dirname + '/dist',
        filename: '[name].js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: { presets: ['es2015'] }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            title: 'Test FrontEnd',
            template: './template/layout.ejs'
        }),
        new DynamicCdnWebpackPlugin()
    ]
}
```
