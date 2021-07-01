import styled from 'styled-components';
import { GlobalButton } from '../../GlobalStyle';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 15px;
  max-width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  border-radius: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.15), 0 15px 12px rgba(0, 0, 0, 0.1);
  border-top: 30px solid
    ${(props) => {
      if (props.formType === 'login') {
        return '#CAEEBE';
      } else if (props.formType === 'signup') {
        return '#98E2F7';
      } else if (props.formType === 'resetPassword') {
        return '#FEC98F';
      }
    }};

  @media screen and (max-width: 411px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

export const Heading = styled.div`
  font-size: 40px;
  font-family: 'Pacifico', cursive;
`;

export const FieldContainer = styled.div`
  position: relative;
  margin: 15px 0;
  width: 300px;
  max-width: 100%;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 10px 0;
  font-size: 14px;
  width: 100%;
  outline: none;
  background-color: inherit;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-15px);
    font-size: 12px;
    font-weight: 700;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  pointer-events: none;
  transform: translateY(15px);
  transition: all 150ms ease-out;
`;
export const Button = styled(GlobalButton)`
  margin: 10px 0;
  border: 4px solid
    ${(props) => {
      if (props.formType === 'login') {
        return '#CAEEBE';
      } else if (props.formType === 'signup') {
        return '#98E2F7';
      } else if (props.formType === 'resetPassword') {
        return '#FEC98F';
      }
    }};

  &:hover {
    background-color: ${(props) => {
      if (props.formType === 'login') {
        return '#CAEEBE';
      } else if (props.formType === 'signup') {
        return '#98E2F7';
      } else if (props.formType === 'resetPassword') {
        return '#FEC98F';
      }
    }};
    border-color: ${(props) => {
      if (props.formType === 'login') {
        return '#CAEEBE';
      } else if (props.formType === 'signup') {
        return '#98E2F7';
      } else if (props.formType === 'resetPassword') {
        return '#FEC98F';
      }
    }};
  }
`;

export const Text = styled.p`
  font-size: 14px;
  padding: 10px 0;
`;

export const SmallText = styled.p`
  font-size: 12px;
  padding: 10px 0;
`;

export const RouteLink = styled(Link)`
  text-decoration: none;
  border-bottom: 2px solid black;
  color: inherit;
`;
export const ErrorMessage = styled.div`
  font-size: 12px;
  padding: 10px 0;
  max-width: 100%;
  background-color: #f8abb3;
  text-align: center;
  border-radius: 5px;
  padding: 3px;
`;
