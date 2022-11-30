// import React from "react";
// import { Form, NavLink } from "react-router-dom";
// import styled, { css } from "styled-components";

// const flexTrue = `
//   display: flex;
//   align-items: center;
// `;

// export const Container = styled.div`
//   margin: ${({ margin }) => margin ?? "0 auto"};
//   text-align: ${({ textAlign }) => textAlign ?? "center"};
//   padding: ${({ padding }) => padding ?? "0"};
//   width: ${({ width }) => width ?? "100%"};
//   height: ${({ height }) => height ?? "100%"};
//   ${"" /* min-height: ${({ minHeight }) => minHeight ?? "100%"}; */}
//   background: ${({ background }) => background ?? "none"};
//   border-radius: ${({ borderRadius }) => borderRadius ?? "0"};
//   box-shadow: ${({ theme, boxShadow }) =>
//     boxShadow ? theme.boxShadow.regular : "none"};
//   -webkit-box-shadow: ${({ theme, boxShadow }) =>
//     boxShadow ? theme.boxShadow.regular : "none"};
//   -moz-box-shadow: ${({ theme, boxShadow }) =>
//     boxShadow ? theme.boxShadow.regular : "none"};
//   vertical-align: middle;
//   ${({ center }) =>
//     center
//       ? `
//     position: relative;
//     transform: translateY(-50%);
//     top: 50%;
//   `
//       : ""};
// `;

// export const Flex = styled(Container)`
//   display: flex;
//   justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
//   align-items: ${({ alignItems }) => alignItems ?? "center"};
//   flex-direction: ${({ flexDirection }) => flexDirection ?? "row"};
//   ${({ center }) =>
//     center
//       ? `
//     position: relative;
//     transform: translateY(-50%);
//     top: 50%;
//   `
//       : ""};
// `;

// export const StyledForm = styled(Form)`
//   margin: ${({ margin }) => margin ?? "0 auto"};
//   padding: ${({ padding }) => padding ?? "0"};
//   box-shadow: ${({ theme, boxShadow }) =>
//     boxShadow ? theme.boxShadow.regular : "none"};
//   -webkit-box-shadow: ${({ theme, boxShadow }) =>
//     boxShadow ? theme.boxShadow.regular : "none"};
//   -moz-box-shadow: ${({ theme, boxShadow }) =>
//     boxShadow ? theme.boxShadow.regular : "none"};
//   border-radius: 0.2rem;

//   .form-group {
//     text-align: left;
//     padding: ${({ padding }) => padding ?? "0"};
//     margin: ${({ margin }) => margin ?? "0 0 1rem"};
//     display: flex;
//     flex-direction: column;
//     gap: 0.8rem;
//     width: 100%;
//   }

//   .form-group input {
//     padding: 0.5rem;
//     margin: ${({ margin }) => margin ?? "0"};
//     border: 1px solid black;
//     border-radius: 0.2rem;
//   }

//   .form-group label {
//     font-size: ${({ theme }) => theme.fonts.sm};
//     margin: ${({ margin }) => margin ?? "0 0 0.05rem"};
//     padding: ${({ padding }) => padding ?? "0"};
//     color: ${({ theme }) => theme.colors.darkestGray};
//   }
// `;

// export const Header = styled.h1`
//   font-size: ${({ theme }) => theme.fonts.xxl};
//   margin: ${({ margin }) => margin ?? "0"};
//   font-weight: bold;
// `;

// export const SubHeader = styled.h2`
//   font-size: ${({ theme }) => theme.fonts.xl};
//   margin: ${({ margin }) => margin ?? "0"};
//   font-weight: light;
// `;

// export const Title = styled.h3`
//   font-size: ${({ theme }) => theme.fonts.lg};
//   margin: ${({ margin }) => margin ?? "0"};
//   font-weight: light;
// `;

// export const Subtitle = styled.h5`
//   font-size: ${({ theme }) => theme.fonts.md};
//   margin: ${({ margin }) => margin ?? "0"};
//   font-weight: light;
// `;

// export const Paragraph = styled.p`
//   font-size: ${({ theme }) => theme.fonts.sm};
//   margin: ${({ margin }) => margin ?? "0"};
//   color: ${({ color, theme }) => color ?? theme.colors.darkGray};
//   font-weight: ${({ fontWeight }) => fontWeight ?? "lighter"};
// `;

// export const Text = styled(Paragraph)`
//   font-size: ${({ theme }) => theme.fonts.xs};
// `;

// export const Span = styled.span`
//   font-size: ${({ fontSize, theme }) => fontSize ?? theme.fonts.sm};
//   margin: ${({ margin }) => margin ?? "0"};
//   font-weight: lighter;
// `;

// export const Button = styled.button`
//   background: ${({ theme }) => theme.colors.primary};
//   color: ${({ theme }) => theme.colors.white};
//   margin: ${({ margin }) => margin ?? "0"};
//   border: 0;
//   padding: 1rem 2rem;
//   width: 100%;
//   border-radius: 0.4rem;
// `;

// export const LogoutButton = styled(Button)`
//   background: none;
//   position: absolute;
//   bottom: 1rem;
//   left: 0;
//   color: ${({ theme }) => theme.colors.darkGray};
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   &:hover {
//     cursor: pointer;
//     color: ${({ theme }) => theme.colors.midError};
//   }
// `;

// export const Grid = styled(Container)`
//   display: grid;
//   grid-template-columns: ${({ column }) => column ?? "1rem"};
//   grid-template-rows: ${({ row }) => row ?? "1rem"};
// `;

// export const Image = styled.img`
//   ${(props) => {
//     switch (props.$type) {
//       case "profile":
//         return css`
//           border-radius: 50%;
//           height: 3rem;
//           width: 3rem;
//           background: blue;
//           margin: ${({ margin }) => margin ?? "0"};
//         `;
//       default:
//         return css`
//           border-radius: ${({ borderRadius }) => borderRadius ?? "0"};
//           background: ${({ background }) => background ?? "none"};
//         `;
//     }
//   }}
// `;

// export const UnorderedList = styled.ul`
//   text-align: ${({ textAlign }) => textAlign ?? "center"};
//   margin: ${({ margin }) => margin ?? "0"};
//   padding: ${({ padding }) => padding ?? "0"};
// `;

// export const OrderedList = styled.ol``;

// export const List = styled.li`
//   text-align: ${({ textAlign }) => textAlign ?? "center"};
//   margin: ${({ margin }) => margin ?? "0"};
//   padding: ${({ padding }) => padding ?? "0"};
//   color: ${({ theme }) => theme.colors.darkGray};
//   font-weight: bold;
//   vertical-align: middle;
//   ${flexTrue}
// `;

// export const Link = styled(NavLink)`
//   ${(props) => {
//     switch (props.$type) {
//       case "sidebar":
//         return css`
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           text-decoration: none;
//           font-size: ${({ theme }) => theme.fonts.sm};
//           color: ${({ theme }) => theme.colors.darkGray};
//           margin: 0.5rem auto;
//           width: 30%;

//           svg {
//             font-size: 1rem;
//             color: ${({ theme }) => theme.colors.primary};
//           }

//           &:hover div,
//           &.active div {
//             background-color: ${({ theme }) => theme.colors.primary};
//           }

//           &:hover svg,
//           &.active svg {
//             color: white;
//           }

//           &:hover p,
//           &.active p {
//             color: ${({ theme }) => theme.colors.primary};
//           }
//         `;
//       default:
//         return css`
//           border-radius: ${({ borderRadius }) => borderRadius ?? "0"};
//           background: ${({ background }) => background ?? "none"};
//         `;
//     }
//   }}
// `;
