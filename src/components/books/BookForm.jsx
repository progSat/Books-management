import { Label, FormGroup, Form, Input, Button, Container } from "reactstrap";

function BookForm({ updateBookList }) {
  let handleSubmit = (e) => {
    e.preventDefault();
    let form = new FormData(e.target);
    //bookname = e.target.elements.name.value
    //author = e.target.elements.author.value
    let bookname = form.get("name");
    let author = form.get("author");
    updateBookList(bookname, author);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input id="name" name="name" placeholder="Book name" type="text" />
      </FormGroup>
      <FormGroup>
        <Label for="author">author</Label>
        <Input
          id="author"
          name="author"
          placeholder="author name"
          type="text"
        />
      </FormGroup>
      <Container className="text-center">
        <Button type="submit" color="info" className="me-3">
          Submit
        </Button>
        <Button type="reset" color="warning">
          Reset
        </Button>
      </Container>
    </Form>
  );
}
export default BookForm;
