export function selectBook(book){
  //an object with a type property
  return {
    type : 'BOOK_SELECTED',
    payload : book
  };
}
