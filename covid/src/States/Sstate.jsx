import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

const sdata = [
    {
        active: "99",
        state: "Andaman and Nicobar Islands",
    },
   
    {
        active: "49683",
        state: "Andhra Pradesh",
    },
    
    {
        active: "99293",

        state: "Karnataka",


    },
    {
        active: "95862",

        state: "Kerala",

    },
    {
        active: "322",

        state: "Lakshadweep",


    },

    {
        active: "49845",

        state: "Tamil Nadu",

    },
    {
        active: "16030",

        state: "Telangana",

    }
  
]


const Sstate = () => {
    return (
        <>
           
            <div className="container-fluid mt-5">

                <h2 className=" mb-5 text-center"><span className="font-italic  heading">Southern States of India</span></h2>

            </div>
            <ResponsiveContainer width="100%" height="100%" aspect={3}>

                <LineChart data={sdata} width={400} height={300} margin={{ top: 5, left: 30, bottom: 5, right: 100 }}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="state" interval={'preserveStartEnd'} />
                    <YAxis dataKey="active"/>

                    <Tooltip contentStyle={{ backgroundColor: "white" }} />

                    <Legend />

                    <Line type="monotone" dataKey="active" activeDot={{ r: 10 }} />
                    <Line dataKey="state" activeDot={{ r: 10 }} />

                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default Sstate;