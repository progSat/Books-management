import Practice from "./Practice";
import BookForm from "./components/books/BookForm";
import BooksList from "./components/books/BooksList";
//import booksdata from "./components/books/bookdata";
import MenuList from "./components/MenuList/MenuList";
import defaultInstance from "./axiosApi/config";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";

function App() {
  const [bookList, setBookList] = useState("No books listed");

  useEffect(() => {
    async function fetchList() {
      try {
        let list = (await defaultInstance.get("/students")).data;
        let newList = list.map((item) => ({
          ...item,
          img: "\\446600ab0f1710ef26a5b777d0f5e8a0.jpg",
        }));
        setBookList(newList);
      } catch (error) {
        if (!error.response) {
          console.log("error connecting to server");
        }
      }
    }
    fetchList();
  }, []);

  let updateList = async (bookName, Author) => {
    let newBook = {
      id: bookList.at(-1).id + 1,
      img: bookList.at(-1).img,
      name: bookName,
      author: Author,
    };

    try {
      await defaultInstance.post("/students", newBook);
      setBookList((currentState) => [...currentState, newBook]);
      history.push("/view-books");
    } catch (error) {
      if (!error.response) {
        console.log("error connecting to server");
      }
    }
  };

  let deleteBook = async (id) => {
    try {
      await defaultInstance.delete(`/students/${id}`);
      let newlist = bookList.filter((book) => book.id !== id);
      setBookList((currentState) => [...newlist]);
      history.push("/view-books");
    } catch (error) {
      if (!error.response) {
        console.log("error connecting to server");
      }
    }
  };

  return (
    <>
      <Container fluid className="text-center bg-dark-subtle p-3 mb-3" tag="h1">
        Books List
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <MenuList />
          </Col>
          <Col md="8">
            <Routes>
              <Route path="/" exact element={<Practice />} />
              <Route
                path="/add-book"
                exact
                element={<BookForm updateBookList={updateList} />}
              />
              <Route
                path="/view-books"
                exact
                element={
                  <BooksList bookList={bookList} onDelete={deleteBook} />
                }
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
