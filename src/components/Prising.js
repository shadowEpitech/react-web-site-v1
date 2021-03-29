import React from 'react';
import {Link} from "react-router-dom";
import {BsXDiamondFill, FaFire, GiCrystalize} from "react-icons/all";
import {Button} from "./Button";
import {IconContext} from "react-icons";
import './Prising.css';

function Prising() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
            <div>
                <div className="prising__section">
                    <div className="prising__wrapper">
                        <h1 className="prising__heading">
                            Prising
                        </h1>
                        <div className="prising__container">
                            <Link to={"/sign-up"} className={'prising__container-card'}>
                                <div className="prising__container-cardInfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>$8.99</h4>
                                    <p>per month</p>
                                    <ul className="prising__container-features">
                                        <li>100 Transaction</li>
                                        <li>2% Cash Back</li>
                                        <li>$10,000 Limit</li>
                                    </ul>
                                    <Button buttonSize={'btn--wide'} buttonColor={'primary'}>
                                        Choose Plan
                                    </Button>
                                </div>
                            </Link>
                            <Link to={"/sign-up"} className={'prising__container-card'}>
                                <div className="prising__container-cardInfo">
                                    <div className="icon">
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Gold</h3>
                                    <h4>$29.99</h4>
                                    <p>per month</p>
                                    <ul className="prising__container-features">
                                        <li>1000 Transaction</li>
                                        <li>3.5% Cash Back</li>
                                        <li>$100,000 Limit</li>
                                    </ul>
                                    <Button buttonSize={'btn--wide'} buttonColor={'blue'}>
                                        Choose Plan
                                    </Button>
                                </div>
                            </Link>
                            <Link to={"/sign-up"} className={'prising__container-card'}>
                                <div className="prising__container-cardInfo">
                                    <div className="icon">
                                        <GiCrystalize />
                                    </div>
                                    <h3>Diamond</h3>
                                    <h4>$99.99</h4>
                                    <p>per month</p>
                                    <ul className="prising__container-features">
                                        <li>Unlimited Transaction</li>
                                        <li>5% Cash Back</li>
                                        <li>Unlimited Spending</li>
                                    </ul>
                                    <Button buttonSize={'btn--wide'} buttonColor={'primary'}>
                                        Choose Plan
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Prising;
