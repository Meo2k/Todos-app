import React from 'react'; 
import './myStyle.scss'

class ChildComponents extends React.Component{
    state={
        showJobs: false, 
    }
    
    handleShowHide = () =>{
        this.setState({
            showJobs: !this.state.showJobs, 
        })
    }
    handleOnclickDelete = (job) =>{
        this.props.deleteAJob(job); 
    }
    render() {
         let {arrJobs} = this.props; 
         let {showJobs} = this.state; 
        return (
        
        <>
        {showJobs === false ?
        <>
        <div>
            <button className='btn-show'
            onClick={()=> this.handleShowHide()}>
                Show
            </button>
        </div>
        </>
        :
        <>
            <div className='job-list'>
              {
                  arrJobs.map((item,index) =>{
                      return(
                          <div key={item.id}>
                              {item.title} - {item.salary}  
                              <></> <span onClick={() => this.handleOnclickDelete(item)}>   x</span>
                          </div>
                      )
                  })
              }
            </div>
        <div>
            <button  onClick={()=> this.handleShowHide()}>
                Hide
            </button>
        </div>
        </>
        }
        </>
        )
    }
}

export default ChildComponents ; 