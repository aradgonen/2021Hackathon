import React from 'react';
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const CustomeBreadcrumbs = ({ links }) => {
    return (
        <Breadcrumbs>
            {
                links && links.map((link) => {
                    if (link.to)
                        return <Link color="inherit" component={RouterLink} to={link.to} onClick={link.onClick}>
                            {link.title}
                        </Link>
                    return <Link color="inherit">
                        {link.title}
                    </Link>
                })
            }
        </Breadcrumbs>
    );
}

CustomeBreadcrumbs.propTypes = {
    links: PropTypes.array,
}

export default CustomeBreadcrumbs
