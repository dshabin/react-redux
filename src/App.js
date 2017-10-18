import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/book-list.js'
import BookDetail from './containers/book-detail.js'
class App extends React.Component {
  render() {
    return (
      <div>
      <BookList/>
      <BookDetail/>
      </div>
    );
  }
}

export default App;
