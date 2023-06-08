import React from 'react'
import LeftSidebar from '../LeftSideBar/LeftSidebar'
import './WHLcss.css';
import WHLVideoList from './WHLVideoList';
import { useSelector } from 'react-redux';


function WHL({page,videoList}) {
  const CurrentUser = useSelector(state=>state?.currentUserReducer)
  return (
    <div className = 'Container_Pages_App'>
    <LeftSidebar />
    <div className="Continer2_Pages_App">
    <p className='container_whl'>
        <div className='box_WHL leftside_whl'>
            <b>Your {page} Shown here</b>
            {
              page==="History"&&
              <div className='clear_History_btn'>
                Clear History
            </div>
            }
        </div>
        <div className="rightside_whl">
            <h1>{page}</h1>
            <div className="whl_list">
<WHLVideoList CurrentUser={CurrentUser?.result._id}
page = {page} videoList = {videoList}/>
            </div>
        </div>
    </p>
    </div>
    </div>

  )
}

export default WHL