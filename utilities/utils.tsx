import { MutableRefObject, useEffect, useRef } from "react";

export function useOutsideClick( callback : Function ) : MutableRefObject<null> {
    
    const ref = useRef(null);
    
    useEffect(() => { 
        function clickHandler(e : Event) {
            if ( ref.current && !(ref.current as Element).contains(event?.target as Element) ) {
                callback();
            }
        }
        document.addEventListener("mousedown", clickHandler);
        // if ( ref.current ) document.removeEventListener("mousedown", clickHandler);
    }, []);



    return ref;
}