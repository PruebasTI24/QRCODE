/*var QRCode = require('qrcode')
var canvas = document.getElementById('canvas')

QRCode.toCanvas(canvas, 'sample text', function (error) {
  if (error) console.error(error)
  console.log('success!');
}) 

QRCode.toString('Codigo QR Pruebas', {type:'terminal'}, function (error, url){
    console.log(url)
})
*/
const qrcode = require('qrcode-base64');
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const { Console } = require('console');
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
  const pass = req.body.password; 
  console.log('Texto user:', texto); 
  console.log('Texto password: ', pass);

  const url = qrcode.drawImg(texto, {
    typeNumber: 4,
    errorCorrectLevel: 'M',
    size: 200
  })
  

  const psw = qrcode.drawImg(pass, {
    typeNumber: 4,
    errorCorrectLevel: 'M',
    size: 200
  })

  res.json({ message: 'Texto recibido correctamente del passw', psw, url});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//en la consola del navegador tambien me esta guardando con espacios