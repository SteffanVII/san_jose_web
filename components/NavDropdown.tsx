import Link from "next/link";
import { useState } from "react";
import style from "../styles/components/NavDropdown.module.scss";
import { useOutsideClick } from "../utilities/utils";

interface NavDropdownProps {
    title : string,
    links : { title : string, url : string }[]
}

function NavDropdown( props : NavDropdownProps ) {
    const [ show, setShow ] = useState(false);

    const outsideClick = useOutsideClick(() => {
        setShow(false);
    })

    function toggle() {
        setShow(!show);
    }

    return (
        <div
            ref={outsideClick}
            className={style.nav_dropdown + " " + (show ? style.nav_dropdown_shown : "") }
            onClick={() => {
                toggle();
            }}
        >
            {props.title}
            <div className={style.dropdown_links_container}>
                { Array.from(props.links).map( element => <Link href={element.url} >{element.title}</Link> ) }
            </div>
        </div>
    );
}

export default NavDropdown;