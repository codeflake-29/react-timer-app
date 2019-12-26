const React=require('react')
const Clock=require('clock')
const CountdownForm=require('countdownform')
const Controls=require('controls')

const Timer=React.createClass({
    getInitialState:function(){
        return {count:0,
        countdownStatus:'stopped'}
    },
    componentDidUpdate : function (prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus){
          switch(this.state.countdownStatus){
              case 'started':
                this.startTimer()
                break;
              case'paused':
                clearInterval(this.timer)
                this.timer=undefined
                break;
              case 'stopped':
                this.setState({count:0})
                clearInterval(this.timer)
                this.timer=undefined
                break;    
          }
        }
      },
      componentWillUnmount :function() {
        console.log('component did unmount')
        clearInterval(this.timer)
        this.timer=undefined
      },
      
      startTimer:function(){
        this.timer= setInterval(()=>{
            var newCount=this.state.count +1
            this.setState({
                count:newCount 
            })
          
        },1000)
    },
    handleStatusChange:function(newStatus){
        this.setState({countdownStatus:newStatus})
    },

    render:function(){
        const {count,countdownStatus}=this.state
        const renderControlArea=()=>{
            return(<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>)
        }
        return(
           <div>
               <h1 className="page-title">timer App</h1>
               <Clock totalSeconds={count}/>
               {renderControlArea()}
           </div>
        )
    }
})

module.exports=Timer