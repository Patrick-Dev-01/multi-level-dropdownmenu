import { MenuItems } from "./MenuItems";

interface Submenu{
    title: string;
}

interface DropdownProps{
    submenus: Submenu[]
    dropdown: boolean;
    depthLevel: number;
}

const Dropdown = ({ submenus, dropdown, depthLevel }: DropdownProps) => {

    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

    return ( 
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`} > 
            {submenus.map((submenu, index) => ( 
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))
        } 
        </ul>
    );
};

export default Dropdown;