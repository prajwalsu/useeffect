import React,{useState} from 'react';
import { useEffect } from "react";

function RightWayOfUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("use effect executed in mounting phase");

        return () => {
            console.log("component will unmount phase");
        }
    }, []);//mounting phase similar to component did mount

    useEffect(() => {
        if(count !==0) {
            console.log("use effect componentDidUpdate is eceuted");
        }
    }, [count]);//if you have dependence array in your useeffect it updating phase

    return (
        <div>
            <h1>count-{count}</h1>
            <button
            onClick={() => {
                setCount(count+1);
            }}
            >
             click
            </button>
            
        </div>
    );
}

export default RightWayOfUseEffect
