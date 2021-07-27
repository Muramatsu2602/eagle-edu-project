import styled from "styled-components";
import dashboardIcon from "../../assets/dashboard-icon.png";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background-color: var(--white);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // this makes it sticky
  position: fixed;
  top: 0;
  width: 100%;

  // fancy shadows
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  z-index: 10;
`;

export const NavLogoSection = styled(Link)`
  color: var(--gray);
  margin-left: 1rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavIcon = styled(Link)`
  color: var(--gray);
  margin-left: 1rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  margin-right: 2rem;
  height: 70px;
`;

Logo.defaultProps = {
  src: dashboardIcon,
};

export const NavProfileSection = styled.div`
  color: var(--gray);
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarNav = styled.nav`
  background: var(--white);
  top: 80px;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;

  // shadow effect
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

export const SidebarTitle = styled.span`
  width: 100%;
  color: var(--gray);
  font-size: 16px;
  margin-left: 1rem;
`;
