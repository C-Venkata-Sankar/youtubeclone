import React, {useState} from 'react'
import './comments.css'
function DisplayComments({cId, commentBody, userCommented}) {
    const [cmtBdy, setcmtBdy] = useState("")
    const [Edit, setEdit] = useState(false)
    const handleEdit = (ctId, ctBdy)=>{
        setEdit(true);
        setcmtBdy(cmtBdy);
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        setEdit(false);
    }
  return (
      <>
      {
        Edit?(<>
         <form className='comments_sub_form_comments'
    //onSubmit={handleOnSubmit}
    >
        <input type = "text" 
        onChange={(e)=>setcmtBdy(e.target.value)}
        placeholder='Edit comment.....'
        value={cmtBdy}
        className='comment_ibox'
        />
        <input type = "submit" value="change" className='comments_add_btn_comments' />
    </form>
        </>):(

            <p className='comment_body'>{commentBody}</p>
        )
      }
    <p className='usercommented'> - {userCommented} commented</p>
    <p className='EditDel_DisplayComments'>
        <i onClick={()=>handleEdit(cId, commentBody)}>Edit</i>
        <i>Delete</i>
    </p>
    </>
  )
}

export default DisplayComments