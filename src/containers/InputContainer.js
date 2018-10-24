import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------------------------------
//                      STATELESS COMPONENTS
// ------------------------------------------------------------------

import Input from '../components/Input.js';

// ------------------------------------------------------------------
//                        CONTAINER COMPONENT
// ------------------------------------------------------------------

export default class InputContainer extends Component {

  // generates a stack of JSX components
  generateInputs (counter) {
    let jsxQueue = [];
    let iterator = 0;

    // generate counter number of Input Instances, and save
    // them in a renderable queue
    while (iterator++ < counter) {
      // this generates an instance of the Input Component
      let inputComp =
        <Input
          uniqueID={String(iterator)}
          key={iterator}
          counter={counter}
          title={this.props.title}
          value={this.props.values[iterator]}
          handleChange={this.props.handleChange}
          handleFocus={this.props.handleFocus}
          handleBlur={this.props.handleBlur}
          handleDelete={this.props.handleDelete}
        />
      // push the instance into the beginning of the stack
      jsxQueue.push(inputComp);
    }

    return jsxQueue;
  }

  render () {

    return (
      <div className='inputGroup'>
        {this.generateInputs(this.props.counter)}
      </div>
    );
  }
}

InputContainer.propTypes = {
  uniqueID: PropTypes.string,
  counter: PropTypes.number,
  values: PropTypes.array,
  title: PropTypes.string,
  handleChange: PropTypes.func,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  handleDelete: PropTypes.func
}