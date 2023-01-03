import React from 'react';
import './SideDrawer.scss';
import { connect, ReactReduxContext } from 'react-redux'
import {handleDrawerState} from '../../../redux/actions/drawerActions';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../atoms/icon/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SideDrawer({isOpen, handleDrawerState, drawerContent}) {
  let elementClasses;
  function disable() {
    // To get the scroll position of current webpage
    const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    const LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
    }
    
    function enable() {
    window.onscroll = function() {};
    }
  if(isOpen === null){
    elementClasses = "side-drawer";
  } else if(!isOpen){
    document.querySelector("body").classList.remove("no-scroll");
    elementClasses = "side-drawer slide-out-right";
    enable();
  } else if(isOpen){
    document.querySelector("body").classList.add("no-scroll");
    elementClasses = "side-drawer slide-in-right";
    disable();
  }
  return (
    <>
      {isOpen ? <div className='side-drawer-backdrop fade-in'></div> : null}
      <div className={elementClasses}>
          <div className='side-drawer-wrapper'>
            <span className='side-drawer-close-icon side-drawer-close-icon--arrow' onClick={()=> handleDrawerState()}><Icon classes="mt-xxl" name="arrow-down" width={66} height={20}/> </span>
            <span className='side-drawer-close-icon side-drawer-close-icon--cross' onClick={()=> handleDrawerState()}><FontAwesomeIcon icon={faTimes} /></span>
            <div className='side-drawer-sections'>
              {drawerContent}
            </div>
          </div>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    isOpen: state.drawerState.isDrawerOpen,
    drawerContent: state.drawerState.drawerContent
  }
}
export default connect(mapStateToProps, {handleDrawerState} )(SideDrawer);