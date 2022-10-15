import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  margin: ${({ margin }) => margin ?? "0 auto"};
  padding: ${({ padding }) => padding ?? "0"};
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "100%"};
  background: ${({ background }) => background ?? "none"};
  border-radius: ${({ borderRadius }) => borderRadius ?? "none"};
  box-shadow: ${({ theme, boxShadow }) =>
    boxShadow ? theme.boxShadow.regular : "none"};
  -webkit-box-shadow: ${({ theme, boxShadow }) =>
    boxShadow ? theme.boxShadow.regular : "none"};
  -moz-box-shadow: ${({ theme, boxShadow }) =>
    boxShadow ? theme.boxShadow.regular : "none"};
`;

export const Flex = styled(Container)`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  align-items: ${({ alignItems }) => alignItems ?? "center"}; ;
`;

export const Form = styled.form`
  margin: ${({ margin }) => margin ?? "0 auto"};
  padding: ${({ padding }) => padding ?? "0"};
  box-shadow: ${({ theme, boxShadow }) =>
    boxShadow ? theme.boxShadow.regular : "none"};
  -webkit-box-shadow: ${({ theme, boxShadow }) =>
    boxShadow ? theme.boxShadow.regular : "none"};
  -moz-box-shadow: ${({ theme, boxShadow }) =>
    boxShadow ? theme.boxShadow.regular : "none"};
  border-radius: 0.2rem;

  .form-group {
    text-align: left;
    padding: ${({ padding }) => padding ?? "0"};
    margin: ${({ margin }) => margin ?? "0 0 1rem"};
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
  }

  .form-group input {
    padding: 0.5rem;
    margin: ${({ margin }) => margin ?? "0"};
    border: 1px solid black;
    border-radius: 0.2rem;
  }

  .form-group label {
    font-size: ${({ theme }) => theme.fonts.sm};
    margin: ${({ margin }) => margin ?? "0 0 0.05rem"};
    padding: ${({ padding }) => padding ?? "0"};
    color: ${({ theme }) => theme.colors.darkestGray};
  }
`;

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xl};
  margin: ${({ margin }) => margin ?? "0"};
  font-weight: bold;
`;

export const SubHeader = styled.h2`
  font-size: ${({ theme }) => theme.fonts.lg};
  margin: ${({ margin }) => margin ?? "0"};
  font-weight: light;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.md};
  margin: ${({ margin }) => margin ?? "0"};
  font-weight: light;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  margin: ${({ margin }) => margin ?? "0"};
  border: 0;
  padding: 1rem 2rem;
  width: 100%;
  border-radius: 0.4rem;
`;
