import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function MenuList() {
  return (
    <ListGroup>
      <Link
        className="list-group-item list-group-item-action"
        to="/"
        action="true"
      >
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/view-books"
        action="true"
      >
        View Books
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="/add-book"
        action="true"
      >
        Add Book
      </Link>
    </ListGroup>
  );
}

export default MenuList;
