import React, {Component} from 'react'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import {updateStudentThunk, deleteStudentThunk} from '../store'

class EditStudent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.student.id,
            firstName: this.props.student.firstName,
            lastName: this.props.student.lastName,
            email: this.props.student.email,
            gpa: this.props.student.gpa
        }
        this.emailHandleChange = this.emailHandleChange.bind(this);
        this.firstNameHandleChange = this.firstNameHandleChange.bind(this);
        this.lastNameHandleChange =  this.lastNameHandleChange.bind(this);  
        this.gpaHandleChange =  this.gpaHandleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);   
    }

    
    firstNameHandleChange(event){
        this.setState({firstName: event.target.value })
    }
    lastNameHandleChange(event){
        this.setState({lastName: event.target.value})
    }

    emailHandleChange(event){
        console.log(event.target.value);
        this.setState({email:event.target.value})
    }
    gpaHandleChange(event){
        this.setState({gpa: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        const id = this.props.studentId;
        const studentInfo = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            gpa:this.state.gpa
        }
        this.props.editStudentInfo(id, studentInfo)
    }

    render(){
        // const student = this.props.student;
        // const studentId = this.props.studentId;
        return(
            <div>
                <div className="editCompStyle">
            {/* <h1>Welcome to Edit Student Component</h1> */}
            <form className='form-group' onSubmit={(eve)=> this.handleSubmit(eve)}>
            <table className = 'table'>
            <tr>
                <td>Student Id:</td>
                <td>{this.state.id}</td>
            </tr>
            <tr>
                <td>Student First Name:</td>
                <td><input type="text" name="firstName" value={this.state.firstName} onChange={this.firstNameHandleChange}/></td>
            </tr>
            <tr>
                <td>Student Last Name:</td>
                <td><input type="text" name="lastName" value={this.state.lastName} onChange={this.lastNameHandleChange}/></td>
            </tr>
            <tr>
                <td>Student Email:</td>
                <td><input type="text" name="email" value={this.state.email} onChange={this.emailHandleChange}/></td>
            </tr>
            <tr>
                <td>Student GPA:</td>
                <td><input type="text" name="gpa" value={this.state.gpa} onChange={this.gpaHandleChange}/></td>
            </tr>
            </table>
            <div>
                <button type="submit">Update</button>
                <button onClick={()=>this.props.removeStudent(this.state.id)}>Delete</button>
            </div>
           
            </form>
            </div>
            </div>

        )
    }
}




const mapStateToProps = (state,ownProps) => {
    const studentArr = state.studentStore;
    //console.log(studentArr)
    const studentId = ownProps.match.params.studentId;
    //console.log(studentId)
    const studentInfo = studentArr.filter(student => student.id === +studentId);
    //console.log("madhu.............." + studentInfo)
    return {
      student: studentInfo[0],
      studentId: studentId
    }
  }
  /* Note: filter function always return the result in an array.So that is the reason 
   studentInfo[0] as we want to edit/update the object which is at 0th index of an array returned by filter 
   function.*/


//Using return 
// const mapDispatchToProps = (dispatch,ownProps) => {
//   return {
//     editStudentInfo: (id,studentInfo) => dispatch((updateStudentThunk(id,studentInfo)))
//   }
// }

const mapDispatchToProps = (dispatch, ownProps)=>(
    {
    editStudentInfo:(id,studentInfo)=> dispatch((updateStudentThunk(id,studentInfo))),
    removeStudent(id){
        dispatch(deleteStudentThunk(id))
     }
    }
)

/*The ownProps inside your mapStateToProps and mapDispatchToProps functions will be an object:
{ value: 'example' }
And you could use this object to decide what to return from those functions.
///////////////////////
ownProps refers to the props that were passed down by the parent.

So, for example:

Parent.jsx:

...
<Child prop1={someValue} />
...
Child.jsx:

class Child extends Component {
  props: {
    prop1: string,
    prop2: string,
  };
...
}

const mapStateToProps = (state, ownProps) => {
  const prop1 = ownProps.prop1;
  const tmp = state.apiData[prop1]; // some process on the value of prop1
  return {
    prop2: tmp
  };
};
*/



export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);


