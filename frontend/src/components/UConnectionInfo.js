import React from 'react';
import {ResponsiveNeoGraph} from "./NeoGraph.js"


function UConnectionInfo(props) {
    return (
      <React.Fragment>
        <ResponsiveNeoGraph id="neo4j"
          containerId={"neo4j"}
          neo4jUri={"bolt://"+process.env.REACT_APP_SIMPLIDC_NEO4J_DB+":7687"}
          neo4jUser={process.env.REACT_APP_SIMPLIDC_NEO4J_USER}
          neo4jPassword={process.env.REACT_APP_SIMPLIDC_NEO4J_PASSWORD}
          neo4jcommand={`MATCH (a {serialNumber: "${props.uData.serialNumber}"})-[r]-(b) RETURN r, b,a`}
        />
      </React.Fragment>
    );
  }

  export default UConnectionInfo;
