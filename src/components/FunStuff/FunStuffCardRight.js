import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaYoutube } from "react-icons/fa";


function FunStuffCardRight(props) {
  return (
    <Card className="funstuff-card-view-right">
      <Card.Img variant="fun" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <div className="project-button-container">
        {props.Link && (
          <Button variant="primary" href={props.Link} target="_blank">
            <FaYoutube /> Watch here!
          </Button>
        )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default FunStuffCardRight;