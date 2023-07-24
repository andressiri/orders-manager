import { FC } from "react";
import { useLocation, Link } from "react-router-dom";
import { AppLogo } from "../../../assets";
import { ITEMS_ROUTE, ORDERS_ROUTE } from "../../../config/constants";
import { Container, LogoLink } from "./styledComponents";
import { StyledButton } from "../..";

const Header: FC = () => {
  const { pathname } = useLocation();
  const isOrdersPath = pathname === `/${ORDERS_ROUTE}`;

  return (
    <Container>
      <LogoLink to={"/"}>
        <AppLogo />
        OM
      </LogoLink>
      {isOrdersPath ? (
        <Link to={`/${ITEMS_ROUTE}`}>
          <StyledButton BGType="primaryContrastBG" tabIndex={-1}>
            Items
          </StyledButton>
        </Link>
      ) : (
        <Link to={`/${ORDERS_ROUTE}`}>
          <StyledButton BGType="primaryContrastBG" tabIndex={-1}>
            Orders
          </StyledButton>
        </Link>
      )}
    </Container>
  );
};

export default Header;
