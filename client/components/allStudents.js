import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link} from 'react-router-dom';
import {allStudentsThunk} from '../store';


class AllStudents extends Component{
constructor(props){
  super(props)
  this.state = {
    search: ''
  }
}

searchHandleChange (event){
        this.setState({search: event.target.value})
        //console.log(event.target.value)
      }

componentDidMount(){
  this.props.fetchAllStudents()
}
render(){
  
  //const students = this.props.students;
  const studentsArr = this.props.students.filter((student)=>{
    let firstName = student.firstName.toLowerCase()
    return firstName.slice(0,1).indexOf(this.state.search.toLowerCase()) !== -1;
  })
  
  return(
<div> 
 <div className="allStudentsCompStyle">
{/* <h1>Welcome to AllStudents Component</h1> */}
<table className = 'table'>
    <thead>
      <tr>
        <th>Campus Name</th>
        <th>Student Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>gpa</th>
         {/* <th>Campus Name</th> */}
        <th>Edit Student</th>
      </tr>
    </thead>
    <tbody>
      {
        studentsArr.map((student)=>(
          <tr key = {student.id}>
          <td>{student.campus.campusName}</td>
          <td>{student.id}</td>
          <td>{student.firstName}</td>
          <td>{student.lastName}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.gpa}</td>
           {/* <td>{student.campus.campusName}</td> */}
          <td><Link to={`/students/${student.id}`} className="textColor">Edit</Link></td>
          </tr>
        ))
      }
     
    </tbody>
   
</table>

</div>
<sec className="section">
<Link to='/addNewStudent' className="textColor">Add Student</Link>

</sec>
<div>
<input  type="text"  onChange={this.searchHandleChange.bind(this)}/>
{/* <input  type="text"  onChange={this.searchHandleChange.bind(this)}/> */}
</div>
</div>

  )
}

}


const mapStateToProps = (state)=>{
  return {
  students: state.studentStore
  }
}

// const mapDispatchToProps = function(dispatch){
//   return {
//     fetchAllStudents(){
//       dispatch(allStudentsThunk())
//     }
//   }
// }

const mapDispatchToProps = (dispatch)=>(
  {fetchAllStudents: ()=>dispatch(allStudentsThunk())}
)


export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)

/*You've got three options

Add a constructor and do the binding there (recommended):

this.handleSubmit = this.handleSubmit.bind(this);
Bind directly:

onSubmit={this.handleSubmit.bind(this)}
Use arrow => functions

onSubmit={() => this.handleSubmit}
 */


 