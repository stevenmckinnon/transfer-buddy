import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Nav: React.FC<{}> = () => (
    <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="#">Transfer Buddy</NavbarBrand>
    </Navbar>
);

export default Nav;