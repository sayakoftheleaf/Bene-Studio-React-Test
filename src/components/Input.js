import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

const style = theme => ({
  textField: {
    marginLeft: 25,
    marginRight: 25,
  },
})

class Input extends Component {
  render () {

    return (
      <div className='singleInput'>
        <div className='formParts'>
          <div className='deleteButton'>
          {(Number(this.props.uniqueID) !== this.props.counter) &&
            <Button
              className='button'
              id={this.props.uniqueID}
              onClick={this.props.handleDelete}>
              X
            </Button>
          }
          </div>
          <div className='widthWrapper'>
            <TextField
            id={this.props.uniqueID}
            label={this.props.title}
            className='textField'
            fullWidth
            margin='normal'
            type='search'
            name={this.props.uniqueID}
            value={this.props.value}
            onChange={this.props.handleChange}
            onFocus={this.props.handleFocus}
            onBlur={this.props.handleBlur}
            />
          </div>
      </div>
    </div>
    );
  }
}

Input.propTypes = {
  uniqueID: PropTypes.string,
  counter: PropTypes.number,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  handleDelete: PropTypes.func
}

export default withStyles(style)(Input)