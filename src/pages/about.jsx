import React from 'react';
import { Page, Navbar, Block, BlockTitle } from 'framework7-react';

const AboutPage = () => (
  <Page>
    <Navbar title="About" backLink="Back" />
    <BlockTitle>About tipBru</BlockTitle>
    <Block>
    <h2>How to use tipBru</h2>
      <p>
        Please enter the amount you owe from the bill. Then, select a Tip
        Generosity Level. tipBru will do the magic and work out the tip and the
        total amount you owe.
      </p>
      <p>
        Optional: Make payments easier by rounding off the Total amount. You can
        round off the Total amount into a whole number by using the "Round Up"
        button. This will round up the Total to the nearest 5. Tip % is also
        adjusted, so your waiter scores.
      </p>
      <h2>About tipBru</h2>
      <p>
        tipBru is a free, lightweight tip calculating utility app. It can
        quickly calculate the tip on your bill when you're out and about. It
        saves you time and from making embarrassing under-tipping mistakes.
      </p>
    </Block>
  </Page>
);

export default AboutPage;
