import React, { Component } from 'react'
import {connect} from 'react-redux'
//import {withRouter} from 'react-router-dom'
import {addStudentThunk} from '../store';

class AddStudent extends Component {
  constructor(props) {
    super(props);

    //console.log('this.props', this.props)
    this.state = {
      
      campusId: '',
      firstName: '',
      lastName: '',
      email: '',
      gpa:'',
      firstNameerror: ''
    };
    this.handleCampusIdChange = this.handleCampusIdChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.gpaHandleChange = this.gpaHandleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }
  handleCampusIdChange(event) {
    console.log(event.target.value);
    this.setState({campusId: event.target.value});
  }
  handleEmailChange(event) {
    console.log(event.target.value);
    this.setState({email: event.target.value});
  }
  handleFirstNameChange(event) {
    console.log(event.target.value);
    this.setState({firstName: event.target.value});
  }
  handleLastNameChange(event) {
    console.log(event.target.value);
    this.setState({lastName: event.target.value});
  }

  gpaHandleChange(event){
            this.setState({gpa: event.target.value})
        }
  
        

  handleSubmit(event) {
    console.log("In handleSubmit");
    event.preventDefault();

    if (this.state.firstName.length === 0) {
      this.setState({firstNameerror: "firstName cannot be empty"});
      return;
    }
  
    const studentInfo = {
      campusId: this.state.campusId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      gpa:this.state.gpa,
      
      
    };
    this.setState({campusId: ''});
    this.setState({firstName: ''});
    this.setState({lastName: ''});
    this.setState({email: ''});
    this.setState({gpa: ''});
    

    console.log(studentInfo);

    this.props.addStudentInfo(studentInfo);
  }

render() {
  return (
  <div>
  <h3>Add Student</h3>
  <div>
  <h1>{this.state.firstNameerror}</h1>
  </div>  
  <form className="form-group" onSubmit={(eve) => this.handleSubmit(eve)}> 
            <table >
              <tbody>
              <tr>
                <td>Campus Id : </td>    
                <td><input type="text" name="campusId" value={this.state.campusId} onChange={this.handleCampusIdChange}/></td>
            </tr>
             
            <tr>
                <td>Student FirstName : </td>    
                <td><input type="text" name="fname" value={this.state.firstName} onChange={this.handleFirstNameChange}/></td>
            </tr>
            <tr>
                <td>Student LastName : </td>    
                <td><input type="text" name="lname" value={this.state.lastName} onChange={this.handleLastNameChange}/></td>
            </tr>
            <tr>
                <td>Student Email : </td>    
                <td><input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange}/></td>
            </tr>
            <tr>
                <td>Student GPA : </td>    
                <td><input type="text" name="gpa" value={this.state.gpa} onChange={this.gpaHandleChange}/></td>
            </tr>
            </tbody>
            </table>
            <div>
                    <button type="submit">update</button>
            </div>
  </form>  
</div>
  )
}

 }

const mapStateToProps = (state) => {
  return {  
  }
}

//Using return 
// const mapDispatchToProps = (dispatch,ownProps) => {
//   return {
//     editStudentInfo: (id,studentInfo) => dispatch((updateStudentThunk(id,studentInfo)))
//   }
// }

const mapDispatchToProps = (dispatch,ownProps) => ({
    addStudentInfo: (studentInfo) => dispatch((addStudentThunk(studentInfo))),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);
