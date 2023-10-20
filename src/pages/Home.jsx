import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
import { Box, Typography } from '@mui/material';
import UserCard from '../components/UserCard';
import CircularProgress from '@mui/material/CircularProgress';
import ViewUser from '../components/ViewUser';
import Modal from '@mui/material/Modal';
import '../App.css'
import MobileView from '../components/MobileView';
// import Modal from "@mui/material/Modal";

export default function Home() {

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
const [user , setUser] = useState();
const init = async()=>{
    const res = await axios('https://602e7c2c4410730017c50b9d.mockapi.io/users');
    setUser(res);
}
var key = 0;

const [view , setView] = useState(null);

const handleClick = (data)=>{
  setView(data);
  setOpen(true)
}

    useEffect(() => {
init();
    }, [])
  return (
    <div>
     
        <div className='homediv' style={{display : 'flex' , flexDirection : 'row' , width: '100%' , height  : '100vh'}}>
            <div style={{ }} className='leftdiv'>
            <h1 style={{ textAlign: 'center'}}>
        Users Info
      </h1>
      <div>
    {user ?  user.data.map((data)=>{
        //  console.log(data)
        return (
           
            <div onClick={()=>{handleClick(data)}}  key={key++}><UserCard props={data} /></div>
        )
    })
     : <div style={{textAlign : 'center' , alignContent :'center'}}><CircularProgress /></div>}
     </div>
     
            </div>
<div className='mobileview' style={{}} >
{view ? (
                <div onClick={()=>{setOpen(false)}} className='mobileview'>
                  <Modal
                  className='mobileview'
                     open={open}
                     onClose={handleClose}
                     aria-labelledby="modal-modal-title"
                     aria-describedby="modal-modal-description">
                    <Box className='mobileview'>
                      <MobileView props={view} />
                    </Box>
                  </Modal>
                </div>
              ) : (
                <></>
              )}
</div>

            <div  style={{ }} className='rightdiv'>
{view ?  <div >
<ViewUser props={view}/>
</div> : <div></div>}
            </div>
        </div>

    </div>
  )
}
