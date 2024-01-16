// AutocompleteChips.js

import React, { useState } from 'react';
import './AutocompleteChips.css';

const AutocompleteChips = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  
  const allItems = [{
    id : 1,
    name : 'Soham Bhardawaj',
    profile_pic : 'https://picsum.photos/id/1/200',
    email : 'soham.bhardwaj@zepto.com'
  }, {
    id : 2,
    name : 'Amit Rao',
    profile_pic : 'https://picsum.photos/id/2/200',
    email : 'soham.bhardwaj@zepto.com'
  }, {
    id : 3,
    name : 'Arun Bhardawaj',
    profile_pic : 'https://picsum.photos/id/3/200',
    email : 'soham.bhardwaj@zepto.com'
  }, {
    id : 4,
    name : 'Suvam Rao',
    profile_pic : 'https://picsum.photos/id/4/200',
    email : 'soham.bhardwaj@zepto.com'
  }, {
    id : 5,
    name : 'Varun Bhardawaj',
    profile_pic : 'https://picsum.photos/id/5/200',
    email : 'soham.bhardwaj@zepto.com'
  }, {id : 6,
    name : 'Sipra Rao',
    profile_pic : 'https://picsum.photos/id/6/200',
    email : 'soham.bhardwaj@zepto.com'
  }, {
    id : 7,
    name : 'Akshat Bhardawaj',
    profile_pic : 'https://picsum.photos/id/7/200',
    email : 'soham.bhardwaj@zepto.com'
  }];
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };



  const handleItemClick = (item) => {
    setSelectedItems([...selectedItems, item]);
    setInputValue('');
  };

  const handleChipRemove = (removedItem) => {
    const updatedItems = selectedItems.filter((item) => item.id !== removedItem.id);
    setSelectedItems(updatedItems);
  };

  const filteredItems = allItems.filter(
    (item) => !selectedItems.find((value)=> item.id == value.id) && item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder="Type to search..."
      />
      {isInputFocused && (
        <ul className="autocomplete-list">
        {filteredItems.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item)}>
            <div className='item'>
              <img src={item.profile_pic} className='profile_pic' />
              <a className='name'>{item.name}</a> 
              <a className='email' >{item.email}</a>
            </div>
          </li>
        ))}
      </ul>
      )}
      
      <div className="chip-container">
        {selectedItems.map((item) => (
          <div key={item.id} className="chip">
             
            <div className='item-chip'>
              <img src={item.profile_pic} className='profile_pic' />
              <a className='name'>{item.name}</a>
              <img src = "https://icons8.com/icon/46/close" onClick={() => handleChipRemove(item)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutocompleteChips;


