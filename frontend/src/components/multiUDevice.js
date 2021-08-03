import React from 'react';
import UDetails from './UDetails';
import UConnectionInfo from './UConnectionInfo';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import { Fragment } from 'react';
import { Divider, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
 

export default function MultiUDevice({u, upperUNumber, bottomUNumber, type, handleModal,  numberOfU, rack_id}) {
    const TopU = withStyles((theme) => ({
        root: {
            borderBottom: "none"
        },
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);

      const SideTableCell = withStyles((theme) => ({
        body: { 
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
      }))(TableCell);  

      const useStyles = makeStyles({
        table: {   
        },
        Card:{
          minWidth: '12%',
          maxWidth: '12%',
          minHeight: 350,
          raised: true
        },
        Typography:{
          noWrap: false,
          maxWidth: '12%',
          display: 'inline',
          align: 'center',
          'writing-mode': 'vertical-rl',
          // 'text-orientation': 'upright'
        },
        UCSCard:{
          minWidth: '49%',
          maxWidth: '49%',
          minHeight: 80,
          raised: true
        },
        UCSTypography:{
          noWrap: false,
          maxWidth: '12%',
          display: 'inline',
          align: 'center',
        },
        emptyUCSCard:{
          minWidth: '49%',
          maxWidth: '49%',
          minHeight: 80,
          raised: true,
          backgroundColor: "grey"
        },
        emptyCard:{
          minWidth: '12%',
          maxWidth: '12%',
          minHeight: 350,
          raised: true,
          backgroundColor: "grey"
        }
      });


  const classes = useStyles();

  function MultiUDeviceCreation() {
    let rowContent = new Array(numberOfU);
  
    if(u.enclosureType == "HPE Enclosure") {
      rowContent[0] =  
          <TableRow key={91+"hp"+rack_id}>
              <SideTableCell align="center" width="3%">{upperUNumber}</SideTableCell>
              <TopU rowSpan={numberOfU} align="center" ><Typography onClick={() => handleModal(<UDetails rack_id={rack_id} uData={{'enclosureType':u.enclosureType,'osVersion':u.osVersion}} title={"Detailed Info"}/>)}>{u.name}</Typography>

                <Grid container alignItems="center" className={classes.root}>
                  <Card variant="outlined" className={u.serverNodes[0].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[0].name ? u.serverNodes[0].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[1].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[1].name ? u.serverNodes[1].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[2].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[2].name ? u.serverNodes[2].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[3].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[3].name ? u.serverNodes[3].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[4].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[4].name ? u.serverNodes[4].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[5].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[5].name ? u.serverNodes[5].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[6].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[6].name ? u.serverNodes[6].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[7].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[7].name ? u.serverNodes[7].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                </Grid>
                <Grid container alignItems="center" className={classes.root}>
                  <Card variant="outlined" className={u.serverNodes[8].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[8].name ? u.serverNodes[8].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[9].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[9].name ? u.serverNodes[9].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[10].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[10].name ? u.serverNodes[10].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[11].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[11].name ? u.serverNodes[11].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[12].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[12].name ? u.serverNodes[12].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[13].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[13].name ? u.serverNodes[13].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[14].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[14].name ? u.serverNodes[14].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                  <Card variant="outlined" className={u.serverNodes[15].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[15].name ? u.serverNodes[15].name : "Empty"}</Typography></CardContent></Card>
                  <Divider orientation="vertical"  />
                </Grid>
              </TopU>
              <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber}</SideTableCell>

          </TableRow>
    }
    else if(u.enclosureType == "IBM Enclosure"){
      rowContent[0] =
      <TableRow key={"ibm"+rack_id}>
      <SideTableCell align="center" width="3%">{upperUNumber}</SideTableCell>
      <TopU rowSpan={numberOfU} align="center" ><Typography onClick={() => handleModal(<UDetails rack_id={rack_id} uData={{'enclosureType':u.enclosureType,'osVersion':u.osVersion}} title={"Detailed Info"}/>)}>{u.name}</Typography>

        <Grid container alignItems="center" className={classes.root}>
          <Card variant="outlined" className={u.serverNodes[0].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[0].name ? u.serverNodes[0].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={u.serverNodes[1].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[1].name ? u.serverNodes[1].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={u.serverNodes[2].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[2].name ? u.serverNodes[2].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={u.serverNodes[3].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[3].name ? u.serverNodes[3].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={u.serverNodes[4].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[4].name ? u.serverNodes[4].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={u.serverNodes[5].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[5].name ? u.serverNodes[5].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={u.serverNodes[6].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[6].name ? u.serverNodes[6].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
          <Card variant="outlined" className={u.serverNodes[7].name ? classes.Card : classes.emptyCard}><CardContent><Typography className={classes.Typography}>{u.serverNodes[7].name ? u.serverNodes[7].name : "Empty"}</Typography></CardContent></Card>
          <Divider orientation="vertical"  />
        </Grid>
      </TopU>
      <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber}</SideTableCell>

  </TableRow>
    }
    else if(u.enclosureType == "Cisco UCS Enclosure"){
      rowContent[0] =  
      <TableRow key={"ucs"+163+"id"+rack_id}>
          <SideTableCell align="center" width="3%">{upperUNumber}</SideTableCell>
          <TopU rowSpan={numberOfU} align="center" ><Typography onClick={() => handleModal(<UDetails rack_id={rack_id} uData={{'enclosureType':u.enclosureType,'osVersion':u.osVersion}} title={"Detailed Info"}/>)}>{u.name}</Typography>

            <Grid container alignItems="center" className={classes.root}>
              <Card variant="outlined" className={u.serverNodes[0].name ? classes.UCSCard : classes.emptyUCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[0].name ? u.serverNodes[0].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
              <Card variant="outlined" className={u.serverNodes[1].name ? classes.UCSCard : classes.emptyUCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[1].name ? u.serverNodes[1].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
            </Grid>
            <Grid container alignItems="center" className={classes.root}>
              <Card variant="outlined" className={u.serverNodes[2].name ? classes.UCSCard : classes.emptyUCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[2].name ? u.serverNodes[2].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
              <Card variant="outlined" className={u.serverNodes[3].name ? classes.UCSCard : classes.emptyUCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[3].name ? u.serverNodes[3].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
            </Grid>
            <Grid container alignItems="center" className={classes.root}>
              <Card variant="outlined" className={u.serverNodes[4].name ? classes.UCSCard : classes.emptyUCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[4].name ? u.serverNodes[4].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
              <Card variant="outlined" className={u.serverNodes[5].name ? classes.UCSCard : classes.emptyUCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[5].name ? u.serverNodes[5].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
            </Grid>
            <Grid container alignItems="center" className={classes.root}>
              <Card variant="outlined" className={u.serverNodes[6].name ? classes.UCSCard : classes.emptyUCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[6].name ? u.serverNodes[6].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
              <Card variant="outlined" className={u.serverNodes[7].name ? classes.UCSCard : classes.emptyUCSCard}><CardContent><Typography className={classes.UCSTypography}>{u.serverNodes[7].name ? u.serverNodes[7].name : "Empty"}</Typography></CardContent></Card>
              <Divider orientation="vertical"  />
            </Grid>
          </TopU>
          <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber}</SideTableCell>

      </TableRow>
    }
    else{
      rowContent[0] =
          <TableRow key={196+"id"+rack_id}>
          <SideTableCell align="center" width="3%">{upperUNumber}</SideTableCell>
          <TopU rowSpan={numberOfU} align="center" onClick={() => handleModal(<UDetails rack_id={rack_id} uData={u} title={"Detailed Info"}/>)}>{u.name}</TopU>

          <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber}</SideTableCell>

          </TableRow>

    }
      rowContent[rowContent.length - 1] =  
          <TableRow key={204+"id"+rack_id}>
              <SideTableCell align="center" width="3%">{bottomUNumber}</SideTableCell>
              <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{bottomUNumber}</SideTableCell>

          </TableRow>    
      
      // for each U - between the Top and Bottom (not include them) create the rows
      for (let rowIndex = 1; rowIndex < numberOfU -1 ; rowIndex++) {
          rowContent[rowIndex] =  
          <TableRow key={212+"id"+rowIndex}>
              <SideTableCell align="center" width="3%">{upperUNumber - rowIndex}</SideTableCell>
              <SideTableCell align="center" width="3%" onClick={() =>handleModal(<UConnectionInfo uData={u} title={"Connection Info"}/>)}>{upperUNumber - rowIndex}</SideTableCell>

          </TableRow>    
      }

    return (
      <Fragment>{rowContent}</Fragment>
    );
    }

  return (
      <MultiUDeviceCreation></MultiUDeviceCreation>
  );
}