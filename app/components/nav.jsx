const React=require('react')
const ReactDOM=require('react-dom')
const {Link,IndexLink}=require('react-router')

const nav=React.createClass({

    render : function(){
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                    <li className="menu-text">
                        Raect timer app
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link"> Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="countdown" activeClassName="active-link">timer countdown</Link>
                    </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                    <li className="menu-text"> made by <a href="#">chiru</a></li>
                    </ul>
                </div>
            </div>
        )
    }
})
module.exports=nav