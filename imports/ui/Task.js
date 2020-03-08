import React, { Component } from 'react';
 import { Tasks } from '../api/tasks.js';
 
// Task component - represents a single todo item
export default class Task extends Component {
	toggleChecked(){
		//update is 'collection' function from mongo, it gets 2 args- 1. id of subcollection 2. what should happened to it
	   Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });
  }
	// also 'collection' function and takes only one arg, the ID and remove it from the collection
	deleteThisTask(){
	Tasks.remove(this.props.task._id);
	}
	
  render() {
	  
	  const taskClassName = this.props.checked ? 'checked' : '';
	  
    return (
      <li className = {taskClassName}>
		<button className = "delete" onClick={this.deleteThisTask.bind(this)}>
		&times;
		</button>
		<input 
		type = "checkbox"
		readonly
		checked = {!!this.props.task.checked}
		onClick = {this.toggleChecked.bind(this)}
		/>
		<span className = "text"> {this.props.task.text}</span>
		</li>
    );
  }
}