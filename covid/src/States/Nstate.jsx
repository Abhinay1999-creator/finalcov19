import React from 'react';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

const sdata = [


    {
        active: "1767",

        state: "Delhi",

    },

    {
        active: "1990",

        state: "Haryana",


    },
    {
        active: "2123",

        state: "Himachal Pradesh",


    },
    {
        active: "6537",

        state: "Jammu and Kashmir",


    },

    {
        active: "278",

        state: "Ladakh",


    },
    {
        active: "5274",

        state: "Punjab",


    },
    {
        active: "3552",

        state: "Uttar Pradesh",

    },
    {
        active: "2739",

        state: "Uttarakhand",

    }

]


const Nstate = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className=" mb-5 text-center"><span className="font-weight-bold data-vis">Data Visualization</span></h1>
                </div>
            </div>
            <div className="container-fluid mt-5">

                <h2 className=" mb-5 text-center"><span className="font-italic heading ">Northern States of India</span></h2>

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