"use client";
import React, { useState } from 'react';

// Disease categories based on JSON data
const categories = [
  { id: 1, name: "malaria" },
  { id: 2, name: "diarrhea" },
  { id: 3, name: "tuberculosis" },
  { id: 4, name: "pneumonia_bacterial_infections" },
  { id: 5, name: "parasitic_infections" },
  { id: 6, name: "family_planning" },
  { id: 7, name: "nutrition_supplements" },
  { id: 8, name: "equipments" },
];

// Row Component for each radio button
const Row = ({ id, name, handleChange, selected }) => (
  <div className='flex justify-start items-center gap-4 w-[350px]' key={id}>
    <input
      type="radio"
      name="category"
      className='radio radio-success'
      onChange={() => handleChange(id)} // Trigger filter change
      checked={selected === id} // Check if it's selected
    />
    <span>{name}</span>
  </div>
);

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  // Handles updating the selected category
  const handleChange = (id) => {
    setSelectedCategory(id);
  };

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex gap-8'>
        {categories.slice(0, 4).map(c => (
          <Row
            key={c.id}
            id={c.id}
            name={c.name}
            handleChange={handleChange}
            selected={selectedCategory}
          />
        ))}
      </div>
      <div className='flex gap-8'>
        {categories.slice(4).map(c => (
          <Row
            key={c.id}
            id={c.id}
            name={c.name}
            handleChange={handleChange}
            selected={selectedCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
