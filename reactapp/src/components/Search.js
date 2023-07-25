import React ,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './Search.css'
import axios  from 'axios';


function Search() {
  const [isOpen, setIsOpen] = useState(false);
    const handleOpenPopup = () => {
      setIsOpen(true);
    };
    const handleClosePopup = () => {
      setIsOpen(false);
    };
    const counter=useSelector((state)=>state.counter);
    const increment =()=>{
      dispatch({type:"INC"})
    }
    const dispatch=useDispatch();
    const [playlists, setPlaylists] = useState([]);
    const [playlistName, setPlaylistName] = useState('');
    const handleCreatePlaylist = () => {
    if (playlistName.trim() !== '') {
      const newPlaylist = { name: playlistName };
      setPlaylists([...playlists, newPlaylist]);
      setPlaylistName('');
    }
    };
    const handlePlaylistNameChange = (event) => {
      setPlaylistName(event.target.value);
    };
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/getsong')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  },[]);
  return (
    <div><h1>Create your own Playlist<button className='Bt1' onClick={handleOpenPopup}>+</button></h1>
        <div>
        </div>
        <div className='playlist'>
               <div className='ullist'>
                  {playlists.length === 0 ? (
                      <p style={{padding:'10px',marginLeft:'10px'}}>No playlists created yet</p>
                  ) : (
                      <ul className='newlists'>
                          {playlists.map((playlist, counter) => (
                          <li key={counter}><button  className='playbutton'  onClick='' >{counter+1} {playlist.name}</button></li>
                        ))}
                      </ul>
                  )}
                </div>
              </div>
              {isOpen && (
              <div className="popup-container">
                <div className="popup-content">
                  <h4>PlayList Name</h4>
                    <form className='formpop'>
                      <input type="text" value={playlistName} onChange={handlePlaylistNameChange} /><br />
                        <button type="button" onClick={handleCreatePlaylist} onClickCapture={increment}>Create</button>
                        <button onClick={handleClosePopup}>Close</button>
                    </form>
                </div>
              </div>
            )}
    </div>
  )
}

export default Search;