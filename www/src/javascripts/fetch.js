import React from 'react';
import axios from 'axios';
import Camper from './singleCamper';
import Header from './header';

export default class Fetch extends React.Component{
  constructor(){
    super();
    this.state = {
      currentView: 'recent',
      recentCamper: [],
      allTimeCamper: []      
    };
  }

  componentWillMount() {
    axios.all([this.getAll(),this.getRecent()]).then(
      axios.spread((allTime, recent) =>{
        this.setState({
          recentCamper: recent.data,
          allTimeCamper: allTime.data
        })
      }));
  }

  getRecent() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }
  getAll() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  eachCamper(data, index) {
    return <Camper position={index + 1} key={index} usrname={data.username}
                   recentPt={data.recent} totalPt={data.alltime} />
  }

  changeState(string) {
    this.setState({
      currentView: string
    })
  }

  arrayToRender() {
    if(this.state.currentView == 'recent'){
      console.log('mounted :' + this.state.currentView);
      return (<div>
                <Header changeState={this.changeState.bind(this)} view={this.state.currentView}></Header>
                <div className='well body'>
                  {this.state.recentCamper.map(this.eachCamper)}
                </div>
              </div>
      );
    }
    else if(this.state.currentView == 'total'){
      console.log('mounted :' + this.state.currentView);
      return (<div>
                <Header changeState={this.changeState.bind(this)} view={this.state.currentView}></Header>
                <div className='well body'>
                  {this.state.allTimeCamper.map(this.eachCamper)}
                </div>
              </div>
      );
    }
  }
  render(){
    return (this.arrayToRender());
  }
};
