import React from 'react';
import './SideDrawer.scss';
import { connect, ReactReduxContext } from 'react-redux'
import {handleDrawerState} from '../../../redux/actions/drawerActions';

import Icon from '../../atoms/icon/Icon';

function SideDrawer({isOpen, handleDrawerState}) {
  let elementClasses;
  if(isOpen === null){
    elementClasses = "side-drawer";
  } else if(!isOpen){
    document.querySelector("body").classList.remove("no-scroll");
    elementClasses = "side-drawer slide-out-right";
  } else if(isOpen){
    document.querySelector("body").classList.add("no-scroll")
    elementClasses = "side-drawer slide-in-right";
  }
  return (
    <div className={elementClasses}>
        <h1>Side drawer</h1>
        <div className='side-drawer-close-icon' onClick={()=> handleDrawerState()}><Icon classes="mt-xxl" name="arrow-down" width={66} height={20}/> </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isOpen: state.drawerState.isDrawerOpen 
  }
}
export default connect(mapStateToProps, {handleDrawerState} )(SideDrawer);