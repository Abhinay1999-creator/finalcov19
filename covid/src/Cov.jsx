import React from 'react'
import { useEffect, useState } from 'react'


const Cov = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="container-fluid mt-5">
                            <div className="main-heading">
                                <h1 className="mb-5 text-center"><span className="font-weight-bold">Covid-19 India Dashboard</span></h1>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-hover center">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>State</th>
                                        <th>Confirmed</th>
                                        <th>Recovered</th>
                                        <th>Deaths</th>
                                        <th>Active</th>
                                        <th>Updated</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data.map((CurrElem, ind) => {
                                            return (
                                                <tr key={ind}>
                                                    <td>{CurrElem.state}</td>
                                                    <td>{CurrElem.confirmed}</td>
                                                    <td>{CurrElem.recovered}</td>
                                                    <td>{CurrElem.deaths}</td>
                                                    <td>{CurrElem.active}</td>
                                                    <td>{CurrElem.lastupdatedtime}</td>
                                                </tr>
                                            )
                                        })
                                    }


                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cov;