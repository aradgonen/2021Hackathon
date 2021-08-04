import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { TreeView, TreeItem } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import NavTreeItem from './NavTreeItem'

const NavTreeView = ({ complexLinks }) => {
    const history = useHistory()

    let links = {}
    const recordLinks = (complexLink) => {
        links[complexLink.id] = complexLink.to
        if (Array.isArray(complexLink.subLinks))
            complexLink.subLinks.forEach((subLink => recordLinks(subLink)))
    }
    complexLinks.forEach((comaplexLink) => recordLinks(comaplexLink))

    const handleSelect = (event, linkId) => {
        if (links[linkId])
            history.push(links[linkId])
    }

    const renderTree = (link) => (
        <NavTreeItem key={link.id}
            nodeId={link.id}
            label={link.label}>
            {Array.isArray(link.subLinks) ? link.subLinks.map((subLink) => renderTree(subLink)) : null}
        </NavTreeItem>
    );

    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            defaultSelected={['root']}
            onNodeSelect={handleSelect}>
            {complexLinks && complexLinks.map((link) => (renderTree(link)))}
        </TreeView>
    );
}

NavTreeView.propTypes = {
    complexLinks: PropTypes.array,
};

export default NavTreeView