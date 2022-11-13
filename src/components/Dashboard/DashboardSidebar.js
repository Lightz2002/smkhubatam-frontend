import React from "react";
import { Container, Image } from "../styles/UI";

const DashboardSidebar = ({ className }) => {
  return (
    <Container className={className} padding="1rem 0">
      <Image
        src="https://images.ctfassets.net/hrltx12pl8hq/go6z2gBaTMDvTrtoOipOw/3b9d21ff7003ca392a2daeb569d629fc/shutterstock_1802211250.jpg?fit=fill&w=175&h=175&fm=webp"
        $type="profile"
        alt="test"
      />
    </Container>
  );
};

export default DashboardSidebar;
