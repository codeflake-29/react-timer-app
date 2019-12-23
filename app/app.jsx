const React=require('react')
const ReactDOM=require('react-dom')
const {Router, Route, IndexRoute, hashHistory}= require('react-router')
const main=require('main')
const Timer=require('timer')
const Countdown=require('countdown')



//load foundation

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

//app css

require('style!css!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        
    <Route path='/' component={main} >
        <Route path='countdown' component={Countdown}/>
        <IndexRoute component={Timer}/>
   
    </Route>
    </Router>,
    document.getElementById('app')
);