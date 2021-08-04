import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Script from 'react-load-script';
import cusomizeNextUiGraph from './cusomeNUIGraph'

const topologyConfig = {
    nodeConfig: {
        label: "model.name",
        iconType: "model.device_type"
    },
    nodeSet: {
        label: "model.name",
    },

    // special configuration for links
    linkConfig: {
        label: function (link, model) {
            let data = link._data
            return data.links.length > 1 ? `${data.links.length - 1} ports` : ""
        },
        linkType: "curve",
        width: 6
    },
    theme: "slate",
    // if true, the nodes' icons are shown, otherwise a user sees a dot instead
    showIcon: true,
    // automatically compute the position of nodes
    dataProcessor: "force",
    autoLayout: true,
    adaptive: true,
    identityKey: "id",

};

const NextUiGraph = (props) => {
    const { nodes, links, nodeSet, onLinkClick, onNodeClick } = props

    console.log(nodes)
    const [topologyData, setTopologyData] = useState(null);
    const [topology, setTopology] = useState(null);
    const [nxApp, setNxApp] = useState(null);


    useEffect(() => {
        setTopologyData({
            nodes: nodes,
            links: links,
            nodeSet: nodeSet
        })
    }, [nodes, links, nodeSet])


    // Update the topology data if it changes
    useEffect(() => {
        if (!topology || !nxApp || !window.nx) {
            return;
        }
        const nodeSet = [{
            id: 8,
            type: 'linkSet',
            links: (1,2),
            root: '4',
            "name": "Node set 4",
            iconType: 'groupL'
        }]
        topology.data({ ...topologyData, linkSet:nodeSet});
    }, [nxApp, topology, topologyData])

    // Attach the diagram once it's first loaded
    useEffect(() => {
        if (!topology || !nxApp || !window.nx) {
            return;
        }
        topology.attach(nxApp);
    }, [nxApp, topology])


    const handleLoad = () => {
        const tempApp = new window.nx.ui.Application()
        tempApp.container(document.getElementById('nxContainer'))
        setNxApp(tempApp);

        const topology = new window.nx.graphic.Topology(topologyConfig) // topology config JSON object
        setTopology(topology);
        console.log(1)
        console.log(topology)
        console.log(1)
        cusomizeNextUiGraph(topology, nxApp)
    }

    return <React.Fragment>
        <Script url="lib/next-ui/js/next.js"
            onError={() => console.log("Error!")}
            onLoad={handleLoad} />
        <div id="nxContainer" />
    </React.Fragment>
}

NextUiGraph.propTypes = {
    nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
    nodeSet: PropTypes.arrayOf(PropTypes.object),
    onLinkClick: PropTypes.func,
    onNodeClick: PropTypes.func,
}

export default NextUiGraph;

/*


import React from "react";
import PropTypes from 'prop-types'
import NextContainer from "react-next-ui";
import "react-next-ui/build/css/next.min.css";


const NextUiGraph = React.memo((props) => {
    const { nodes, links, nodeSet, onLinkClick, onNodeClick } = props
    const sampleTopology = {
        nodes: nodes,
        links: links,
        nodeSet: nodeSet
    }

    const sampleConfig = {
        nodeConfig: {
            label: "model.name",
            iconType: "model.device_type"
        },
        nodeSet: {
            label: "model.name",
        },

        // special configuration for links
        linkConfig: {

            sourcelabel: 'model.src_int',
            targetlabel: 'model.dst_int',
            label: function (link, model) {
                let data = link._data
                return data.physical_links > 1 ? `${data.physical_links} ports` : ""
            },
            linkType: "curve",
            width: 5
        },
        theme: "slate",
        // if true, the nodes' icons are shown, otherwise a user sees a dot instead
        showIcon: true,
        // automatically compute the position of nodes
        dataProcessor: "force",
        autoLayout: true,
        adaptive: true,
        identityKey: "id",

    };
    const afterLoad = (nxApp) => {
        // @ts-ignore

        window.nx.define("testTooltipPolicy", window.nx.graphic.Topology.TooltipPolicy, {
            properties: {
                topology: {},
                tooltipManager: {},
            },
            methods: {
                init(args) {
                    // @ts-ignore
                    this.sets(args);
                    // @ts-ignore
                    this._tm = this.tooltipManager();
                },
                clickNode(node, x) {
                    let contentFormat = node._model._data.content_format
                    if (onNodeClick) {
                        onNodeClick(contentFormat)
                    }

                },
                clickLink(link) {
                    let contentFormat = link._model._data.content_format
                    if (onLinkClick) {
                        onLinkClick(contentFormat)
                    }
                },
            },
        });
        nxApp.tooltipManager().tooltipPolicyClass("testTooltipPolicy");


    };

    return (
        <div>
            <NextContainer topologyData={sampleTopology} topologyConfig={sampleConfig} callback={afterLoad} />
        </div>
    )
});

        window.nx.define('LabledLink', window.nx.graphic.Topology.Link, {
            properties: {
                sourcelabel: null,
                targetlabel: null
            },
            view: function(view) {
                view.content.push({
                    name: 'source',
                    type: 'nx.graphic.Text',
                    props: {
                        'class': 'sourcelabel',
                        'alignment-baseline': 'text-after-edge',
                        'text-anchor': 'start'
                    }
                }, {
                    name: 'target',
                    type: 'nx.graphic.Text',
                    props: {
                        'class': 'targetlabel',
                        'alignment-baseline': 'text-after-edge',
                        'text-anchor': 'end'
                    }
                });

                return view;
            },
            methods: {
                update: function() {
                    this.inherited();


                    var el, point;

                    var line = this.line();
                    var angle = line.angle();
                    var stageScale = this.stageScale();

                    // pad line
                    line = line.pad(18 * stageScale, 18 * stageScale);

                    var angle = line.angle();
                    var stageScale = this.stageScale();

                    // pad line
                    line = line.pad(18 * stageScale, 18 * stageScale);
                    if (this.sourcelabel()) {
                        el = this.view('source');
                        point = line.start;
                        el.set('x', point.x);
                        el.set('y', point.y);
                        el.set('text', this.sourcelabel());
                        el.setStyle('font-size', 12 * stageScale);
                    }


                    if (this.targetlabel()) {
                        el = this.view('target');
                        point = line.end;
                        el.set('x', point.x);
                        el.set('y', point.y);
                        el.set('text', this.targetlabel());
                        el.setStyle('font-size', 12 * stageScale);
                    }
                }
            }
        });
        nxApp.linkInstanceClass("LabledLink")
*/