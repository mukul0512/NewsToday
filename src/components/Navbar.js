import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">NewsToday</Link> */}
                    <a className="navbar-brand" href="#">NewsToday</a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link" aria-current="page" to="/">Home</Link> */}
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                {/* <Link business className="nav-link" href="/business">Business</Link> */}
                                <a business className="nav-link" href="#business">Business</a>
                            </li>

                            <li className="nav-item">
                                {/* <Link entertainment className="nav-link" href="/entertainment">Entertainment</Link> */}
                                <a entertainment className="nav-link" href="#entertainment">Entertainment</a>
                            </li>

                            <li className="nav-item">
                                {/* <Link general className="nav-link" href="/general">General</Link>
                                 */}
                                <a general className="nav-link" href="#general">General</a>
                            </li>

                            <li className="nav-item">
                                {/* <Link health className="nav-link" href="/health">Health</Link>
                                 */}
                                <a health className="nav-link" href="#health">Health</a>
                            </li>

                            <li className="nav-item">
                                {/* <Link science className="nav-link" href="/science">Science</Link> */}
                                <a science className="nav-link" href="#science">Science</a>
                            </li>

                            <li className="nav-item">
                                {/* <Link sports className="nav-link" href="/sports">Sports</Link>
                                 */}
                                <a sports className="nav-link" href="#sports">Sports</a>
                            </li>

                            <li className="nav-item">
                                {/* <Link technology className="nav-link" href="/technology">Technology</Link> */}
                                <a technology className="nav-link" href="#technology">Technology</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
