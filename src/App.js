import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked';
import './App.css';

class App extends React.Component {

  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }


  render() {

    const markdown = marked(this.state.text, { breaks: true })

    return (
      <div>
        <h2 className="text-center m-4 text-white">Convert Your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <h6 className="text-center text-white">Enter your markdown:</h6>
            <textarea className="form-control p-2" id="editor" value={this.state.text} onChange={this.handleChange}></textarea>
          </div>
          <div className="col-6" >
            <h6 className="text-center text-white">See the result:</h6>
            <div className="preview rounded p-2" id="preview" dangerouslySetInnerHTML={{__html: markdown}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
