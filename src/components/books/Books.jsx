import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardText,
  CardFooter,
  Container,
  Button,
} from "reactstrap";

function Book({ bookdata: { id, name, img, author }, onDelete }) {
  let handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <Container>
        <Card className="col-7 m-auto mt-5">
          <CardImg
            className="m-auto"
            src={img}
            alt="book image"
            style={{ height: 230 }}
            width="100%"
            top
          />
          <CardHeader tag="h2">{name}</CardHeader>
          <CardBody>
            <CardText>{author}</CardText>
          </CardBody>
          <CardFooter>
            <Container className="text-center">
              <Button color="info" className="me-3" type="button">
                update
              </Button>
              <Button color="warning" type="button" onClick={handleDelete}>
                delete
              </Button>
            </Container>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}

export default Book;
