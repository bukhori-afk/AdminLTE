//App.js

import React, { Component } from 'react';
import Header from './component/Header';
import SideBar from './component/SideBar';
import Content from './component/Content';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <SideBar/>
        <Content/>
      </div>
    );
  }
}
export default App;