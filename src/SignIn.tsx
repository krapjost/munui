import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as MunuiLogo } from "./icons/moonlogo.svg";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

const Container = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const StyledLogo = styled(MunuiLogo)`
  width: 50%;
  max-width: 350px;
  height: min-content;

  .back {
    fill: black;
    &:hover {
      fill: red;
    }
  }
  .color1 {
    fill: blue;
    &:hover {
      fill: red;
    }
  }
  .color2 {
    fill: blue;
    &:hover {
      fill: red;
    }
  }
  .color3 {
    fill: blue;
    &:hover {
      fill: red;
    }
  }
  .color4 {
    fill: blue;
    &:hover {
      fill: red;
    }
  }
  .color5 {
    fill: blue;
    &:hover {
      fill: red;
    }
  }
  .color6 {
    fill: blue;
    &:hover {
      fill: red;
    }
  }
  .front {
    fill: blue;
    &:hover {
      fill: red;
    }
  }
  animation: ${rotate} 7s cubic-bezier(0.83, 0, 0.17, 1) infinite;
`;

const H1 = styled.h1<{ show: boolean }>`
  margin: 0;
  font-size: 3em;
  word-break: break-all;
  text-align: center;
  font-weight: 300;
  font-family: ${(props) =>
    props.show ? "'Permanent Marker', cursive" : '"Libre Barcode 39", cursive'};
  color: ${(props) => (props.show ? "blue" : "rgb(0,255, 80)")};
  background: ${(props) => (props.show ? "black" : "black")};
  @media ${devices.mobileS} {
    font-size: ${(props) => (props.show ? "4em" : "6em")};
    max-width: 200px;
  }
  @media ${devices.tablet} {
    font-size: ${(props) => (props.show ? "7em" : "10em")};
    max-width: 500px;
  }
  &::selection {
    color: blue;
    background: black;
  }
`;

const H2 = styled.h2`
  margin: 1em;
  padding: 0em 1em;
  font-size: 2em;
  max-width: 500px;
  word-break: keep-all;
  text-align: center;
  font-weight: 300;
  color: rgb(255, 80, 170);
  font-family: "Knewave", cursive;

  @media ${devices.mobileS} {
    font-size: 1.8em;
  }

  @media ${devices.tablet} {
    font-size: 2.2em;
  }
  @media ${devices.laptop} {
    font-size: 3.5em;
  }

  @media ${devices.desktop} {
    font-size: 4em;
  }
`;

const H3 = styled.h3`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotate(175deg);
  font-weight: 300;
  font-size: 1em;
  font-family: "Libre Barcode 39", cursive;
  color: rgb(255, 0, 100);
  @media ${devices.mobileS} {
    font-size: 1.5em;
  }
  @media ${devices.tablet} {
    font-size: 3.2em;
  }
  &::selection {
    background: yellow;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  position: relative;
  gap: 2em;
`;

export default function SignIn() {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <H2>NFT Marketplace for Design Assets</H2>
      <Wrapper>
        <StyledLogo
          onClick={(e) => {
            console.log(`clicked ${e}`);
          }}
        />
        <H1
          show={show}
          onDoubleClick={(e) => {
            setShow(!show);
          }}
        >
          MOONEE
        </H1>
      </Wrapper>
    </Container>
  );
}
