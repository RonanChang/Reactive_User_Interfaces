import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import Draggable from "react-draggable";
// import Rnd from "react-rnd";
import MyEditor from "./MyEditor";
import Bookpage from "./Bookpage";
import Homepage from "./Homepage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: []
    };
    this.saveHtml = this.saveHtml.bind(this);
  }

  saveHtml(html) {
    console.log(html);
    const htmlCopy = this.state.html.slice();
    htmlCopy.push({
      label: htmlCopy.length,
      html: html
    });

    this.setState({
      html: htmlCopy
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Homepage} />
          <Route
            path="/bookpage"
            component={props => {
              return <Bookpage html={this.state.html} />;
            }}
          />
          <Route
            path="/editorpage"
            component={props => {
              return <MyEditor saveHtml={this.saveHtml} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
