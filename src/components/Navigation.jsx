import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText href="/">Home</NavText>
                    </NavItem>
                    <NavItem eventKey="list">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText eventKey="link-2" href="/questionlist">Question List</NavText>
                        </NavItem>
                        <NavItem eventKey="form">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText eventKey="link-1" href="/questionform">Question Form</NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        )
    }
}


        // <h2 className='header'>JUUSTO VAI KINKKU?</h2>
        // <Nav className="justify-content-center" activeKey="/">
        //   <Nav.Item>
        //     <Nav.Link href="/">Home</Nav.Link>
        //   </Nav.Item>
        //   <Nav.Item>
        //     <Nav.Link eventKey="link-2" href="/questionlist">Question List</Nav.Link>
        //   </Nav.Item>
        //   <Nav.Item>
        //     <Nav.Link eventKey="link-1" href="/questionform">Question Form</Nav.Link>
        //   </Nav.Item>

        // </Nav>