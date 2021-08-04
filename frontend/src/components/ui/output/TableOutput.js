import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MaterialTable, { MTableToolbar } from "material-table";

const useStyles = makeStyles((theme) => ({
    header: {
        paddingTop: theme.spacing(7)
    },
    tableHeader: {
        backgroundColor: theme.palette.type == "dark" ?
            theme.palette.primary.dark :
            theme.palette.primary.light

    }
}));

function TableOutput(props) {
    const { format } = props
    let currTheme = useTheme()
    let classes = useStyles()

    return <div >
        <MaterialTable
            title={format.title}
            columns={format.columns}
            options={{
                exportAllData: true,
                ...format.options
            }}
            localization={format.localization}
            components={{
                Toolbar: props => (
                    <div className={classes.tableHeader}>
                        <MTableToolbar {...props} />
                    </div>
                )
            }}
            data={format.data}
            styles={{
                backgroundColor: currTheme.palette.primary.main
            }}

        />
    </div >
}

export default TableOutput