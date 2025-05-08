import {mount} from "marketing/MarketingApp"
import React,{useRef ,useEffect} from "react"

export default ()=>{

    useEffect(()=>{
        mount(ref.current)
    },[])
    const ref = useRef(null);
    return <div ref={ref}/>
}