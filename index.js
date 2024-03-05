/*var QRCode = require('qrcode')
/*var canvas = document.getElementById('canvas')

QRCode.toCanvas(canvas, 'sample text', function (error) {
  if (error) console.error(error)
  console.log('success!');
}) 

QRCode.toString('Codigo QR Pruebas', {type:'terminal'}, function (error, url){
    console.log(url)
})
*/

const express = require('express')
const app = express()
const port = 3000
const path = require('path');
/*const e = require('express');
/*app.get('/', (req, res) => {
  res.send('Hello World!')
})*/


app.use(express.json());


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/principal.html'));
  });

app.post('/guardarTexto', function(req, res) {
  const texto = req.body.text; 
  console.log('Texto recibido:', texto); 
  res.json({ message: 'Texto recibido correctamente' });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



