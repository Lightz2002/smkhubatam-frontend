import React from "react";
import { theme } from "../../utilities/constant";
import {
  Container,
  Flex,
  Image,
  Subtitle,
  Paragraph,
  Span,
} from "../styles/UI";

const DashboardNavbar = ({ user, className }) => {
  return (
    <Container
      className={className}
      padding="1rem"
      background="#e6e7e7"
      height="5rem"
      textAlign="left"
    >
      <Flex width="40%" margin="0 0">
        <Container width="20%">
          <Image
            src="https://images.ctfassets.net/hrltx12pl8hq/go6z2gBaTMDvTrtoOipOw/3b9d21ff7003ca392a2daeb569d629fc/shutterstock_1802211250.jpg?fit=fill&w=175&h=175&fm=webp"
            $type="profile"
            alt="test"
          />
        </Container>
        <Container width="80%" textAlign="left">
          <Subtitle>
            Welcome Back,
            <Span fontSize={theme.fonts.md} fontWeight="light">
              {" "}
              {user.Name}
            </Span>
          </Subtitle>
          <Paragraph>{user.Role.Name}</Paragraph>
        </Container>
      </Flex>
      {/* 
      Flex
        ProfilePicture
        ProfileDescription
          User
          Role
     */}
    </Container>
  );
};

export default DashboardNavbar;
