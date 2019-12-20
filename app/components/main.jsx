const React=require('react')
const Nav=require('nav')

const main=(props)=>{
  return(
    <div>
  
    <div >
      <div >
        <Nav/>
        <p>main.jsx rendered</p>
      {props.children}
      </div>
    </div>
    
     </div>
  )
}
module.exports=main