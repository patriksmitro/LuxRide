import React from "react";
import styled, { css } from "styled-components";

import { menuItems } from "./navmenudata/navMenuItemsData";

import { Theme } from "@/styles/theme.styles";
import NavMenuItems from "./NavMenuItems";
interface Props {
  isOpened: boolean;
  screenWidth: boolean;
  onClick: () => void;
}
const UnorderedList = styled.ul`
  display: flex;
  padding-left: 32px;

  @media only screen and (max-width: 920px) {
    flex-direction: column;
    padding: 24px;
    a {
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

const NavMenuWrapper = styled.div<Props>`
  ${(props) =>
    props.screenWidth &&
    `


@media only screen and (max-width: 920px) {
  position: fixed;
  transition: transform 0.5s ease-in-out;
  top: 80px;
  z-index: 99;
  left: 0;
  ${
    props.isOpened
      ? css`
          transform: translate(0);
        `
      : css`
          transform: translate(100%);
        `
  }
  width: 100%;
  height: 100vh;
  background-color: ${Theme.colors.white};
  flex-direction: column;
}
`}
`;
const NavList = ({ isOpened, screenWidth, onClick }: Props) => {
  return (
    <NavMenuWrapper
      isOpened={isOpened}
      screenWidth={screenWidth}
      onClick={onClick}
    >
      {" "}
      {/* NEchapem tomu */}
      <UnorderedList>
        {menuItems.map(
          (menu: { title: string; url: string }, index: number) => {
            return (
              <NavMenuItems
                onClick={onClick}
                key={index}
                title={menu.title}
                screenWidth={screenWidth}
                url={menu.url}
              />
            );
          }
        )}
      </UnorderedList>
    </NavMenuWrapper>
  );
};

export default NavList;
