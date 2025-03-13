import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    links.map((link) => (
      <ListGroup id="wd-account-navigation">
        <ListGroup.Item key={`/Kambaz/Account/${link}`} as={Link} to={`/Kambaz/Account/${link}`}
          className={`${pathname.includes(link) ? "text-black" : "text-danger"} border border-0`}>
          {link}
        </ListGroup.Item>
      </ListGroup>
    ))
  );
}