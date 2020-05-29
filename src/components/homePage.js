import React from 'react';
import {Link} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPen,faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ListItems from './listitems';
import './homepage.css';
library.add(faPlusCircle);
library.add(faPen);

class Homepage extends React.Component{
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
      textCopy:'',
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

  deleteItem(key){
    var existing = JSON.parse(localStorage.getItem("items")||[]);
    const filteredItems = existing.filter(item=> item.key!==key);
    localStorage.setItem("items",JSON.stringify(filteredItems))
    this.setState({
      items:filteredItems
    });
  }


  markChecked(key){
      var temp=this.state.items.map(item=>item.key===key?item={text:item.text,
      key:item.key,deadline:item.deadline,isCompleted:!item.isCompleted,priority:item.priority}:item)
      this.setState({
        items:temp
      });
      localStorage.setItem('items',JSON.stringify(temp))
    }
    
    componentDidMount(){
    this.checked()
    this.checkDeadline()
  }
  componentDidUpdate(){
    this.checkDeadline()
  }
  checkDeadline(){
    JSON.parse(localStorage.getItem('items')).forEach(item=>
      new Date(item.deadline)-new Date()>0
      ?
      document.getElementById(item.key).parentNode.parentNode.style.backgroundColor='#75DA8B'
      :
      document.getElementById(item.key).parentNode.parentNode.style.backgroundColor='red'
    )
  }
  checked(){
    JSON.parse(localStorage.getItem('items')).forEach(item=>
      item.isCompleted===true
      ?
      document.getElementById(item.key).parentNode.style.textDecoration='line-through'
      :
      document.getElementById(item.key).parentNode.style.textDecoration='none'
      )
  }
   
render(){
    return(
        <div>
            <div className="App1">
            <span className="heading1">SIMPLE TO_DO_APP</span>
            <Link style={{textDecoration:'none'}} to='/main'>
            <span>
              <FontAwesomeIcon className='submit-button1' icon="plus-circle"/>
            </span>
            </Link>
            <div style={{float:'left',width:'20%'}}>
               {/* <label style={{float:'left',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight: 'bold',fontSize:'3vh'}}>Filter by: </label> */}
              <select name="property" onChange={()=>this.sortElements()} id="dropdown" style={{marginTop:'1vh',marginLeft:'2vw',fontSize:'3vh'}}>
                 <option value="default">Default</option>
                 <option value="date">date</option>
                 <option value="priority">priority</option>
               </select>
             </div>
           </div>
            <div className="App2" onChange={this.checked}>
                <ListItems items={this.state.items} deleteItem={this.deleteItem.bind(this)} markChecked={this.markChecked.bind(this)}  />
            </div>
        </div>
    )
    }
}
export default Homepage;