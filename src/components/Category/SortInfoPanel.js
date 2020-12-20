import React from 'react';
import Select from 'react-select';
const sortByOptions = [
  { value: 'newest', label: 'Newest' },
  { label: 'Price (Low to High)', value: 'price-asc' },
  { label: 'Price (High to Low)', value: 'price-desc' },
];
export default function SortInfoPanel({ sortBy, setSortBy }) {
  const handleSortByChange = selectedValue => {
    setSortBy(selectedValue);
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 0.3fr' }}>
      <div></div>
      <Select
        isSearchable={false}
        options={sortByOptions}
        value={sortBy}
        onChange={handleSortByChange}
        placeholder="Sort By"
      />
    </div>
  );
}
