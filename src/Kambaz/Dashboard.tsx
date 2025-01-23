import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2222/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/java-logo.png" width={200} />
            <div>
              <h5> CS2222 Java 4 Dummies </h5>
              <p className="wd-dashboard-course-title">
                Intro to Java  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/whaling.jpg" width={200} />
            <div>
              <h5> GAME4550 Let's Go Whaling! </h5>
              <p className="wd-dashboard-course-title">
                Effective Monetization in Video Games  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3200/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/scrum.jpg" width={200} />
            <div>
              <h5> CS3200 SCRUM 101 </h5>
              <p className="wd-dashboard-course-title">
                Navigaating meetings in a corporate environment.  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2610/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/mantisshrimp.jpg" width={200} />
            <div>
              <h5> BIO2610 Anatomy of Mantis Shrimp </h5>
              <p className="wd-dashboard-course-title">
                All there is to know about the Mantis Shrimp.  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2611/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/mantisshrimp2.jpg" width={200} />
            <div>
              <h5> BIO2611 Lab for Anatomy of Mantis Shrimp </h5>
              <p className="wd-dashboard-course-title">
                Getting hands on with Mantis Shrimp.  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3650/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/profx.avif" width={200} />
            <div>
              <h5> PSY3650  Clairvoyance</h5>
              <p className="wd-dashboard-course-title">
                Never lose rock, paper, scissors again.  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}