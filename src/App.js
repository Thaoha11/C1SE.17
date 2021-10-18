
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import React, { Component } from 'react'



class App extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    )
  }
}
export default App;
