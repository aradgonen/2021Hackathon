import React,{} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import DataTable from 'react-data-table-component';
import  Checkbox  from 'styled-components';
import FontIcon from 'styled-components';
import SolutionFlow from './SolutionFlow';
const data = [{ id: 1, issue: 'High CPU', summary: 'NetApp Node 3 High CPU',  date: '01/08/2021', field: "Storage", reporter: "Arad", solutionflow:[{title:"Connect To NetApp",data:"open PuTTY and connect"},{title:"Find The issue",data:"while connected do magic"},{title:"Call Zari",data:"take your phone and call"},{title:"Blame McAfee",data:"mcaffee is the worst"},{title:"Call Cyber",data:"blame them"},{title:"Revert Policy",data:"do something"},{title:"Issue is fixed",data:"Duis et massa suscipit, condimentum velit vitae, varius ligula. Aliquam a nibh eros. Donec dui magna, fringilla vitae nibh ut, pellentesque placerat neque. In diam justo, accumsan at massa vel, faucibus convallis erat. Cras suscipit metus dui, ac commodo diam feugiat et. Donec at dui quam. Duis urna justo, bibendum quis pulvinar in, molestie euismod nisl. Nam commodo sit amet eros nec ornare. Nulla facilisi. Etiam sed aliquet sem. Fusce mattis, nulla a commodo tempor, tellus lorem elementum risus, tincidunt efficitur orci dui vel lectus. Curabitur congue erat odio, eget porttitor neque cursus eget. Mauris non aliquet lacus. Aliquam erat volutpat. In sollicitudin placerat augue non fermentum. Mauris ut interdum augue, ut tempus tellus."}]}];
const columns = [
  {
    name: 'Issue',
    sortable: true,
    cell: row => <div><div style={{ fontWeight: 700 }}>{row.title}</div>{row.summary}</div>,
  },
  {
    name: 'Field',
    selector: 'field',
    sortable: true,
    right: true,
  },
  {
    name: 'Date',
    selector: 'date',
    sortable: true,
    right: true,
  },
  {
    name: 'Reporter',
    selector: 'reporter',
    sortable: true,
    right: true,
  },
];


function SolutionKnowledge() {

    const ExpandableComponent = ({ data }) => <SolutionFlow rowData={data}></SolutionFlow>;

  return (
    <DataTable
    title="Solution Knowledge"
    columns={columns}
    data={data}
    // selectableRows
    // selectableRowsComponent={Checkbox}
    // selectableRowsComponentProps={{ inkDisabled: true }}
    // sortIcon={<FontIcon>arrow_downward</FontIcon>}
    // onSelectedRowsChange={handleChange}
    expandableRows
    expandableRowsComponent={<ExpandableComponent/>}
  />
  );

}
  export default SolutionKnowledge;