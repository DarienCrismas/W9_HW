// EXTERNAL
import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// INTERNAL
import bg_img from "../../assets/images/thimo-pedersen-TWCnHKKhqSo-unsplash.jpg";

interface Props{
    title:string;
};

const Root = styled("div")({
    padding: 0,
    margin: 0
});

const NavBar = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "red",
});

const Logo = styled("h1")({
    margin: "0 0 0 0.45em",
});

const LogoA = styled(Link)({
    color: "black",
    listStyle: "none",
    textTransform: "uppercase",
    textDecorationLine: "none"
});

const LogoNav = styled("ul")({
    listStyle: "none",
    textTransform: "uppercase",
    display: "flex",
});

const NavA = styled(Link)({
    display: "block",
    padding: "1.5vw",
    color: "black",
    textDecorationLine: "none",
});

const Main = styled("main")({
    backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.3)), url(${bg_img})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute"
});


const MainText = styled("div")({
    textAlign: "center",
    position: "relative",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    lineHeight: 2
})

export const Home = (props:Props) =>{
    const myAuth = localStorage.getItem("myAuth");
    return(
        <Root>
            <NavBar>
                <Logo>
                    <LogoA to="/">
                        Deck
                    </LogoA>
                </Logo>
                <LogoNav>
                    <li>
                        <NavA to="/">
                            Home
                        </NavA>
                    </li>
                    {myAuth === "true" ? 
                        <><li>
                        <NavA to="/dashboard">Dashboard</NavA>
                       </li><li>
                            <NavA to="/signin">Sign Out</NavA>
                        </li></>
                        :
                         <><li>
                         <NavA to="/signin">Sign In</NavA>
                        </li><li>
                             <NavA to="/signup">Sign Up</NavA>
                         </li></>
                    };
                </LogoNav>
            </NavBar>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>
                        Welcome to the Pokemon Center
                    </p>
                    <Button color="primary" component={Link} variant="contained" to="/dashboard">
                        View Your Deck
                    </Button>
                </MainText>
            </Main>
        </Root>
    );
};