import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';


class TopStaticMainNav extends React.Component {

    hideSelfOnScroll() {
        console.log('hiding self on scroll');
    }

    componentDidMount() {
        if (window) {
            /* todo to use state to track if an event listener been added  */
            window.addEventListener('scroll', this.hideSelfOnScroll);
        }
    }

    render() {

        const buildTopStaticMainNavIcons = () => {
            const data = [
                { to: 'contacts', link: true, icon: "im im-mail" },
                { to: '/index.php/ru/ru-contacts', link: false, icon: "im im-mail" },
                { to: 'https://www.instagram.com/vl_bez_granic', link: false, icon: "im im-instagram" },
                { to: 'https://api.whatsapp.com/send?phone=+35699503677', link: false, icon: "im im-whatsapp" },
            ];

            const links = data.map((lnk, idx) => {
                const linkClass = 'text-white font-weight-bold';
                const Icon = ()=> <i className={lnk.icon}></i>;
                console.log('idx',idx);

                const elem = <Nav.Item key={lnk.to}  >
                    {(() => lnk.link
                            ?
                            <Link to={lnk.to} active={(idx === 0).toString()} className={linkClass}><Icon /></Link>
                            :
                            <Nav.Link href={lnk.to} active={(idx === 0).toString()} className={linkClass}><Icon /></Nav.Link>)()
                    }
                </Nav.Item>;

                return elem;

            });
            //console.log(links);
            return links;
        };
        const links = buildTopStaticMainNavIcons();
        return (
            <Navbar className="bg-success">
                <Container fluid>
                    <Row className="no-gutters-sm justify-content-between">

                        <Link to='/' className="col-6 navbar-brand text-white d-none d-md-flex font-weight-bold ">WITHOUT BORDERS</Link>
                        <Col md={5} xs={12}>
                            <Nav as={"ul"} className="flex-fill d-flex flex-row justify-content-around">
                                {[...links]}
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        );
    }
}


export default TopStaticMainNav;




