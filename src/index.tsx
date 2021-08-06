// @ts-nocheck

import * as React from 'react';
import { renderToString } from 'react-dom/server';
const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

// import pdfTemplate from './documents/index';

import App from './components/app';
import { fetchProps } from './props';
import { Report } from '../../tower-analytics-frontend/src/Containers/Reports/Details/Report'
console.log('report after import', Report)
//const rep = (<App><Report/></App>);

//const CompiledApp = (<App {...fetchProps()} />);

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const test = () => {
  //const html = renderToString(CompiledApp);

  // const html = renderToString(Report);
  //
  // // return pdf.create(html, {}).toFile('result.pdf', (err) => {
  // //   console.error('Error encountered during PDF generation: ', err);
  // // });
  //
  // var options = { format: 'Letter' };
  //
  // pdf.create(html, options).toFile('./result.pdf', function(err, res) {
  //   if (err) return console.log(err);
  //   console.log(res); // { filename: '/pdf/result.pdf' }
  // });
}

test();

app.post('/generatePdf', (req, res) => {
     pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/getPdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));
