import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MaterialTable, { MTableToolbar } from "material-table";
import SolutionFlow from './SolutionFlow';


const data = [{
  id: 1,
  issue: 'High CPU',
  summary: 'NetApp Node 3 High CPU',
  date: '01/08/2021',
  subject: "Storage",
  reporter: "Arad",
  problem: "Hish CPU",
  symptoms: "CPU average on 98%. For a long duration of time",
  cause: "A specific process keeps the cpus busy",
  solution: "Find the problamatic process and investigate it."
},
{
  id: 2,
  issue: 'Request timed out',
  summary: 'When contacting to a server, the request times out',
  date: '01/08/2021',
  subject: "Network",
  reporter: "Israel",
  problem: "Request timed out",
  symptoms: "There is a ping conectivity. When contacting with protocol port ",
  cause: "The traffic is blocked by a firewall",
  solution: "Use netfix to find the policies that blocks the traffic. And contact policy_admin team in order to open the rules"
}];

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: theme.spacing(7)
  },
  tableHeader: {
  },
  action: {
    color: theme.palette.primary.contrastText
  }
}));

const columns = [
  {
    field: "issue",
    title: "Issue",
    render: row => <div><div style={{ fontWeight: 700 }}>{row.title}</div>{row.summary}</div>
  },
  {
    field: "subject",
    title: "Subject",

  },
  {
    field: "date",
    title: "Date",
  },

  {
    field: "reporter",
    title: "Reporter",
  },
  {
    field: "problem",
    title: "problem",
    hidden:true,
    export:true,
  },
  {
    field: "symptoms",
    title: "symptoms",
    hidden:true,
    export:true,
  },
  {
    field: "cause",
    title: "cause",
    hidden:true,
    export:true,
  },
  {
    field: "solution",
    title: "solution",
    hidden:true,
    export:true,  },
];

function SolutionKnowledge(props) {
  let currTheme = useTheme()
  let classes = useStyles()

  return (<MaterialTable
    className={classes.iconsColors}
    title="Solution knowledge"
    columns={columns}
    options={{
      exportButton: true
    }}
    components={{
      Toolbar: props => (
        <div className={classes.tableHeader}>
          <MTableToolbar {...props} className={classes.actions} />
        </div>

      )
    }}
    data={data ? data : []}
    styles={{
      backgroundColor: currTheme.palette.primary.main
    }}
    detailPanel={(rowData ) => (<SolutionFlow {...rowData }></SolutionFlow>)}
    onRowClick={(event, rowData, togglePanel) => togglePanel()}
  />
  );

}
export default SolutionKnowledge;