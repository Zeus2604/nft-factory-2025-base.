const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // todo lo que metamos en public se sirve directo

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// más adelante pondremos el generador aquí
console.log('Servidor arriba');
app.listen(port, () => console.log(`Corriendo en ${port}`));
