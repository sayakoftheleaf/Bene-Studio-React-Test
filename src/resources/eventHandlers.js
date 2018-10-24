function handleSingleInput (event) {
  let inputValue = String(event.target.value);
  let index = Number(event.target.id);
  let values = this.state.values;

  values[index] = inputValue;
  this.setState({
    values
  })
}

function handleSingleDelete (event) {
  event.preventDefault();

  let uniqueID = Number(event.target.id);
  let counter = this.state.counter;
  let values = this.state.values;

  // If it is the first element, don't delete the 
  // element. Instead refresh the element and remove
  // the delete button
  if (counter === 1) values[uniqueID] = '';
  else {
    values.splice(uniqueID, 1)
    counter--;
  }

  this.setState({
    counter,
    values
  })
}

function handleFocus (event) {
  let uniqueID = event.target.id;
  let counter = this.state.counter;
  let values = this.state.values;

  if (Number(uniqueID) === counter) {
    counter++;
    values.push('')
  }

  this.setState({
    counter,
    values
  })
}

function handleBlur (event) {
  let inputValue = String(event.target.value);
  let counter = this.state.counter;
  let uniqueID = Number(event.target.id);
  let values = this.state.values;

  // if the second to last field is left empty, then
  // delete the last empty field that was added on focus
  if (uniqueID === counter - 1 && inputValue === '') {
    counter--;
    values.pop();
  }

  this.setState({
    counter,
    values
  })
}

// returns an array without the first and the last elements
function trimValues () {
  let returnValues = this.state.values.map(x => x);
  returnValues.shift();
  returnValues.pop();

  return returnValues;
}

function handleFormSubmit (localValues, event) {
  event.preventDefault();

  console.log(localValues);
}

function handleClearForm (event) {
  event.preventDefault();
  let counter = 1;
  let values = ['dummy', '']

  this.setState({
    counter,
    values,
  })  
}

exports.handleBlur = handleBlur;
exports.trimValues = trimValues;
exports.handleFocus = handleFocus;
exports.handleClearForm = handleClearForm;
exports.handleFormSubmit = handleFormSubmit;
exports.handleSingleInput = handleSingleInput;
exports.handleSingleDelete = handleSingleDelete;
