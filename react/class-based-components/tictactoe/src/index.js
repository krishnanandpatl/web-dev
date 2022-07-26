import reactDOM from 'react-dom';
import React from 'react';
import './index.css';

function getGameStatus(squares){
    let winCombs=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<winCombs.length;i++){
        let winCom=winCombs[i];
        let s1=winCom[0];
        let s2=winCom[1];
        let s3=winCom[2];
        if(squares[s1]!=null&&squares[s1]==squares[s2]&&squares[s2]==squares[s3]){
            return squares[s1];
        }

    }
    return null;
}

class Board extends React.Component{

    handleboxclick(i){
        this.props.handlerforboxclick(i);
    }

    rendersquare(i){
        return(
            <button onClick={()=>this.handleboxclick(i)}>{this.props.boxes[i]==null?"":this.props.boxes[i]}</button>
        );
    }

    render(){
        return(
            <div className='board'>
                <div className='title'>Tic Tac Toe</div>
                <div className='content'>
                    <div className='ttt'>
                        <div className='row'>
                            {this.rendersquare(0)}
                            {this.rendersquare(1)}
                            {this.rendersquare(2)}
                        </div>
                        <div className='row'>
                            {this.rendersquare(3)}
                            {this.rendersquare(4)}
                            {this.rendersquare(5)}
                        </div>
                        <div className='row'>
                            {this.rendersquare(6)}
                            {this.rendersquare(7)}
                            {this.rendersquare(8)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Display extends React.Component{

    moveto(i){
        this.props.handlerforhistory(i);
    }

    render(){
        let gametitle=null;

        if(this.props.gamestatus==null){
            gametitle="Next move is of "+(this.props.stepnumber%2==0?"X":"O");
        }else{
            gametitle=this.props.gamestatus+" wins";
        }

        let buttons=[];
        for(let i=0;i<=this.props.stepnumber;i++){
            let button=null;

            if(i==0){
                button=(<button key={i} onClick={()=>this.moveto(i)}>Go to start</button>);
            }
            else{
                button=(<button key={i} onClick={()=>this.moveto(i)}>Go to step#{i}</button>);
            }
            buttons.push(button);
        }

        return(
            <div className='display'>
                <div className='title'>
                    {gametitle}
                </div>
                <div className='content'>
                    <div className='history'>
                        {buttons}
                    </div>
                </div>
            </div>
        );
    }
}

class TTT extends React.Component{
    constructor(props){
        super(props);

        this.state={
            history:[
                [null,null,null,null,null,null,null,null,null]
            ],
            stepnumber:0,
            gamestatus:null
        }
    }
    handlesquareclick(i){
        
        let oldHistory=this.state.history.slice();
        let laststateofsquares=oldHistory[oldHistory.length-1].slice();

        if(laststateofsquares[i]!=null||this.state.gamestatus!=null){
            return;
        }

        laststateofsquares[i]=this.state.stepnumber%2==0?'X':'O';
        oldHistory.push(laststateofsquares);

        let newGameStatus=getGameStatus(laststateofsquares);

        this.setState({
            history:oldHistory,
            stepnumber:this.state.stepnumber+1,
            gamestatus:newGameStatus
        })
    }

    movetostep(i){
        let oldHistory=this.state.history.slice(0,i+1);

        let laststateofsquares=oldHistory[oldHistory.length-1];
        let newGameStatus=getGameStatus(laststateofsquares);

        this.setState({
            history:oldHistory,
            stepnumber:i,
            gamestatus:newGameStatus
        })

    }
    
    render(){
        let squares=this.state.history[this.state.history.length-1];

        return(
            <>
                <Board handlerforboxclick={(i)=>this.handlesquareclick(i)} boxes={squares}/>
                <Display stepnumber={this.state.stepnumber} gamestatus={this.state.gamestatus} handlerforhistory={(i)=>this.movetostep(i)}/>
            </>
        )
    }
}

reactDOM.render(<TTT/>,document.getElementById("root"));