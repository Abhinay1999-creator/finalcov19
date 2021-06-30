import React, { useState } from "react";

const Contact = () => {

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
    });

    let name, value;

    const InputEvent = (e) => {

        name = e.target.name;
        value = e.target.value;

        setUser(() => {

            return {
                ...user,
                [name]: value,
            }

        })
    };

    
       // Server Side

    const PostUser = async (event) => {
        event.preventDefault();

        const { name, phone, email } = user;

        const response = await fetch('/submit', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name, phone, email
            })
        });

        const res = await response.json();
        if (res.status === 422 || !res) {
            window.alert("Registeration Unsuccessfull")
        } else {
            window.alert("Registeration Successfull")
        }
    }



    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact US </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-11 mx-auto">
                        <form >
                            <div className="mb-5">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                   Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="name"
                                    value={user.name}
                                    onChange={InputEvent}
                                    placeholder="Enter your name"
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={user.phone}
                                    onChange={InputEvent}
                                    placeholder="mobile number"
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={user.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com"
                                    autoComplete="off"
                                    required
                                />
                            </div>


                            <div className="col-12">
                                <input className="btn btn-outline-primary my-5" type="submit" onClick={PostUser} value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;