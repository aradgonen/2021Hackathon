import cloneDeep from 'lodash/cloneDeep'

const customeGraph = (topology, nxApp) => {
    window.nx.define('CusomeNodeTooltip', window.nx.graphic.Topology.NodeTooltipContent, {
        properties: {
            node: {
                set: function (value) {
                    let model = value.model();
                    let data = cloneDeep(model.getData())

                    // Removes next ui underling fields
                    delete data.x
                    delete data.y
                    delete data.px
                    delete data.py
                    delete data.weight
                    delete data.index
                    delete data.id
                    delete data.device_type
                    delete data.name

                    this.view('list').set('items', new window.nx.data.Dictionary(data));
                    this.title(value.label());
                }
            },
            topology: {},
            title: {}
        },
    });
    topology.tooltipManager().nodeTooltipContentClass("CusomeNodeTooltip")
    window.nx.define("CusomeLinkTooltip", window.nx.graphic.Topology.LinkTooltipContent, {
        properties: {
            link: {
                set: function (value) {
                    let model = value.model();
                    let data = model.getData()
                    let links = data.links
                    this.nodeA("123")
                    this.nodeB(data.nodeBHost)
                    let items = [...links]
                    this.view("list").items(items);
                }
            },
            topology: {},
            tooltipmanager: {},
            nodeA: {},
            nodeB: {},
        },
        view: {
            tag: 'table',
            props: {
                style: {
                    "padding": "5px"
                }
            },
            content: [
                {
                    tag: 'thead',
                    content: [
                        {
                            tag: 'th',
                            name: "nodeA",
                            content: '{#nodeA}'
                        },
                        {
                            tag: 'th',
                            name: "nodeB",
                            content: '{#nodeB}'
                        }
                    ]
                },
                {
                    name: 'list',
                    tag: 'tbody',
                    props: {
                        template: {
                            tag: 'tr',
                            content: [
                                {
                                    tag: 'td',
                                    content: '{nodeA}: '
                                },
                                {
                                    tag: 'td',
                                    content: '{nodeB}'
                                }
                            ]

                        }
                    }
                }
            ]
        }
    });
    topology.tooltipManager().linkTooltipContentClass("CusomeLinkTooltip")
}

export default customeGraph


/*
 name: 'list',
                props: {
                    'class': 'list-group',
                    style: 'width:200px',
                    template: {
                        tag: 'a',
                        props: {
                            'class': 'list-group-item'
                        },
                        content: [
                            [
                                {
                                    tag: 'span',
                                    content: '{nodeA}: '
                                },
                                {
                                    tag: 'span',
                                    content: '{nodeB}'
                                }
                            ]
                        ],
                        events: {
                            'click': '{#_click}'
                        }
                    }
                }
*/