import { Card } from "@Component/Card";
import { Grid } from "@Component/Grid";
import { Element } from "@Component/Grid/Element";
import React from "react";

function NamePlate(props) {

  let name = props.name;
  function handleMouseOver(event) {
    console.log("in")
  }

  
  function handleMouseLeave(event) {
    console.log("out")
  }

  return <span className="baffle" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>{name}</span>
}

export function App(props) {
  return (
    <React.Fragment>
      <Grid>
        <Element
          color="#fff"
          width="50%"
        />
        <Element
          color="#333"
          width="50%"
        />
      </Grid>
      <Card>
        <NamePlate name=""/>
      </Card>
    </React.Fragment>
  );
}
