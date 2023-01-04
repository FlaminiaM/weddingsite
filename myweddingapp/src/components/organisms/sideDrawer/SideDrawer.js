import React from 'react';
import './SideDrawer.scss';
import { connect, ReactReduxContext } from 'react-redux'
import {handleDrawerState} from '../../../redux/actions/drawerActions';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../atoms/icon/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../atoms/button/Button';

function SideDrawer({isOpen, handleDrawerState, drawerContent}) {
  let elementClasses;
  if(isOpen === null){
    // elementClasses = "side-drawer";
  } else if(!isOpen){
    document.querySelector("body").classList.remove("no-scroll");  
    // elementClasses = "side-drawer slide-out-right";
  } else if(isOpen){
    document.querySelector("body").classList.add("no-scroll");
    // elementClasses = "side-drawer slide-in-right";    
  }
  return (
    isOpen ? (
      <div className='side-drawer'>
        <div className='side-drawer-background'>
          <div className='side-drawer-container'>
              <div className='side-drawer-wrapper'>
                <span className='side-drawer-close-icon side-drawer-close-icon--cross' onClick={()=> handleDrawerState()}><FontAwesomeIcon icon={faTimes} /></span>
                <div className='side-drawer-sections'>
                  {drawerContent}
                </div>
                <div className='side-drawer-close-btn'><Button type='primary' text='Close' clickHandler={handleDrawerState}/></div>
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