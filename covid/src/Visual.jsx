import React from 'react'
import Estate from './States/Estate';
import Wstate from './States/Wstate';
import Sstate from './States/Sstate';
import Nstate from "./States/Nstate"
import Mstate from "./States/Mstate";

const Visual = () => {
    return (
        <>
            <Nstate />
            <hr className="my-5 font-weight-bold"/>
            <Estate />
            <hr className="my-5 font-weight-bold"/>
            <Wstate />
            <hr className="my-5 font-weight-bold"/>
            <Mstate />
            <hr className="my-5 font-weight-bold"/>
            <Sstate />
        </>
    )
}

export default Visual;