import React from 'react';
import "./SearchBar.css";
import {FaSearch} from 'react-icons/fa'
import {BsMicFill} from 'react-icons/bs'
import SearchList from './SearchList';
import { useState } from 'react';
function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
const [SeachListA, setSeachList] = useState(false);
const TitleArray=["video1","video2","Animation Video","Movies"].filter(q=>q.includes(searchQuery))
  return (
    <div className = "SearchBar_Container">
        <div className='SearchBar_Container2'>
            <div className='search_div'>
                <input type = "text" className = "ibox_searchbar" placeholder='Search'
                onChange = {e=>setSearchQuery(e.target.value)}
                value={searchQuery}
                onClick ={e=>setSeachList(true)}
                />

                <FaSearch className = "searchicon" />
                <BsMicFill className = "Mic_SearchBar" />
                {searchQuery&& SeachListA&& 
                    <SearchList 
                    setSearchQuery = {setSearchQuery}
                    TitleArray= {TitleArray}/>
                }
            </div>
        </div>
    </div>
  )
}

export default SearchBar