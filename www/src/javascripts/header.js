import React,{Component} from 'react';

export default class Header extends Component {
    changeRecent(){
        this.props.changeState('recent');
    }
    changeTotal(){
        this.props.changeState('total');
    }
    render() {
        return (
            <div className="header">
                <div className="well col-xs-2" >Sr.No</div>
                <div className="well col-xs-4">UserName</div>
                <div className="well col-xs-3"><button onClick={this.changeRecent.bind(this)}>Recent Pts</button></div>
                <div className="well col-xs-3"><button onClick={this.changeTotal.bind(this)}>Total Pts</button></div>
            </div>
        );
    }
} 