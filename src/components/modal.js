import React from 'react';
import DatePicker from 'react-date-picker';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
class Example extends React.Component {
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

    getData(key){
       const [x] = this.state.items.filter(item=>item.key===key)
       console.log(x)
    }

    render(){
  return(
      <span>
{/* <!-- Button trigger modal -->  */}

<FontAwesomeIcon icon='pen' data-toggle="modal" data-target="#exampleModal" onClick={()=>this.getData(this.props.itemKey)} /> 

{/* <!-- Modal --> */}
<div style={{color:'black'}} className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header" style={{backgroundColor:'#218F76'}}>
        <h3 className="modal-title"id="exampleModalLabel">Edit the task </h3>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body" style={{backgroundColor:'#7CEC9F'}}>
        <label style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight: 'bold',fontSize:'3vh'}}>Edit the text :</label>
        <input  value={this.state.currentItem.text} style={{marginLeft:'1vw',backgroundColor: 'white',border:0,width:'67%',height:'40px',padding:'0% 0.5%',fontSize: '3vh',borderRadius: '10px',color: 'black',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) ',outline:'none'}}  type='text'></input>
        <br /><br />
        <label style={{marginRight:'3vw',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight: 'bold',fontSize:'3vh'}}>Edit the date :</label>
        <DatePicker />
        <br /><br />
        <label style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",fontWeight: 'bold',fontSize:'3vh'}}>Edit the Priority :</label>
        <select name="property" style={{marginLeft:'3vw',borderRadius:'4px',fontSize:'3vh'}} id='priority' >
              <option value="default">---</option>
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value='3'>High</option>
        </select>
      </div>
      <div className="modal-footer" style={{backgroundColor:'#7CEC9F'}}>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button"style={{backgroundColor:'#218F76'}} className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</span> 
  );
}
}
export default Example;