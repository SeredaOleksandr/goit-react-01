const favouriteBooks = [
  { name: 'JS for beginners' },
  { name: 'React basics' },
  { name: 'React Router overview' },
];

const BookList = ({ books }) => (
  <ul>
    {books.map((book, index) => {
      return <li key={index}>{book.name}</li>;
    })}
  </ul>
);

const Book = () => {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
};

export default Book;
