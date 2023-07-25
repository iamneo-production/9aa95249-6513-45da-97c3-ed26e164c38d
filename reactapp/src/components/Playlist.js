import React, { useState } from 'react';
import './Playlist.css';
import Content from './Content';
const Playlist = (onSearch) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <div className="new-playlist">

     <div>
      <form className="search-form" onSubmit={''}>
      <input type="text"  placeholder="What do you want to Listen to ?"  value={searchTerm} onChange={handleInputChange} />  
      </form>
      <Content searchTerm={searchTerm} />
    </div>
    </div>
  );
};
export default Playlist;