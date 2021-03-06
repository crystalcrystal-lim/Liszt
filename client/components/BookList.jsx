import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import BookLibrary from './BookLibrary'
import BookSearchBar from './BookSearchBar'
import SearchResults from './SearchResults'
const BookList = (props) => {
  const [result, setResult] = useState([])

  return (
    <div>
      <BookSearchBar setResult={setResult} history={props.history} />
      <Route
        exact
        path='/booklist'
        component={BookLibrary}
        history={props.history}
      />
      <Route
        exact
        path='/booklist/searchresults'
        render={() => <SearchResults result={result} history={props.history} />}
      />
    </div>
  )
}

export default BookList
