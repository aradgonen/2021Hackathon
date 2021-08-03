import React,{} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import DataTable from 'react-data-table-component';
import  Checkbox  from 'styled-components';
import FontIcon from 'styled-components';
import SolutionFlow from './SolutionFlow';
const data = [{ id: 1, title: 'Conan the Barbarian', summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',  year: '1982', image: 'http://conan.image.png' },{ id: 2, title: 'Conan the Barbarian', summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',  year: '1982', image: 'http://conan.image.png' }];
const columns = [
  {
    name: 'Title',
    sortable: true,
    cell: row => <div><div style={{ fontWeight: 700 }}>{row.title}</div>{row.summary}</div>,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];


function SolutionKnowledge() {

    const ExpandableComponent = ({ data }) => <SolutionFlow></SolutionFlow>;

  return (
    <DataTable
    title="Solution Knowledge"
    columns={columns}
    data={data}
    selectableRows
    // selectableRowsComponent={Checkbox}
    selectableRowsComponentProps={{ inkDisabled: true }}
    // sortIcon={<FontIcon>arrow_downward</FontIcon>}
    // onSelectedRowsChange={handleChange}
    expandableRows
    expandableRowsComponent={<ExpandableComponent />}
  />
  );

}
  export default SolutionKnowledge;