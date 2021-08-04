import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import axios from 'axios';
import cloneDeep from 'lodash/cloneDeep';
import { makeStyles, useTheme, withStyles } from '@material-ui/styles';
import MaterialTable from "material-table";
import useNotifier from '../../ui/notifications/useNotifier'
import InputDialog from '../input/inputDialog'
import appConfigs from '../../../config/serverConfigs'
import useUrlFormatter from './utils/useUrlFormatter'

const useStyles = makeStyles((theme) => ({
}));

const editInitData = { isDisplayed: false, data: null }
function DataTable({
    title,
    inputFormat,
    columns,
    idField,
    fetchDataUrl,
    updateDataUrl,
    addDataUrl,
    deleteDataUrl,
    isEditAllowed,
    isAddAllowed,
    isDeleteAllowed }) {
    const [data, updateData] = useState(null)
    const [editData, setEditData] = useState(editInitData)
    const [isAddOpen, setAddState] = useState(false)

    const notifier = useNotifier()
    const formatter = useUrlFormatter()
    let currTheme = useTheme()
    let classes = useStyles()

    const fetchData = async (url, token) => {
        try {
            let response = await axios.get(url)
            updateData(response.data)
        }
        catch (err) {
            notifier.notify("Failed to fatch records", "error")
        }
    }

    useEffect(() => {
        fetchData(appConfigs.appServerPrefix + fetchDataUrl, 54)
    }, []);

    let editable = {}
    const handelRecordAdd = async (newData) => {
        try {
            let complexUrl = formatter.createUrl(addDataUrl, newData)
            let response = await axios.post(appConfigs.appServerPrefix + complexUrl, { payload: newData })
            notifier.notify("The record was added succeffuly", "success")
            updateData(state => [...state, response.data])
        }
        catch (err) {
            notifier.notify("Failed to add a records", "error")
        }
    }

    const handelRecordUpdate = async (newData) => {
        try {
            let complexUrl = formatter.assembleUrl(updateDataUrl, editData.primaryKeys)
            let response = await axios.put(appConfigs.appServerPrefix + complexUrl, { payload: newData })
            notifier.notify("The record was updated succeffuly", "success")
            updateData(state => [...state, response.data])
        }
        catch (err) {
            notifier.notify("Failed to update a records", "error")
        }
    }

    const handelRecordDelete = async (oldData) => {
        try {
            let complexUrl = formatter.createUrl(updateDataUrl, oldData)
            let response = await axios.put(appConfigs.appServerPrefix + complexUrl)
            notifier.notify("The record was updated succeffuly", "success")
            updateData(state => [...state, response.data])
        }
        catch (err) {
            notifier.notify("Failed to update a records", "error")
        }
    }


    let addUi = {}
    if (isAddAllowed) {
        addUi = <InputDialog isOpen={isAddOpen}
            format={inputFormat}
            onClose={() => (setAddState(false))}
            onDataSubmit={handelRecordAdd}
            dialogTitle="Add record"
            dialogDesc="Feel free to enter data for the new record:"
            submitText="Cool"
            cancelText="Forget it"
            maxWidth="md" />
    }

    let editUi = {}
    if (isEditAllowed) {
        editUi = <InputDialog isOpen={editData.isDisplayed}
            format={inputFormat}
            onClose={() => (setEditData(editInitData))}
            onDataSubmit={handelRecordUpdate}
            defaultRecord={editData.oldRecord}
            dialogTitle="Edit record"
            dialogDesc="Feel free to edit those fields:"
            submitText="Cool"
            cancelText="Forget it"
            maxWidth="md" />

    }

    if (isDeleteAllowed) {
        editable.onRowDelete = oldDate => handelRecordDelete(oldDate)
    }

    return <React.Fragment>
        {addUi}
        {editUi}
        <MaterialTable
            title={title}
            columns={columns}
            editable={editable}
            isLoading={data === null}
            options={{
                pageSize: 10,
                pageSizeOptions: [10, 20, 50],
                actionsColumnIndex: -1,
                padding: "dense"
            }}
            data={data ? data : []}
            actions={[{
                icon: 'add',
                tooltip: 'הוסף אירוע',
                isFreeAction: true,
                onClick: () => { setAddState(true) }
            },
            {
                icon: 'edit',
                tooltip: 'Edit record',
                isFreeAction: false,
                onClick: (jsEvent, oldRecord) => {
                    setEditData({
                        isDisplayed: true,
                        oldRecord: oldRecord,
                        primaryKeys: formatter.extractKeyValues(updateDataUrl, oldRecord)
                    })
                }
            }]}
        />
    </React.Fragment>
}


DataTable.propTypes = {
    title: PropTypes.string.isRequired,
    inputFormat: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    fetchDataUrl: PropTypes.string.isRequired,
    idField: PropTypes.string,
    updateDataUrl: PropTypes.string,
    addDataUrl: PropTypes.string,
    deleteDataUrl: PropTypes.string,
    isEditAllowed: PropTypes.bool,
    isAddAllowed: PropTypes.bool,
    isDeleteAllowed: PropTypes.bool,
};


export default DataTable