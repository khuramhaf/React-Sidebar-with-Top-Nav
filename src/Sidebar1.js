import {Outlet, NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'



function Sidebar1(props) {

    const [state, setstate] = useState(false)

    function myfun(e){

        e.preventDefault();

       
        if(props.state[0]===false){
setstate(true)
            var array1 = [true, false]
            props.setstate(array1)
        }

        else{
            var array1 = [false, false]
            props.setstate(array1)
            setstate(false)
        }
    }


    useEffect(()=>{

        if(props.state[0]===false){
            setstate(false)
            
        }

        else{
            setstate(true)
        }

        console.log(document.getElementById("hello").offsetHeight);

    })
    return ( 

<div>
<a className="anchor" href="" onClick={myfun}>Anchor1 <i className={state? "arrow1": 'arrow'}></i></a>
<div id="hello" className={"hello " + (state? "animation":"animation1") }>
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

export default Sidebar1;