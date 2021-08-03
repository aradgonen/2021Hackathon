import React, { useEffect, useRef } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";
import rack_icon from "../images/server-rack.jpg"
import network_icon from "../images/network-switch.jpg"
import server_icon from "../images/server-icon.jpg"
import storage_icon from "../images/storage-icon.png"

const NeoGraph = (props) => {
  const {
    width,
    height,
    containerId,
    backgroundColor,
    neo4jUri,
    neo4jUser,
    neo4jPassword,
    neo4jcommand
  } = props;

  const visRef = useRef();
 
  useEffect(() => {
    const config = {
      container_id: visRef.current.id,
      server_url: neo4jUri,
      server_user: neo4jUser,
      server_password: neo4jPassword,
      labels: {
        "StorageNode":{
          caption:"name",
          image:storage_icon
      },
        "ServerNode":{
          caption:"name",
          image:server_icon
      },
        "XDeviceNode": {
            caption:"name"
        },
        "NetworkNode":{
            caption:"name",
            image:network_icon
        },
        "RackNode":{
            caption:"name",
            image:rack_icon
        }
      },
      relationships: {
      },
      initial_cypher:
        neo4jcommand,
    };
    const vis = new Neovis(config);
    vis.render();
  }, [neo4jUri, neo4jUser, neo4jPassword]);

  return (
    <div
      id={containerId}
      ref={visRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: `${backgroundColor}`,
      }}
    />
  );
};

NeoGraph.defaultProps = {
  width: 300,
  height: 300,
  backgroundColor: "#d3d3d3",
};

NeoGraph.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  neo4jcommand: PropTypes.string
};

const ResponsiveNeoGraph = (props) => {
  const [resizeListener, sizes] = useResizeAware();

  const side = Math.max(sizes.width, sizes.height);
  const neoGraphProps = { ...props, width: side, height: side };
  return (
    <div style={{ position: "relative" }}>
      {resizeListener}
      <NeoGraph {...neoGraphProps} />
    </div>
  );
};

ResponsiveNeoGraph.defaultProps = {
  backgroundColor: "#d3d3d3",
};

ResponsiveNeoGraph.propTypes = {
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  neo4jcommand: PropTypes.string.isRequired
};

export { NeoGraph, ResponsiveNeoGraph };