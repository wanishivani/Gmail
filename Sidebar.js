import {Button } from 'react-bootstrap';
import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import './Sidebar.css';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import SendIcon from '@mui/icons-material/Send';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateIcon from '@mui/icons-material/Create';
import { useDispatch } from 'react-redux';
import { openMsg } from '../../features/userSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function Sidebar(){
  const dispatch = useDispatch();
 const history = useHistory();
  return (
      <div className='sidebar'>

<Button startIcon={<AddBoxIcon/>}className='compose__btn' onClick={()=>dispatch(openMsg())}>Compose</Button><SidebarOption Icon={CreateIcon} title='Compose' number='224'/>

<Link to='/inbox'><SidebarOption Icon={InboxIcon} title='Inbox' number='224' isactive={true}onClick={()=>history.push('/home')}>Inbox</SidebarOption></Link>
<SidebarOption Icon={SaveAsIcon} title='Draft' number='124'/>
<Link to='/sent'><SidebarOption Icon={SendIcon}  title='Sent' number='23' isactive={false} >Sent</SidebarOption></Link>

<SidebarOption Icon={DeleteIcon} title='Delete' number='324'/>
<SidebarOption Icon={LabelImportantIcon} title='Important' number='124'/>
<SidebarOption Icon={ExpandMoreIcon} title='More' number='24'/>

      </div>
  )
};