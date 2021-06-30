import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

const sdata = [

   
    {
        active: "2567",
        state: "Arunachal Pradesh",
    },
    {
        active: "9667",
        state: "Assam",
    },

    {
        active: "9174",

        state: "Manipur",

    },
    {
        active: "4424",

        state: "Meghalaya",


    },
    {
        active: "7331",

        state: "Mizoram",

    },
    {
        active: "8509",

        state: "Nagaland",


    },


    {
        active: "7282",

        state: "Sikkim",


    },

    {
        active: "3899",

        state: "Tripura",

    },
]


const Estate = () => {
    return (
        <>

            <div className="container-fluid mt-5">

                <h2 className=" mb-5 text-center"><span className="font-italic heading">Eastern States of India</span></h2>

            </div>
            <ResponsiveContainer width="100%" height="100%" aspect={4}>

                <LineChart data={sdata} width={500} height={300} margin={{ top: 5, left: 20, bottom: 5, right: 100 }}>

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

export default Estate;