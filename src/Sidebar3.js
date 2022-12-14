import {Outlet, NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'



function Sidebar3(props) {

    const [state, setstate] = useState(false)

    function myfun(e){

        e.preventDefault()

        
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

    })
    return ( 

<div>
<a href="" className="anchor" onClick={myfun}>Anchor3 <i className={state? "arrow1": 'arrow'}></i></a>
<div className={"hello " + (state? "animation":"animation1") }>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp7">Comp7</NavLink></li>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp8">Comp8</NavLink></li>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp9">Comp9</NavLink></li>
</div>


</div>
     );
}

export default Sidebar3;