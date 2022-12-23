const fetch = require('node-fetch');

const url = 'https://contests7.p.rapidapi.com/contests';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7bc1b70be4msh5512aa25b36300fp1b7131jsna98e0103908e',
    'X-RapidAPI-Host': 'contests7.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));