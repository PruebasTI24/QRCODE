const qrcode = require('qrcode-base64');
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const { Console } = require('console');

app.use(express.static('public'));
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

  res.json({ message: 'Texto recibido correctamente:', psw, url});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

