import React from 'react';
import DatePicker from 'react-date-picker';
import {Link} from 'react-router-dom';
import './main.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash,faPlusCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
library.add(faPlusCircle)
if(localStorage.length===0){
localStorage.setItem('items',JSON.stringify([]))
}

class Main extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      items:JSON.parse(localStorage.getItem('items')||[]),
      currentItem:{
        text:'',
        key:'',
        deadline:'',
        isCompleted:false,
        priority:0
      },
      date:new Date(),
      textCopy:''
    }
  }
  Priority(){
    var x=document.getElementById('priority').value;
    this.setState({currentItem:{text:this.text===""?"":this.textCopy,key:Date.now(),deadline:this.state.date,isCompleted:false,priority:Number(x) }})
    
  }
  onChange = date =>{
    this.setState({date})
    this.setState({currentItem:{text:this.text===""?"":this.textCopy,key:Date.now(),deadline:date,isCompleted:false,priority:this.state.priority }})
  }
  handleInput(e){
    this.textCopy=e.target.value
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now(),
        deadline:this.state.date,
        isCompleted:false,
        priority:this.state.currentItem.priority,
      }
    })
  }
  addItem=()=>{

    const newItem = this.state.currentItem;
    //console.log(newItem);
    if(newItem.text!==''){
      const newItems=[...this.state.items,newItem];
      
      var existing = JSON.parse(localStorage.getItem("items")||[]);
      existing.push(newItem);
      localStorage.setItem("items",JSON.stringify(existing));
     // console.log(existing)

      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:'',
          deadline:this.state.date,
          isCompleted:false,
          priority:0
        },
        date:new Date()
      })
      //this.sortElements()
    }
  }
  sortElements(){
    var x=document.getElementById('dropdown').value;
    if(x==='Default'){
    this.setState({
      items:JSON.parse(localStorage.getItem('items')).sort((a,b)=>a.key>b.key?1:-1),
    })}else if(x==='date'){
      this.setState({
        items:JSON.parse(localStorage.getItem('items')).sort((a,b)=>a.deadline>b.deadline?1:-1),
      })
    }else{
      this.setState({
        items:JSON.parse(localStorage.getItem('items')).sort((a,b)=>a.priority<b.priority?1:-1),
      })
    }
  }
  render(){
    return(
      <div className='App'>
      <header>
        <div id='to-do-form'>
          <input className="main" type='text' placeholder='Enter Text here...' value={this.state.currentItem.text} onChange={this.handleInput.bind(this)}></input>
          <Link to="/" onClick={()=>this.addItem()} style={{textDecoration:'none'}}>
          <button  className="submit-button2">Add</button>
          </Link>
            <p style={{float:'left',marginLeft:'3vw',marginTop:'0',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight: 'bold',fontSize:'3vh'}}>Set deadline for the task :</p>
            <div style={{float:'left',backgroundColor:'#2ecc72',marginLeft:'0.5vw'}}>
            <DatePicker style={{borderWidth:0}}
              onChange={this.onChange}
              value={this.state.date}
            /></div>
            <br /><br /><br />
            <div>
            <label style={{marginLeft:'3vw',marginTop:'0',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight: 'bold',fontSize:'3vh'}}>Set priority : </label>
            <select name="property" style={{marginLeft:'3vw',borderRadius:'4px',fontSize:'3vh'}} id='priority' onClick={()=>this.Priority()}>
              <option value="default">---</option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value='3'>High</option>
            </select>
            </div>
        </div>
      </header>
    </div>
  )}
}
export default Main;
