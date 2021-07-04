import React, {Component} from 'react';
import axios from 'axios'
class Activity extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            startdate:'',
            enddate:'',
            head:'',
            activity:'',
            message:''
        }
    }



    processName = (obj) =>{
        this.setState({
            name:obj.target.value
        })
    }
    
    processStartDate = (obj) =>{
       this.setState({
           startdate:obj.target.value
       })
    }

    processEndDate = (obj) =>{
        this.setState({
            enddate:obj.target.value
        })
    }

    processHead = (obj) =>{
        this.setState({
            head:obj.target.value
        })
    }
    processActivity = (obj) =>{
        this.setState({
            activity:obj.target.value
        })
    }
    
    save = () =>{
        var url ="http://localhost:2222/saveactivity";
        var jsonData = {
            "name" : this.state.name,
            "startdate" : this.state.startdate,
            "enddate" : this.state.enddate,
            "head" : this.state.head,
            "activity" : this.state.activity,
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
        <div className="container mt-5 pt-4">
        <div className="row ">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
            <h5 className="text-center">New Activity</h5>
            <p> {this.state.message} </p>
            
            <div className="mb-3">
            <h5>Activity Name</h5>
            <input type="text" className="form-control"
             onChange={this.processName}  />
            </div>

            <div className="mb-3">
            <h5>Activity Start Date</h5>
            <input type="text" placeholder="mm/dd/yyy" className="form-control"
             onChange={this.processStartDate}   />
            </div>

            <div className="mb-3">
            <h5>Activity End Date </h5>
            <input type="text" placeholder="mm/dd/yyy"className="form-control"
             onChange={this.processEndDate}   />
            </div>

            <div className="mb-3">
            <h5>Activity Head Name</h5>
            <input type="text" className="form-control"
             onChange={this.processHead}   />
            </div>

            <div className="mb-3">
            <h5> About Activity</h5>
            <textarea className="form-control"
             onChange={this.processActivity}   ></textarea>
            </div>

            <div className="text-center ">
            <buton className="btn btn-primary m-2"
             onClick={this.save}   >Save Activity</buton>
            <buton className="btn btn-danger m-2">Close</buton>
            </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
        </div>
        )
    }
}
export default Activity
