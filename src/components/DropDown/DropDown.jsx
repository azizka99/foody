import style from './dropdown.module.css';
import Image from "next/image";
import DropdownItem from "@/components/DropDown/DropdownItem";
import {useEffect, useRef, useState} from "react";
function DropDown(props) {
    const [open, setOpen] = useState(false)
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current?.contains(e.target)){
              setOpen(false);
            }
        }

        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, []);

    return (
       <div ref={menuRef} className={style.menuContainer}>
           <div onClick={()=>setOpen(!open)} className={style.menuTrigger}>
               <p>Type</p>
               <Image src={'/images/icons/arrowDown.svg'} alt={'arrowDown'} width={13} height={23}/>
           </div>

           {open && (<div className={style.dropdownMenu}>
               <ul >
                   <DropdownItem text={'salam'}/>
                   <DropdownItem text={'sagol'}/>
                   <DropdownItem text={'siktir'}/>
               </ul>
           </div>)}
       </div>
    );
}

export default DropDown;