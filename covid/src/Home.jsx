import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Home = () => {

    // Authenticate for login purpose

    // const history = useHistory();

    // const callHome = async () => {

    //     try {
    //         const res = await fetch("/", {
    //             method: "GET",
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json"
    //             },
    //             credentials: "include"
    //         })

    //         const data = await res.json();
    //         console.log(data);
    //         if (!res.status === 200) {
    //             const error = new Error(res.error);
    //             throw error;

    //         }

    //     } catch (err) {
    //         console.log(err);
    //         history.push("/login");
    //     }
    // }

    // useEffect(() => {
    //     callHome();
    // }, [])


    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row"></div>
                        <div id="navbar-example2" className="navbar px-3 my-5">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="dropdown-item" href="#scrollspyHeading1"><strong>HTML5</strong></a>
                                </li>
                                <li className="nav-item">
                                    <a className="dropdown-item" href="#scrollspyHeading2"><strong>CSS3</strong></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Web Development</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#scrollspyHeading3"><strong>JavaScript</strong></a></li>
                                        <li><a className="dropdown-item" href="#scrollspyHeading4"><strong>ReactJS</strong></a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#scrollspyHeading5"><strong>Bootstrap</strong></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>



                        <div className="wrapper my-5">
                            <ul className="dynamic-txts">
                                <li><span>Web Development</span></li>
                                <li><span>React JS Library</span></li>
                            </ul>
                        </div>



                        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">

                            <h4 id="scrollspyHeading1">HTML5</h4>
                            <p>HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. New page structure elements such as main, section, article, header, footer, aside, nav, and figure are added.
                                The current specification is known as the HTML Living Standard.</p>

                            <br />

                            <h4 id="scrollspyHeading2">CSS3</h4>
                            <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
                                CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.CSS3 is the latest version of the CSS specification. CSS3 adds several new styling features and improvements to enhance the web presentation capabilities.</p>

                            <br />

                            <h4 id="scrollspyHeading3">Javascript</h4>
                            <p>JavaScript is a high-level programming language;
                                It was originally designed as a scripting language for websites but became widely adopted as a general-purpose programming language,
                                and is currently the most popular programming language in use;
                                JavaScript is usually found running in a web browser as interactive or automated content, ranging from popup messages and live clocks to large web applications; JavaScript is also commonly used in server-side programming through platforms like Node.js,
                                or "embedded" in non-JavaScript applications where the base programming language lacks the high-level functionality that JavaScript offers.</p>

                            <br />

                            <h4 id="scrollspyHeading4">ReactJS</h4>
                            <p>React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.
                                React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing,
                                as well as certain client-side functionality</p>

                            <br />

                            <h4 id="scrollspyHeading5">Bootstrap</h4>
                            <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Home;