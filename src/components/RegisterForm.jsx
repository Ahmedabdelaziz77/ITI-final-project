import styled, { css } from "styled-components";
const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0, 25), 0 10px 10px rgpa(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;
const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.operation !== true &&
    css`
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
    `};
  ${(props) => props.operation && css``};
  transition: all 0.6s ease-in-out;
`;
const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.operation !== true &&
    css`
      transform: translateX(100%);
    `};
  ${(props) => props.operation && css``};
  transition: all 0.6s ease-in-out;
`;
const Form = styled.form`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: bold;
`;
const Input = styled.input`
  background-color: #eee;
  width: 100%;
  padding: 12px 15px;
  margin: 8px 0;
  border: none;
  outline: none;
`;
const Button = styled.button`
  border-radius: 20px;
  background-color: #ff4b2b;
  color: #ffffff;
  border: 1px solid #ff4b2b;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;
const GhostButton = styled(Button)`
  border-color: #fff;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 14px;
  margin: 15px 0;
`;
const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
  transition: transform 0.6s ease-in-out;
  ${(props) =>
    props.operation !== true &&
    css`
      transform: translateX(-100%);
    `};
  ${(props) => props.operation && css``};
`;
const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) =>
    props.operation !== true &&
    css`
      transform: translateX(50%);
    `};
  ${(props) => props.operation && css``};
`;
const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;

  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) =>
    props.operation !== true &&
    css`
      transform: translateX(-20%);
    `};
  ${(props) => props.operation && css``};
`;
const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) =>
    props.operation !== true &&
    css`
      transform: translateX(0%);
    `};
  ${(props) => props.operation && css``};
`;
const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) =>
    props.operation !== true &&
    css`
      transform: translateX(20%);
    `};
  ${(props) => props.operation && css``};
`;
const RegisterFormStyles = {
  Container,
  SignUpContainer,
  SignInContainer,
  Form,
  Title,
  Input,
  Button,
  GhostButton,
  Anchor,
  Paragraph,
  OverlayContainer,
  Overlay,
  OverlayPanel,
  LeftOverlayPanel,
  RightOverlayPanel,
};

export default RegisterFormStyles;
