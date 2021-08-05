// @ts-nocheck

import * as React from 'react';
import { renderToString } from 'react-dom/server';
// import express from 'express';
// import bodyParser from 'body-parser';
// import pdf  from 'html-pdf';
// import cors from 'cors';

// import pdfTemplate from './documents/index';

import App from './components/app';
import { fetchProps } from './props';

const CompiledApp = (<App {...fetchProps()} />);

// const app = express();

const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

const test = () => {
  const html = renderToString(CompiledApp);
  console.log(html);


  // return pdf.create(html, {}).toFile('result.pdf', (err) => {

  // });
}

test();

// app.post('/generatePdf', (req, res) => {
//      pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
//         if(err) {
//             res.send(Promise.reject());
//         }

//         res.send(Promise.resolve());
//     });
// });

// app.get('/getPdf', (req, res) => {
//     res.sendFile(`${__dirname}/result.pdf`)
// })

// app.listen(port, () => console.log(`Listening on port ${port}`));
