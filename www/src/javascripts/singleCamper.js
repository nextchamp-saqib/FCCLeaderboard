import React from 'react';

export default class Camper extends React.Component{
  render() {
    var userlink = "https://www.freecodecamp.com/" + this.props.usrname
    return (
      <div className='row camper'>
        <div className='well col-xs-2'>{this.props.position}</div>
        <div className='well col-xs-4'><a href={userlink} >{this.props.usrname}</a></div>
        <div className='well col-xs-3'>{this.props.recentPt}</div>
        <div className='well col-xs-3'>{this.props.totalPt}</div>
      </div>
    );
  }
}