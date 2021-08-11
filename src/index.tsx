// @ts-nocheck

import * as React from 'react';
import { renderToString } from 'react-dom/server';

import pdf from 'html-pdf';

import App from './components/app';
import Report from '/Users/jmitchel/aa/tower-analytics-frontend/dist/reports.js'
import { fetchProps } from './props';

const test = () => {
  console.log(Report({
    defaultParams: {},
    extraAttributes: [
      { key: 'foo', value: 'bar'},
    ],
    readData: () => {},
    readOptions: () => {},
    schemaFnc: () => {},
  }));
  // const html = renderToString(<Report />);
  // const html = renderToString(<App {...fetchProps()} />);
  
  return pdf.create(html, {}).toFile('result.pdf', (err) => {
    console.error('Error encountered during PDF generation: ', err);
  });
}

test();
