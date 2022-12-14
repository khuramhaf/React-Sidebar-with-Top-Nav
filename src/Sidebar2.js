import {Outlet, NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'



function Sidebar2(props) {

    const [state, setstate] = useState(false)

    function myfun(e){

        e.preventDefault();

       
        if(props.state[1]===false){
setstate(true)
            var array1 = [false, true]
            props.setstate(array1)
        }

        else{
            var array1 = [false, false]
            props.setstate(array1)
            setstate(false)
        }
    }

    useEffect(()=>{

        if(props.state[1]===false){
            setstate(false)
            
        }

        else{
            setstate(true)
        }

    })
    return ( 

<div>
<a className="anchor" href="" onClick={myfun}>Anchor2 <i className={state? "arrow1": 'arrow'}></i></a>
<div className={"hello " + (state? "animation":"animation1") }>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp4">Comp4</NavLink></li>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp5">Comp5</NavLink></li>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp6">Comp6</NavLink></li>
</div>


</div>
     );
}

export default Sidebar2;