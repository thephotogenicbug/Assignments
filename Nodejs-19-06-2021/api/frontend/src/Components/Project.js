import axios from 'axios';
import React,{Component} from 'react';
class Project extends Component{
      constructor(){
          super();
          this.state={
              name:'',
              mobile:'',
              email:'',
              address:'',
              message:''
          }
      }

      processName = (obj) =>{
          this.setState({
              name:obj.target.value
          })
      }
      
      processMobile = (obj) =>{
         this.setState({
             mobile:obj.target.value
         })
      }

      processEmail = (obj) =>{
          this.setState({
              email:obj.target.value
          })
      }

      processAddress = (obj) =>{
          this.setState({
              address:obj.target.value
          })
      }

      save = () =>{
          var url ="http://localhost:2222/saveproject";
          var jsonData = {
              "name" : this.state.name,
              "mobile" : this.state.mobile,
              "email" : this.state.email,
              "address" : this.state.address,
          }
          axios.post(url, jsonData)
          .then(response =>{
              this.setState({
                  message:response.data
              })
          })
      }


    render(){
        return(
            <div className="container mt-5 pt-5">
                <div className="row">
                   <div className="col-md-12 text-center">
                    <h2>New Project</h2>      
                   <p className="text-success mt-2"> {this.state.message}</p>
                 </div> 
                  <div className="col-md-4 mb-3">
                      <label>Project Name</label>
                      <input type="text" className="form-control"
                      onChange={this.processName}  />
                  </div>
                  <div className="col-md-4">
                      <label>Contact No</label>
                      <input type="text" className="form-control" 
                      onChange={this.processMobile} />
                  </div>
                  <div className="col-md-4 mb-3">
                      <label>Email ID</label>
                      <input type="text" className="form-control" 
                      onChange={this.processEmail} />
                  </div>
                  <div className="col-md-8">
                      <label>Project Address</label>
                      <textarea rows="4" cols="70" className="form-control mt-2" onChange={this.processAddress}  ></textarea>
                  </div>
                  <div className="col-md-4 mt-4">
                      <button className="btn btn-info text-white" onClick={this.save}  >Save Project</button>
                  </div>
                </div>
            </div>
        )
    }

}
export default Project