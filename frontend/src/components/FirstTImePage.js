import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

class FirstTimePage extends React.Component {

    render() {
        
        let firstPage = <Modal size="lg" show={true} centered>
            <Modal.Header>
              <Modal.Title>Welcome to SimpliDC V1.0.0!</Modal.Title>
            </Modal.Header>
            <Modal.Body text-align = "center">
                <p className="text-primary font-weight-bold">Welome to SimpliDC!</p>
                <p className="text-primary font-weight-bold">The best DCIM in Mamram!</p>
                <br/>
                <p className="text-info">Here you can look up the physical Components that you need</p>
                <p className="text-info">and even see their connections around the Data Center</p>
                <br/>
                <p class="text-success">We want to give a HUGE thanks to Ophir and Zari for beliving in us!</p>
                <br/>
                <p class="text-success">A speacial thanks to Ofer Matoki, for being our main client</p>
                <p class="text-success">and for pushing this project to reach it's goals</p>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.hide}>
                      Close
                </Button>
            </Modal.Footer>
        </Modal>

        return (firstPage)
    }
}

export default FirstTimePage;