const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviçoes de forma fácil.'
    },
    {
      title: 'E',
      message: 'JS utiliza Javascript para renderizar HTML.'
    },
    {
      title: 'M',
      message: 'uito fácil de usar.'
    },
    {
      title: 'A',
      message: 'morzinho.'
    },
    {
      title: 'I',
      message: 'nstall EJS.'
    },
    {
      title: 'S',
      message: 'intaxe simples.'
    }
  ]

  const subtitle = 'Uma linguagem de modelagem para criação de paginas HTML.'

  res.render('pages/index', { qualities: items, subtitle: subtitle })
})

app.get('/about', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log('Server OK')
