import {Outlet, NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'



function Sidebar5(props) {

    const [state, setstate] = useState(false)

    function myfun(e){
e.preventDefault();

if (state===false){

    setstate(true)
}

else{

    setstate(false)
}
       
    }


    useEffect(()=>{


    })
    return ( 

<div>
<a className="anchor" href="" onClick={myfun}>Anchor1 </a>
<div className={"hello " + (state? "animation":"animation1") }>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp1">Comp1</NavLink></li>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp2">Comp2</NavLink></li>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp3">Comp3</NavLink></li>
</div>


</div>
     );
}

export default Sidebar5;