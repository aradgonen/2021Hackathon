import React, { useState } from "react";
import CoursesView from './courses_view';
import { useDispatch, useSelector } from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { useEffect } from "react";


import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { Subject } from "@material-ui/icons";





const SubjectPage = (props) => {

    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }))(Tooltip);


    //let courses = useSelector((state) => state.courses);


    // all subjects with no parents in the db

    const materials = [{
        title: "Networking",
        file_path: "/benny/is/the/networking/god.pdf",
        description: "Benny is the networking god - and that is in fact - true!",
        subject: "10"
    },
    {
        title: "L2 and other stuff",
        file_path: "/benny/is/the/networking/god.pdf",
        description: "L3 and other stuff",
        subject: "6"
    },
    {
        title: "Layer 3 and more fun",
        file_path: "/benny/is/the/networking/god.pdf",
        description: "Layer 2 and more fun",
        subject: "7"
    },
    {
        title: "Layer 2 is the best!",
        file_path: "/benny/is/the/networking/god.pdf",
        description: "Benny is the networking god - and that is in fact - true!",
        subject: "6"
    }]

    const courses = [{
        title: "Networking",
        subject: "10",
        own_group: "network"
    },
    {
        title: "L2 and other stuff",
        subject: "6",
        own_group: "network"
    },
    {
        title: "Layer 3 and more fun",
        subject: "7",
        own_group: "network"
    },
    {
        title: "Layer 2 is the best!",
        subject: "6",
        own_group: "network"
    }]

    const getMaterial = (currentSubject) => {
        let addedMaterial = false
        const relevantMaterials = []
        materials.forEach(material => {
            if (material.subject === currentSubject.id) {
                addedMaterial = true
                relevantMaterials.push(material)
            }
        });

        if (addedMaterial === false)
            return [{
                title: "...",
                file_path: "",
                description: "",
                subject: "0"
            }]

        return relevantMaterials
    }

    const getCourses = (currentSubject) => {
        let addedCourses = false
        const relevantCourses = []
        courses.forEach(course => {
            if (course.subject === currentSubject.id) {
                addedCourses = true
                relevantCourses.push(course)
            }
        });

        if (addedCourses === false)
            return [{
                title: "...",
                subject: "0",
                own_group: "0"
            }]

        return relevantCourses
    }

    const subjects = [
        {
            id: "1",
            title: "storage",
            children: [{
                title: "basic Storage",
                children: []
            }, {
                id: "2",
                title: "Emc Storage",
                children: []
            }, {
                id: "3",
                title: "NetApp Storage",
                children: [{
                    id: "14",
                    title: "NetApp Virtual Servers",
                    children: []
                },{
                    id: "15",
                    title: "NetApp Ontapp Management",
                    children: []
                }]
            }]
        },
        {
            id: "4",
            title: "Network",
            children: [{
                title: "basic Network",
                children: []
            }, {
                id: "5",
                title: "Layers",
                children: [{
                    id: "6",
                    title: "L2",
                    children: []
                }, {
                    id: "7",
                    title: "L3",
                    children: []
                }]
            }, {
                id: "8",
                title: "Routing",
                children: [{
                    id: "9",
                    title: "OSPF",
                    children: []
                }, {
                    id: "10",
                    title: "Advanced Routes",
                    children: []
                }]
            }]
        }, {
            id: "11",
            title: "Exchange",
            children: [{
                id: "12",
                title: "Basic Exchange",
                children: []
            },
            {
                id: "13",
                title: "Advanced Outlook",
                children: []
            }]
        }
    ]
    //let searchTerm = useSelector((state) => state.search);
    //console.log(searchTerm);

    const [selectedSubject, selectedSubjectHandler] = useState({ id: 0, title: "Subject", children: [] })
    const [currentMaterials, MaterialHandler] = useState([{
        title: "...",
        file_path: "",
        description: "",
        subject: "0"
    }])
    const [currentCourses, CoursesHandler] = useState([{
        title: "...",
        subject: "0",
        own_group: "0"
    }])

    const changeSelectedSubject = (currentSubject) => {
        selectedSubjectHandler(currentSubject)
        MaterialHandler(getMaterial(currentSubject))
        CoursesHandler(getCourses(currentSubject))
    }


    const subjectsToTree = (subject) => {
        console.log(subject.title)
        if (subject.children === []) {
            return (
                <TreeItem nodeId={subject.id} label={subject.title} onClick={() => changeSelectedSubject(subject)}>
                </TreeItem>
            );
        }
        else {
            const subjectTree = []
            for (let subjectIndex in subject.children) {
                subjectTree.push(subjectsToTree(subject.children[subjectIndex]))
            }
            return (
                <TreeItem nodeId={subject.id} label={subject.title} onClick={() => changeSelectedSubject(subject)}>
                    {subjectTree}
                </TreeItem>
            )
        }
    }

    const materialsToCards = () => {
        const materialCards = currentMaterials.map(material => {
            return (
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="body2" component="p">
                                {material.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {material.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <dev to={material.file_path}>
                                <a href="https://standards.incits.org/apps/group_public/download.php/81969/T11-2016-291v0.pdf" download>Go To Material</a>
                            </dev>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })

        return materialCards
    }

    const courseToCards = () => {
        const courseCards = currentCourses.map(course => {
            return (
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="body2" component="p">
                                {course.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {course.own_group}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={"/"}>
                                <Button size="small">Go To Course</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            )
        })

        return courseCards
    }

    let subjectIndexToShow = 1
    if(window.location.href.indexOf("2") !== -1) {
        subjectIndexToShow = 0
    }
    if(window.location.href.indexOf("4") !== -1) {
        subjectIndexToShow = 2
    }


    return (
        // <CoursesView courses={courses}/>
        <div>
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                multiSelect
            >{subjectsToTree(subjects[subjectIndexToShow])}</TreeView>
            <Typography component="h2" variant="display4" gutterBottom>
                {selectedSubject.title}
            </Typography>
            <Typography component="h3" variant="display4" gutterBottom>
                Material
            </Typography>
            <Grid container spacing={3}>
                {materialsToCards()}
            </Grid>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Typography component="h2" variant="display4" gutterBottom>
                Course
            </Typography>
            <Grid container spacing={3}>
                {courseToCards()}
            </Grid>
        </div>


    );
};

export default SubjectPage;
