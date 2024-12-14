import Book from "./Books";

function BooksList({ bookList, onDelete }) {
  return (
    <>
      {bookList.map((book) => {
        return <Book bookdata={book} key={book.id} onDelete={onDelete} />;
      })}
    </>
  );
}

export default BooksList;
