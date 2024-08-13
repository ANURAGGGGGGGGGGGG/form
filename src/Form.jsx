import React from 'react'
import "./Form.css"

const Form = () => {
    return (
        <>
            <div className='container'>
                <h1>Form in React</h1>
                <label htmlFor="first"> First Name**</label>
                <div className="wrap-input-1">
                    <input className="input" type="text" placeholder="First Name" />
                    <span className="focus-border" />
                </div>

                <label htmlFor="last"> Last Name**</label>
                <div className="wrap-input-1">
                    <input className="input" type="text" placeholder="Last Name" />
                    <span className="focus-border" />
                </div>
                <label htmlFor="email"> Enter Email**</label>
                <div className="wrap-input-1">
                    <input className="input" type="text" placeholder="Email" />
                    <span className="focus-border" />
                </div>
                <label htmlFor="email"> Contact**</label>
                <div className="wrap-input-1">
                    <input className="input" type="text" placeholder="Contact" />
                    <span className="focus-border" />
                </div>
                <h2>Gender</h2>
                <div>
                    <div className="wrap-check-29">
                        <div className="cbx">
                            <input id="male" type="checkbox" name='gender' />
                            <label htmlFor="cbx-29" />
                            <svg width={15} height={14} viewBox="0 0 15 14" fill="none">
                                <path d="M2 8.36364L6.23077 12L13 2" />
                            </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo-12">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation={4} result="blur" />
                                    <feColorMatrix
                                        in="blur"
                                        mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                                        result="goo-12"
                                    />
                                    <feBlend in="SourceGraphic" in2="goo-12" />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    <label htmlFor="male">Male</label>
                    <div className="wrap-check-29">
                        <div className="cbx">
                            <input id="female" type="checkbox" name='gender' />
                            <label htmlFor="cbx-29" />
                            <svg width={15} height={14} viewBox="0 0 15 14" fill="none">
                                <path d="M2 8.36364L6.23077 12L13 2" />
                            </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo-12">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation={4} result="blur" />
                                    <feColorMatrix
                                        in="blur"
                                        mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                                        result="goo-12"
                                    />
                                    <feBlend in="SourceGraphic" in2="goo-12" />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    <label htmlFor="female">Female</label>
                    <div className="wrap-check-29">
                        <div className="cbx">
                            <input id="other" type="checkbox" name='gender' />
                            <label htmlFor="cbx-29" />
                            <svg width={15} height={14} viewBox="0 0 15 14" fill="none">
                                <path d="M2 8.36364L6.23077 12L13 2" />
                            </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo-12">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation={4} result="blur" />
                                    <feColorMatrix
                                        in="blur"
                                        mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                                        result="goo-12"
                                    />
                                    <feBlend in="SourceGraphic" in2="goo-12" />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    <label htmlFor="other">Other</label>
                </div>
                <h2>Your best Subject</h2>
                <div>
                    <div className="wrap-check-60">
                        <input type="checkbox" id="english" />
                        <label htmlFor="cbtest-60" className="check-box"></label>
                    </div>
                    <label htmlFor="english">English</label>
                    <div className="wrap-check-60">
                        <input type="checkbox" id="maths" />
                        <label htmlFor="cbtest-60" className="check-box"></label>
                    </div>
                    <label htmlFor="maths">Maths</label>
                    <div className="wrap-check-60">
                        <input type="checkbox" id="physics" />
                        <label htmlFor="cbtest-60" className="check-box"></label>
                    </div>
                    <label htmlFor="physics">Physics</label>
                </div>
                <h2>About</h2>
                <textarea name="about" id="about" placeholder='About your self'></textarea>
                <button>Submit</button>
            </div>
        </>
    )
}

export default Form
