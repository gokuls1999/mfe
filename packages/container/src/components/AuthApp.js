import {mount} from "auth/AuthApp"
import React,{useRef ,useEffect} from "react"
import {useHistory} from "react-router-dom"
export default ({onSignIn})=>{
    const history = useHistory()
    useEffect(()=>{
        const {onParentNavigate} = mount(ref.current,{
            initialPath: history.location.pathname,
            onNavigate:({pathname: nextPathName})=>{
                const {pathname} = history
                if(pathname !== nextPathName){
                history.push(nextPathName)
                }
            },
            onSignIn:onSignIn
        })
        history.listen(onParentNavigate)
    },[])
    const ref = useRef(null);
    return <div ref={ref}/>
}