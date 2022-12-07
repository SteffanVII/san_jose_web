import Link from 'next/link';
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import style from "../styles/Layout.module.scss";
import NavDropdown from './NavDropdown';

interface LayoutProps {
    children : ReactNode
}

function Layout( props : LayoutProps ) {

    return (
        <div className={style.layout}>
            <header>
                    <img src="san_jose_seal.png" alt="Barangay Tuy Official Seal" id={style.sanjose_seal}/>
                    <Link href={'/'}>
                        <h1>Barangay San Jose</h1>
                        <h2>Bayan ng Tuy</h2>
                    </Link>
                    <nav id='main_nav'>
                        <Link href={"/"} >Home</Link>
                        <NavDropdown title='Services' links={[
                            { title : "Certificates & Clearances", url : "/documentrequestportal" },
                            { title : "Downloadable Documents", url : "/services/brc" },
                        ]}/>
                        <NavDropdown title='Our Barangay' links={[
                            { title : "General Information", url : "/barangay/brc" },
                            { title : "Barangay Officials", url : "/barangay/brc" },
                            { title : "History", url : "/barangay/bsc" },
                        ]}/>
                        <Link href={"/"}>Contact Us</Link>
                    </nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer>

            </footer>
        </div>
    );

}

export default Layout;