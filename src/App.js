import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './components/main'
import Homepage from './components/homePage'
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash,faPlusCircle} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
library.add(faPlusCircle)
if(localStorage.length===0){
localStorage.setItem('items',JSON.stringify([]))
}

class App extends React.Component{
render(){
  return(
    <Router>
    <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
    </Switch>
    </Router>
  )}
}

export default App;
  
  // constructor(props){
  //   super(props)
  //   this.state={
  //     items:JSON.parse(localStorage.getItem('items')||[]),
  //     currentItem:{
  //       text:'',
  //       key:'',
  //       deadline:'',
  //       isCompleted:false,
  //       priority:0
  //     },
  //     date:new Date(),
  //     textCopy:''
  //   }
  // }
  // Priority(){
  //   var x=document.getElementById('priority').value;
  //   this.setState({currentItem:{text:this.text===""?"":this.textCopy,key:Date.now(),deadline:this.state.date,isCompleted:false,priority:Number(x) }})
    
  // }
  // onChange = date =>{
  //   this.setState({date})
  //   this.setState({currentItem:{text:this.text===""?"":this.textCopy,key:Date.now(),deadline:date,isCompleted:false,priority:this.priority }})
  // }
  // handleInput(e){
  //   this.textCopy=e.target.value
  //   this.setState({
  //     currentItem:{
  //       text:e.target.value,
  //       key:Date.now(),
  //       deadline:this.state.date,
  //       isCompleted:false,
  //       priority:this.state.currentItem.priority,
  //     }
  //   })
  // }
  // addItem(e){
  //   e.preventDefault();

  //   const newItem = this.state.currentItem;
  //   console.log(newItem);
  //   if(newItem.text!==''){
  //     const newItems=[...this.state.items,newItem];
      
  //     var existing = JSON.parse(localStorage.getItem("items")||[]);
  //     existing.push(newItem);
  //     localStorage.setItem("items",JSON.stringify(existing));
  //    // console.log(existing)

  //     this.setState({
  //       items:newItems,
  //       currentItem:{
  //         text:'',
  //         key:'',
  //         deadline:this.state.date,
  //         isCompleted:false,
  //         priority:0
  //       },
  //       date:new Date()
  //     })
  //     this.sortElements()
  //   }
  // }
  // deleteItem(key){
  //   var existing = JSON.parse(localStorage.getItem("items")||[]);
  //   const filteredItems = existing.filter(item=> item.key!==key);
  //   localStorage.setItem("items",JSON.stringify(filteredItems))
  //   this.setState({
  //     items:filteredItems
  //   });
  // }
  // sortElements(){
  //   var x=document.getElementById('dropdown').value;
  //   if(x==='Default'){
  //   this.setState({
  //     items:JSON.parse(localStorage.getItem('items')).sort((a,b)=>a.key>b.key?1:-1),
  //   })}else if(x==='date'){
  //     this.setState({
  //       items:JSON.parse(localStorage.getItem('items')).sort((a,b)=>a.deadline>b.deadline?1:-1),
  //     })
  //   }else{
  //     this.setState({
  //       items:JSON.parse(localStorage.getItem('items')).sort((a,b)=>a.priority<b.priority?1:-1),
  //     })
  //   }
  // }
  // componentDidMount(){
  //   this.checked()
  //   this.checkDeadline()
  // }
  // componentDidUpdate(){
  //   this.checkDeadline()
  // }
  // checkDeadline(){
  //   JSON.parse(localStorage.getItem('items')).forEach(item=>
  //     new Date(item.deadline)-new Date()>0
  //     ?
  //     null
  //     :
  //     document.getElementById(item.key).parentNode.parentNode.style.backgroundColor='red'
  //   )
  // }
  // checked(){
  //   JSON.parse(localStorage.getItem('items')).forEach(item=>
  //     item.isCompleted===true
  //     ?
  //     document.getElementById(item.key).parentNode.style.textDecoration='line-through'
  //     :
  //     document.getElementById(item.key).parentNode.style.textDecoration='none'
  //     )
  // }
  // markChecked(key){
  //     var temp=this.state.items.map(item=>item.key===key?item={text:item.text,
  //     key:item.key,deadline:item.deadline,isCompleted:!item.isCompleted}:item)
  //     this.setState({
  //       items:temp
  //     });
  //     localStorage.setItem('items',JSON.stringify(temp))
  //   }
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
      // <div className='App' onChange={this.checked.bind(this)}>
      // <p className="heading"> SIMPLE TO_DO_APP </p>
      // <header>
      //   <form id='to-do-form'>
      //     <input className="main" type='text' placeholder='Enter Text here...' value={this.state.currentItem.text} onChange={this.handleInput.bind(this)}></input>
      //     {/* <button  className="submit-button" type='submit'>Add</button> */}
      //     <span onClick={this.addItem.bind(this)} >
      //       <FontAwesomeIcon className='submit-button' icon="plus-circle"/>
      //     </span>
      //     <div>
      //     <div>
      //       <p style={{float:'left',marginLeft:'3vw',marginTop:'0',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight: 'bold',fontSize:'3vh'}}>Set deadline for the task :</p>
      //       <div style={{float:'left',backgroundColor:'#2ecc72',marginLeft:'0.5vw'}}>
      //       <DatePicker style={{float:'left',borderWidth:0}}
      //         onChange={this.onChange}
      //         value={this.state.date}
      //       /></div>
      //       <label style={{marginLeft:'1vw',marginTop:'0',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight: 'bold',fontSize:'3vh'}}>Set priority : </label>
      //       <select name="property" style={{marginLeft:'1vw',width:'12%',height:'10%',borderRadius:'4px'}} id='priority' onClick={()=>this.Priority()}>
      //         <option value="default">---</option>
      //         <option value="1">Low</option>
      //         <option value="2">Medium</option>
      //         <option value='3'>High</option>
      //       </select>
      //     </div>
      //     </div>
      //     <div style={{padding:'2vh',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight: 'bold',fontSize:'3vh'}}>
      //       <div style={{width:'50%'}}>
      //         <label style={{float:'left',marginLeft:'3vw',marginTop:'0',paddingRight:'2vw'}}>Filter by: </label>
      //         <select name="property" id="dropdown" style={{width:'40%',height:'10%',borderRadius:'4px',padding:'2px',marginLeft:'0'}} onChange={()=>this.sortElements()}>
      //           <option value="default">Default</option>
      //           <option value="date">date</option>
      //           <option value="priority">priority</option>
      //         </select>
      //       </div>
      //     </div>
      //   </form>
      // </header>
      // <ListItems items={this.state.items} deleteItem={this.deleteItem.bind(this)} markChecked={this.markChecked.bind(this)} />
      // </div>