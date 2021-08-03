import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import {Card,CardColumns} from 'react-bootstrap'

const BoardAdmin = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getAllUsers().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <CardColumns>
        {content.map(user => {
            return (
              <Card className="ml-auto mr-auto text-center" key={user.id+"_Card"}>  
              <Card.Body key = {user.id+"_CardBody"}>
                <Card.Title>{user.username}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted" key={user.id+"CardSubtitle"}>{user.email}</Card.Subtitle>
                  <Card.Footer className="mb-2 text-muted" key={user.id+"CardFooter"}>{user.roles.map(role => {return role.name})}</Card.Footer>
              </Card.Body>
            </Card>
            );
        })}
        </CardColumns>
      </header>
    </div>
  );
};

export default BoardAdmin;
