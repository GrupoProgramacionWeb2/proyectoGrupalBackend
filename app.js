import express from 'express';
import cors from "cors";
import bodyParser from 'body-parser';
import usuarioRoutes from './src/routes/usuario.js';
import detalle_usuarioRoutes from './src/routes/detalle_usuario.js';
import reporteRoutes from './src/routes/reporte.js';
import ordenRoutes from './src/routes/orden.js';
import orden_productoRoutes from './src/routes/orden_producto.js';
import productoRoutes from './src/routes/producto.js';
import categoriaRoutes from './src/routes/categoria.js';
import pre_armado_productoRoutes from './src/routes/pre_armado_producto.js';
import pre_armadoRoutes from './src/routes/pre_armado.js';
import resenaRoutes from './src/routes/resena.js';
import tipo_resenaRoutes from './src/routes/tipo_resena.js';

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/usuario", usuarioRoutes);

app.use("/detalle_usuario", detalle_usuarioRoutes);

app.use("/reporte", reporteRoutes);

app.use("/orden", ordenRoutes);

app.use("/orden_producto", orden_productoRoutes);

app.use("/producto", productoRoutes);

app.use("/categoria", categoriaRoutes);

app.use("/pre_armado_producto", pre_armado_productoRoutes);

app.use("/pre_armado", pre_armadoRoutes);

app.use("/resena", resenaRoutes);

app.use("/tipo_resena", tipo_resenaRoutes);

export default app;