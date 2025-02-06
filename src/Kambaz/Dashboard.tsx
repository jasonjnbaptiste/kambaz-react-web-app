import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px "}}>
          <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/reactjs.jpg" width={200} />
            <Card.Body>
              <Card.Title> CS1234 React JS </Card.Title>
              <Card.Text className="wd-dashboard-course-title">
                Full Stack software developer  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px "}}>
          <Card>
          <Link to="/Kambaz/Courses/2222/Home"
                className="wd-dashboard-course-link text-decorations-none text-dark" >
            <Card.Img src="/images/java-logo.png" width={200} />
            <Card.Body>
              <Card.Title> CS2222 Java 4 Dummies </Card.Title>
              <Card.Text className="wd-dashboard-course-title">
                Intro to Java  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px "}}>
          <Card>
          <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link text-decorations-none text-dark" >
            <Card.Img src="/images/whaling.jpg" width={200} />
            <Card.Body>
              <Card.Title> GAME4550 Let's Go Whaling! </Card.Title>
              <Card.Text className="wd-dashboard-course-title">
                Effective Monetization in Video Games  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px "}}>
          <Card>
          <Link to="/Kambaz/Courses/3200/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img src="/images/scrum.jpg" width={200} />
            <Card.Body>
              <Card.Title> CS3200 SCRUM 101 </Card.Title>
              <Card.Text className="wd-dashboard-course-title">
                Navigating meetings in a corporate environment.  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px "}}>
          <Card>
          <Link to="/Kambaz/Courses/2610/Home"
                className="wd-dashboard-course-link text-decorations-none text-dark" >
            <Card.Img src="/images/mantisshrimp.jpg" width={200} />
            <Card.Body>
              <Card.Title> BIO2610 Anatomy of Mantis Shrimp </Card.Title>
              <Card.Text className="wd-dashboard-course-title">
                All there is to know about the Mantis Shrimp.  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px "}}>
          <Card>
          <Link to="/Kambaz/Courses/2611/Home"
                className="wd-dashboard-course-link text-decorations-none text-dark" >
            <Card.Img src="/images/mantisshrimp2.jpg" width={200} />
            <Card.Body>
              <Card.Title> BIO2611 Lab for Anatomy of Mantis Shrimp </Card.Title>
              <Card.Text className="wd-dashboard-course-title">
                Getting hands on with Mantis Shrimp.  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px "}}>
          <Card>
          <Link to="/Kambaz/Courses/3650/Home"
                className="wd-dashboard-course-link text-decorations-none text-dark" >
            <Card.Img src="/images/profx.avif" width={200} />
            <Card.Body>
              <Card.Title> PSY3650  Clairvoyance</Card.Title>
              <Card.Text className="wd-dashboard-course-title">
                Never lose rock, paper, scissors again.  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>
        </Row>
      </div>
    </div>
);}