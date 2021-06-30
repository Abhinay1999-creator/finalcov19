import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

const sdata = [
    {
        active: "2727",

        state: "Goa",


    },
    {
        active: "56667",

        state: "Maharashtra",

    },
    {
        active: "1555",

        state: "Dadra and Nagar Haveli and Daman and Diu",


    },


    {
        active: "24427",

        state: "Gujarat",


    },

    {
        active: "14019",

        state: "Rajasthan",


    }

]


const Wstate = () => {
    return (
        <>
            
            <div className="container-fluid mt-5">

                <h2 className=" mb-5 text-center"><span className="font-italic  heading ">Western States of India</span></h2>

            </div>
            <ResponsiveContainer width="100%" height="100%" aspect={4}>

                <LineChart data={sdata} width={500} height={400} margin={{ top: 5, left: 30, bottom: 5, right: 100 }}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="state" interval={'preserveStartEnd'} />
                    <YAxis dataKey="active"/>

                    <Tooltip contentStyle={{ backgroundColor: "white" }} />

                    <Legend />

                    <Line type="monotone" dataKey="active" activeDot={{ r: 10 }} />
                    <Line type="monotone" dataKey="state" activeDot={{ r: 10 }} />

                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default Wstate;