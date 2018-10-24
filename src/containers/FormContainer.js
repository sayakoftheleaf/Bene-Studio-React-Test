import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

// ------------------------------------------------------------------
//                      STATELESS COMPONENTS
// ------------------------------------------------------------------
import InputContainer from './InputContainer.js';

// ------------------------------------------------------------------
//                        HELPER MODULES
// ------------------------------------------------------------------
import handlers from '../resources/eventHandlers.js';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
})

// ------------------------------------------------------------------
//                        CONTAINER COMPONENT
// ------------------------------------------------------------------

class FormContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: 1,
      values: ['dummy', '']
    };

    // this bindings
    this.handleBlur = handlers.handleBlur.bind(this);
    this.handleFocus = handlers.handleFocus.bind(this);
    this.trimValues = handlers.trimValues.bind(this);
    this.handleClearForm = handlers.handleClearForm.bind(this);
    this.handleFormSubmit = handlers.handleFormSubmit.bind(this);
    this.handleSingleInput = handlers.handleSingleInput.bind(this);
    this.handleSingleDelete = handlers.handleSingleDelete.bind(this);
  }

  render () {
    let trimmed = this.trimValues();

    return (
        <div className='wrapper'>
        <div id='textAbove'> Test </div>
        <form
          noValidate
          autoComplete='off'
          className='container'
          onSubmit={this.handleFormSubmit}>
          <InputContainer
            title = 'test attribute'
            counter={this.state.counter}
            values={this.state.values}
            handleChange={this.handleSingleInput}
            handleFocus={this.handleFocus}
            handleBlur={this.handleBlur}
            handleDelete={this.handleSingleDelete}
          />
        </form>
        <div className='bottomButtons'>
            <Button
              id='submitButton'
              className='button'
              variant='contained'
              color='primary'
              onClick={this.handleFormSubmit.bind(this, trimmed)}
              >
              Submit
            </Button>
            <Button
              id='clearButton'
              className='button'
              variant='outlined'
              color='primary'
              onClick={this.handleClearForm}
              >
              Clear
            </Button>
        </div>
      </div>
    )
  }
}

// ------------------------------------------------------------------
//                       PROP-TYPE CHECKING
// ------------------------------------------------------------------

// specify the prop types for the props here
FormContainer.propTypes = {
  counter: PropTypes.number,
  values: PropTypes.array,
  title: PropTypes.string,
  handleChange: PropTypes.func,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  handleDelete: PropTypes.func,
}

export default withStyles(styles)(FormContainer)