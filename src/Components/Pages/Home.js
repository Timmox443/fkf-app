import React from 'react'
import styled from 'styled-components' 
import {useNavigate} from "react-router-dom";


import BUNDES from '../../Icons/zoneA.png';



//Picture and league code, code is a number used when clicking a symbol, the league id will follow when redirecting
const imageContainer = {2002 : BUNDES}

function Home() {
    let navigate = useNavigate(); 
    return(
        <div>
            <Header> Choose your zone </Header> 
            <Content display = "flexed">
            {Object.entries(imageContainer).map(([key, value]) => (
                <div key = {key}>
                    <Card onClick={() => navigate("/leagueinfo", {state : key })} >
                        <Image image={value}/>
                    </Card>
                </div> 
            ))}

            </Content> 
        </div> 
    );}

export default Home;

const Card = styled.div`
background-color: #fafafa;
border: 1px solid rgba(0,0,0,0.1);
border-radius: 7px;
vertical-align: top;
margin: 10px;
position: relative;
display: inline-block;
width: 210px;
height: 200 px; 
overflow: hidden;

&:hover{
background: #e1e1e1;
border: 2px solid #d0d0d0;
cursor: pointer
}
`;

const Image = styled.div`
objectFit: 'cover';
background-size: cover;
background-position: center;
width: 100%;
height: 200px;
background-image: url('${props => props.image}');
`;

const Header = styled.div `
text-align:center;
font-family: 'Muli', sans-serif;
position: relative;
font-size: 3em;
font-weight: 1000;
`;

const Content = styled.div`
display: flex; 
justify-content: center; 
flex-wrap: wrap;
max-width: auto;
align-items: flex-start;
`;

