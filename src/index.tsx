// @ts-nocheck

import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import styled, { ServerStyleSheet, createGlobalStyle } from 'styled-components'
const pdf = require('html-pdf');

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 20px;
  }
`

const Package = styled.span`
  color: magenta;
`

const Hello = () => (
  <div>
    Hello from <Package>React</Package> & <Package>styled-components</Package>!
  </div>
)

function buildHTMLWithCSS () {
  const sheet = new ServerStyleSheet();
  let HTML = (
    sheet.collectStyles(
      <>
        <GlobalStyle />
        <Hello />
      </>
    )
  );
  const Styles = sheet.getStyleTags();
  console.log(Styles);
  return renderToStaticMarkup((
    <>
      {Styles}
      {HTML}
    </>
  ));
}

async function test () {
  const html = buildHTMLWithCSS();
  console.log(html);
  pdf.create(html, {}).toFile('test.pdf', (err) => {});
}

test();
