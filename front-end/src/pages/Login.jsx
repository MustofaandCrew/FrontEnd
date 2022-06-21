import React from "react";

import Pic from "../assets/images/pic.png";

export default function Login() {
    return (
        <div className="container my-5 px-5">
            <div className="row">
                <div className="col-6 ">
                    <img src={Pic} alt="girl" className="img-fluid" />
                </div>
                <div className="col-6">
                    <h3 className="login-title">
                        Belanja kebutuhan utama,<br />
                        menjadi lebih mudah
                    </h3>
                    <form className="login-form">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="login-btn">
                        <button type="submit" className="btn btn-success me-3">Sign In</button>
                        <a href="/register" className="btn btn-outline-secondary">Sign Up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}