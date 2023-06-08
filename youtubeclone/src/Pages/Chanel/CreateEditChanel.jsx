import React from 'react'
import { useState } from 'react';
import "./CreateEditChanel.css"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChanelData } from '../../actions/chanelUser';

function CreateEditChanel({setEditCreateChanelBtn}) {
    // const CurrentUser = {
    //     result:{
    //       email:"xyz@gmail.com",
    //       joinedOn: "2222-07-15T09:57:23.49Z",
    //     },
    //   };
    const CurrentUser = useSelector(state=>state.currentUserReducer)
      const dispatch = useDispatch()
      const [name, setname] = useState(CurrentUser?.result.name)
      const [desc, setdesc] = useState(CurrentUser?.result.desc)
      const handleSubmit = () =>{
        if(!name){
          alert("Pz enter name !");
        }
        else if (!desc){
          alert("plz enter description")
        }else{
          dispatch(updateChanelData (CurrentUser?.result._id,{
            name: name,
            desc:desc,
          }));
          setEditCreateChanelBtn(false);
          setTimeout(()=>{
            dispatch(login({email: CurrentUser?.result.email}));
          }, 5000)
        }

      }
  return (
    <div className='container_CreateEditChanel'>
        <input type='submit'
        onClick={()=>setEditCreateChanelBtn(false)}
        name = "text"
        value={"X"}
        className='ibtn_x'
        />
        <div className='container2_CreateEditChanel'>
            <h1>{
                CurrentUser?.result.name?<>
                 Edit
                </>:
                <>Create </>
                } your chanel</h1>
            <input type = "text"
            placeholder='Enter your chanel name'
            className='ibox '
            name ="text"
            value={name}
            onChange={(e)=>setname(e.target.value)}
            />
            <textarea 
            type = "text"
            rows={15}
            placeholder='Enter chanel Description'
            className='ibox'
            value = {desc}
            onChange={(e)=>setdesc(e.target.value)}
            />
            <input type='submit' 
            value={"Submit"}
            onClick={handleSubmit}
            className='ibtn'
            />
        </div>
    </div>
  )
}

export default CreateEditChanel