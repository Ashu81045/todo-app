import React from 'react';
import TaskCard from "./TaskCard";


export default class Done extends React.Component{
	constructor(props) {
    super(props);
    this.renderTask = this.renderTask.bind(this);
  }
  renderTask(){
  	if(this.props.info_hash){
    return this.props.info_hash.map((toDo,index) =>
        <TaskCard 
        	key = {index}
            title={toDo.title}
        />
        );
    
	}
}
	render(){
		return(

			<div className ="card">
			<div className="title"> Done </div>
			{this.renderTask()}
			<div className ="todo-button" onClick ={this.props.handleInputForm}>Add a card ... </div>
			</div>
			);

	}
}