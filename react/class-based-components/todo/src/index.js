import ReactDom from 'react-dom';
import React    from    'react';
import './index.css';
//app task compnenet
class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state={
            taskdesc:''
        };
    }
    handletextchange(e){
        this.setState({
            taskdesc:e.target.value
        });
    }
    handleaddclick(){
        this.props.handlenewtaskinfo(this.state.taskdesc);
        this.setState({
            taskdesc:''
        });
    }
    render(){
        return(
            <form>
                <input type="text" value={this.state.taskdesc} onChange={(e)=>this.handletextchange(e)}/>
                <input type="button" value="Add Task" onClick={()=>this.handleaddclick()}></input>
            </form>
        )
    }
}
// task list component
class TaskList extends React.Component {
    handletaskclick(taskDesc){
        this.props.handlertocollectclickinfo(taskDesc);
    }
    render(){
    
    let list=[];
    for(let i=0;i<this.props.tasks.length;i++) {
        let task=this.props.tasks[i];
        let spanaction;
        if(task.isfinished){
            spanaction=(<span class="material-icons" onClick={()=>this.handletaskclick(task.desc)}>close</span>);
        } else{
            spanaction=(<span class="material-icons" onClick={()=>this.handletaskclick(task.desc)}>check_circle</span>);
        
        }
            let listItem=(
            <div key={i}>
                <span>{task.desc}</span>
                {spanaction}
            </div>
        );
     list.push(listItem);
    }
    return(
            <div className={this.props.forstyling }>
                <div className="list-container">
                <div className="title">{this.props.purpose}</div>
                <div className='content'>
                    {list}
                </div>
                </div>
            </div>
        )
    }
}
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tasks: [{
                desc:'Switch off light',
                isfinished: false
            },{
                desc:'Turn on fan',
                isfinished: true
            },{
                desc:'Make tea',
                isfinished: false
            },{
                desc:'Make dinner',
                isfinished: true
            }]
        }
    }    
    handlenewtask(task){
        let oldtask=this.state.tasks.slice();
        oldtask.push({
            desc:task,
            isfinished:false
        });
        this.setState({
            tasks:oldtask
        });
    }
    handleupdate(taskDesc,newstatus){
        let oldtask=this.state.tasks.slice();
        let taskitem=oldtask.find(ot=>ot.desc==taskDesc);
        taskitem.isfinished=newstatus;
        this.setState({
            tasks:oldtask
        });
    }
    render() {
        let tasks=this.state.tasks;
        let todotasks=tasks.filter(t=>t.isfinished==false);
        let donetasks=tasks.filter(t=>t.isfinished==true);
        return(
            <>
            <div class="add-task">
                <AddTask handlenewtaskinfo={(task)=>this.handlenewtask(task)}/>
            </div>    
                <div class="task-lists">
                <TaskList handlertocollectclickinfo={(taskDesc)=>this.handleupdate(taskDesc,true)} tasks={todotasks} purpose="Todo"  forstyling="todo"/>
                <TaskList handlertocollectclickinfo={(taskDesc)=>this.handleupdate(taskDesc,false)} tasks={donetasks} purpose="Finished" forstyling="finished" />
                </div>
            </>
        );
    }
}
ReactDom.render(<App/>, document.getElementById("root"));