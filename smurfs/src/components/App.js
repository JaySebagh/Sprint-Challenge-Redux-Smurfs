import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }))
}

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
  };

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => (
          <div>
            <h3>{smurf.name}</h3>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={this.state.smurf.name}
            onChange={this.handleChange}
          />

          <input
            type='text'
            name='age'
            placeholder='age'
            value={this.state.smurf.age}
            onChange={this.handleChange}
          />

          <input
            type='text'
            name='height'
            placeholder='height'
            value={this.state.smurf.height}
            onChange={this.handleChange}
          />
          <button>Add a Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);