import { Button, Container } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

function Practice() {
  const notificationHandler = () => {
    toast.info("Hello World button clicked");
  };

  return (
    <>
      <ToastContainer />
      <Container fluid className="bg-info text-dark p-5">
        <Container className="bg-primary p-5 text-center">
          <h1 className="display-4 fw-bold text-center">
            hello world! Jumbotron
          </h1>
          <Button color="info" onClick={notificationHandler}>
            first button
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default Practice;
