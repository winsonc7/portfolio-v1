import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoMusicalNotes } from "react-icons/io5";


function FunStuffCardLeft(props) {
  const redirectToRandomLink = () => {
    // Array of 10 links
    const links = [
      "https://www.youtube.com/watch?v=RSXSWpYSoYE",
      "https://www.youtube.com/watch?v=BS0SwRoYAW0",
      "https://www.youtube.com/watch?v=TdVM-6ILous",
      "https://www.youtube.com/watch?v=AWVUp12XPpU",
      "https://www.youtube.com/watch?v=QWiGwQ-9tC4",
      "https://www.youtube.com/watch?v=MKyBwa9Fv6c",
      "https://www.youtube.com/watch?v=vLNLvcBmoqo",
      "https://www.youtube.com/watch?v=W1hyEjZros8",
      "https://www.youtube.com/watch?v=8bb32j3h_QI",
      "https://www.youtube.com/watch?v=s-TwMfgaDC8"
    ];

    // Generate a random index between 0 and 9
    const randomIndex = Math.floor(Math.random() * links.length);

    // Redirect the user to the randomly selected link
    window.location.href = links[randomIndex];
  };

  return (
    <Card className="funstuff-card-view-left">
      <Card.Img variant="fun" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <div className="project-button-container">
        {props.Link === "music" && (
          <Button variant="primary" onClick={redirectToRandomLink}>
            <IoMusicalNotes /> Click here!
          </Button>
        )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default FunStuffCardLeft;
