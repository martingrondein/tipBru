import React, { useState } from "react";
import {
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
  List,
  ListItem,
  Button,
  ListInput,
  Icon,
  Segmented,
  Gauge
} from "framework7-react";



export default () => {
  const [gaugeValue, setGaugeValue, amountValue, setAmountValue] = useState("");

  const onChangeHandler = event => {
    setGaugeValue(parseFloat(event.target.value).toFixed(2));

    console.log(amountValue);
 };

  return(
  <Page name="home">
    <Navbar sliding={false} title="tipBru">
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
    </Navbar>

    <Block strongIos outlineIos className="text-align-center">
      <div className="grid grid-cols-1 grid-gap">
        <div>
        <List strongIos dividersIos insetIos>
          <ListInput
            name="amountValue"
            outline
            label="Amount"
            floatingLabel
            type="text"
            placeholder="0.00"
            clearButton
            onChange={onChangeHandler}
            errorMessage="Only numbers please!"
            required
            validate
            pattern="[0-9]*(?:\.[0-9]+)?"
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
        </List>
        </div>
        <div>
        <Gauge
          type="circle"
          value={gaugeValue}
          size={250}
          borderColor="#2196f3"
          borderWidth={10}
          valueText={`${parseFloat(gaugeValue || 0).toFixed(2)}`}
          valueFontSize={41}
          valueTextColor="#2196f3"
          labelText="with tip"
        />
        <Segmented tag="p" raised>
          <Button active={gaugeValue === amountValue } onClick={() => setGaugeValue(parseFloat(parseFloat(gaugeValue) + parseFloat(gaugeValue * 0.10)))}>
            + 10%
          </Button>
          <Button onClick={() => setGaugeValue(parseFloat(parseFloat(gaugeValue) + parseFloat(gaugeValue * 0.15)))}>
            + 15%
          </Button>
          <Button onClick={() => setGaugeValue(parseFloat(parseFloat(gaugeValue) + parseFloat(gaugeValue * 0.20)))}>
            + 20%
          </Button>
          <Button onClick={() => setGaugeValue(parseFloat(parseFloat(gaugeValue) + parseFloat(gaugeValue * 0.35)))}>
            + 35%
          </Button>
          <Button onClick={() => setGaugeValue(parseFloat(parseFloat(gaugeValue) + parseFloat(gaugeValue * 0.50)))}>
            + 50%
          </Button>
        </Segmented>

        </div>
      </div>

    </Block>

    <List strong inset dividersIos>
      <ListItem link="/about/" title="About" />
    </List>


  </Page>
  );
};