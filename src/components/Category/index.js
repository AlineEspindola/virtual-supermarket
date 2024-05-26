import React from 'react';
import './category.css';

function CategoryButton({ text, isActive, onClick }) {
  return (
    <button 
      className={`category-button ${isActive ? 'active' : ''}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CategoryButton;