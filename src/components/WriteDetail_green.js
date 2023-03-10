import { useEffect, useState, useRef } from "react";
import React, {Component} from 'react';
import styled from "styled-components";
import "../styles/WriteDetail.css"
import Period from "../components/Period";

const WriteInfo_title = styled.div`
float:left;
font-family: "BlackOpsOne";
color: white;
background-color: ${props => props.color || "#6582BB"};
width: 500px;
height: 40px;
line-height: 40px;
border-radius: 20px;
font-size: 25px;
text-align: center;
margin-top: 35px;
margin-left: 185px;
`;


const WriteQ1_question = styled.div`
float:left;
margin-top: 110px;
margin-left: -500px;
font-family: "BlackOpsOne";
font-size: 20px;
color: ${props => props.color || "#6582BB"};
`;

const WriteQ1_area = styled.textarea`
border-radius: 10px;
    width: 1000px;
    height: 80px;
    background-color: transparent;
    border-color: ${props => props.color || "#6582BB"};
    border-width: 3px;
    margin-left: 185px;
    margin-top: 65px;
    resize: none;
`;

const WriteQ2_question = styled.div`
margin-top: 30px;
margin-left: 185px;
font-family: "BlackOpsOne";
font-size: 20px;
color:  ${props => props.color || "#6582BB"};
`;

const WriteQ2_area = styled.textarea`
border-radius: 10px;
width: 1000px;
height: 100px;
background-color: transparent;
border-color: ${props => props.color || "#6582BB"};
border-width: 3px;
margin-left: 185px;
margin-top: 10px;
resize: none;
`;

const WriteQ3_question = styled.div`
margin-top: 30px;
    margin-left: 185px;
    font-family: "BlackOpsOne";
    font-size: 20px;
    color:  ${props => props.color || "#6582BB"};
`;

const WriteQ3_area = styled.textarea`
    border-radius: 10px;
    width: 1000px;
    height: 100px;
    background-color: transparent;
    border-color: ${props => props.color || "#6582BB"};
    border-width: 3px;
    margin-left: 185px;
    margin-top: 10px;
    resize: none;
`;

function WriteDetail_green() {

    const [state, setState] = useState({
        writeWhatis:"",
        writeWhatdidyoudo:"",
        writeEpisode:"",
        }
    );

    const handleChangeState = (e) => {
        e.preventDefault();
        
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    {/*const movePage = useNavigate();
    function writePost(){
        movePage('/visit-detail');
        console.log('move to here',state);
    }*/}

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(state);
        //writePost();
    }

    let activityTag = ["# ?????????", "# ?????????", "# ??????", "# ????????????", "# ??????"];
    let majorTag = ["# ????????????", "# ????????????", "# ????????????", "# ????????????", "# ????????????", "# ???????????????"];

    let [activityTagActive, setactivityTagActive] = useState("");
    let [majorTagActive, setmajorTagActive] = useState("");

    const toggleActive1 = (e) => {
        setactivityTagActive((prev) => {
        e.preventDefault();
        return e.target.value;
        });
        console.log(e.target.value);
    };

    const toggleActive2 = (e) => {
        setmajorTagActive((prev) => {
        e.preventDefault();
        return e.target.value;
        });
        console.log(e.target.value);
    };

    return (
        <form>
            <div>
            <WriteInfo_title color="#8BBB65">Programming Club "SOLUX"</WriteInfo_title>
            <Period/>
            </div>
            <div>
            <WriteQ1_question color="#8BBB65">WHAT IS ? </WriteQ1_question>
            <WriteQ1_area name="writeWhatis" color="#8BBB65"
            value={state.writeWhatis} onChange={handleChangeState}
            maxLength={200} placeholder="?????? ?????????????????? ????????? ??????????????????"></WriteQ1_area>
            </div>
            <div>
            <WriteQ2_question color="#8BBB65">WHAT DID YOU DO ? </WriteQ2_question>
            <WriteQ2_area name="writeWhatdidyoudo" color="#8BBB65"
            value={state.writeWhatdidyoudo} onChange={handleChangeState}
            maxLength={350} placeholder="??????????????? ?????? ?????? ?????????(?????? ?????? ???) ??????????????????"></WriteQ2_area>
            </div>
            <div>
            <WriteQ3_question color="#8BBB65">EPISODE or ADVICE ? </WriteQ3_question>
            <WriteQ3_area name="writeEpisode" color="#8BBB65"
            value={state.writeEpisode} onChange={handleChangeState}
            maxLength={350} placeholder="??? ????????? ???????????? ?????? ?????? ????????? ????????????, ????????? ?????? ????????? ?????????????????? ??? ???????????? ??????????????????"></WriteQ3_area>
            </div>
            <div className="WriteGreen-letsHashtag" >Hashtag</div>
            <div className="WriteGreen-hashtag-activity">
        {activityTag.map((item1,idx1) => {
        return (
            <>
            <button key={idx1}
            value={item1}
            className={"WriteGreen-hashtagBtn-act" + (item1 == activityTagActive ? "-active" : "")}
            onClick={toggleActive1}
            >
            {item1}
            </button>
        </>
        );
    })}
    </div>
    <div className="WriteGreen-hashtag-major">
    {majorTag.map((item2, idx2) => {
        return (
            <>
            <button key={idx2} 
            value={item2}
            className={"WriteGreen-hashtagBtn-major" + (item2 == majorTagActive ? "-active" : "")}
            onClick={toggleActive2}
            >
            {item2}
            </button>
        </>
        );
    })}
    </div>
    <div>
        <button className="write-complete-green" onClick={handleSubmit}>COMPLETE</button>
    </div>
            </form>
    );
}

export default WriteDetail_green;
