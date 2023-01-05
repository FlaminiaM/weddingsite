import React from 'react';
import './SideDrawer.scss';
import { connect, ReactReduxContext } from 'react-redux'
import {handleDrawerState} from '../../../redux/actions/drawerActions';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../atoms/icon/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../atoms/button/Button';

function SideDrawer({isOpen, handleDrawerState, drawerContent}) {

  if(!isOpen){
    document.querySelector("body").classList.remove("no-scroll");  
  } else if(isOpen){
    document.querySelector("body").classList.add("no-scroll");
  }

  const handleClickBackground = (e) => {
    if (!e.target.classList.contains("side-drawer-background"))
    return;
    handleDrawerState();
  }

  return (
    isOpen ? (
      <div className='side-drawer'>
        <div className='side-drawer-background' onClick={(e)=> handleClickBackground(e)}>
          <div className='side-drawer-container'>
              <div className='side-drawer-wrapper'>
                <div className='side-drawer-sections'>
                <span className='side-drawer-close-icon side-drawer-close-icon--cross' onClick={()=> handleDrawerState()}><FontAwesomeIcon icon={faTimes} /></span>
                  {drawerContent}
                </div>
                {/* <div className='side-drawer-close-btn'><Button type='primary' text='Close' clickHandler={handleDrawerState}/></div> */}
              </div>
          </div>
        </div>
      </div> 
    ) : null
  )
}
const mapStateToProps = (state) => {
  return {
    isOpen: state.drawerState.isDrawerOpen,
    drawerContent: state.drawerState.drawerContent
  }
}
export default connect(mapStateToProps, {handleDrawerState} )(SideDrawer);