import React, { useState } from "react";
import "./indicator.scss";
export default function Indicator(props){
    const list=["Start Task","Finish Task","Sent for Approval","Approved"];
    const selected=props.state;
    let current="";
    
    function listval(valitem){
        if(selected===valitem){
           return <li className="multi-step-item current" style={{marginRight:"3%"}}>
                <div className="item-wrap">
                    <p className="item-title">{valitem}</p>
                </div>
            </li>
        }
        else{
           return <li className="multi-step-item" >
                <div className="item-wrap">
                    <p className="item-title">{valitem}</p>
                </div>
            </li>
        }
    }
    
    

    return(
        <div style={{ width: "1000px" }}>
           
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="multi-step">
                            <ul className="multi-step-list">
                                {list.map((lists) => (
                                    listval(lists)
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}