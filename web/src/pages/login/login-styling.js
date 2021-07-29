import styled from "styled-components";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/main-logo.png";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 470px;
  height: auto;

  padding: 4rem 2rem 2rem 2rem;
  background-color: var(--white);
  border-radius: 10px;
`;

export const Logo = styled.img`
  margin-bottom: 2rem;
  height: 201.76px;
  width: 144.63px;
`;

Logo.defaultProps = {
  src: mainLogo,
};

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;
`;

export const BottomLabel = styled.span`
  width: 100%;
  color: var(--gray);
  font-size: 14px;

  display: flex;
  justify-content: left;
  margin-top: 1rem;
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  font-size: 14px;
  padding-right: 0.2rem;
  padding-left: 0.2rem;

  color: var(--eagle-purple);
`;

export const InputField = styled.input`
  height: calc(2.0625rem + 2px);
  width: 100%;
  border: none;

  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #495057;

  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const SubmitButton = styled.button`
  background: var(--eagle-purple);
  color: var(--white);
  cursor: pointer;
  border: none;

  border-radius: 3px;
  padding: 1rem 0.6rem 1rem 0.6rem;
  font-size: 15px;
  font-weight: 600;

  width: 100%;
`;
