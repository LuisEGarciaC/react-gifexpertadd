import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  //valor de inpunt inicialmente y su set
  const [inputValue, setInputValue] = useState('');

  //handle para los cambios con el valor
  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  }

  //handle o disparador del evento en el value
  const HandleSumit = (e)=>{
    e.preventDefault();

    if(inputValue.trim().length > 2){
      setCategories( cats => [ inputValue, ...cats ] );
        setInputValue('');
    }

  }
  return (
    <form onSubmit={HandleSumit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange = {handleInputChange}
        />

    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;

