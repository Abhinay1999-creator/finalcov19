import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";


const sdata = [

   
    {
        active: "12557",
        state: "Bihar",
    },
    
    {
        active: "17314",

        state: "Chhattisgarh",

    },
    
    {
        active: "11364",

        state: "Jharkhand",


    },
    
    {
        active: "11280",

        state: "Madhya Pradesh",

    },
    
    {
        active: "30284",

        state: "Odisha",

    },
    
    {
        active: "22308",

        state: "West Bengal",


    }
]


const Nstate = () => {
    return (
        <>
    
            <div className="container-fluid mt-5">

                <h2 className=" mb-5 text-center"><span className="font-italic heading">Center States of India</span></h2>

            </div>
            <ResponsiveContainer width="100%" height="100%" aspect={4}>

                <LineChart data={sdata} width={500} height={300} margin={{ top: 15, left: 30, bottom: 5, right: 100 }}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="state" interval={'preserveStartEnd'} />

                    <YAxis dataKey="active" />

                    <Tooltip contentStyle={{ backgroundColor: "white" }} />

                    <Legend />

                    <Line type="monotone" dataKey="active" activeDot={{ r: 10 }} />
                    <Line type="monotone" dataKey="state" activeDot={{ r: 10 }} />


                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default Nstate;