import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherInfo } from '../actions/index';

class SearchBar extends Component {

  constructor (props) {
    super(props);
    this.state = ({ term : "" });
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange (event) {
    this.setState({ term : event.target.value });
  }

  onFormSubmit (event) {
    event.preventDefault();
    this.props.fetchWeatherInfo(this.state.term);
    this.setState({ term: '' });
  }

  render () {
    return (
      <form onSubmit={ this.onFormSubmit } className="input-group">
        <input
          placeholder="Get a five days forcast for your city"
          className="form-contorl"
          value={ this.state.term }
          onChange={ this.onInputChange }
        />
        <span className="input-group-btn" >
          <button type="submit" className="btn btn-secondary">submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( {fetchWeatherInfo}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
