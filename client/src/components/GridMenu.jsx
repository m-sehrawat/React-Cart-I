import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { gridSize } from "../helpers/extrafunctions";
import { setItem } from "../helpers/sessionStorage";
import { setGrid } from "../redux/allProducts/actions";

export const GridMenu = () => {

    const dispatch = useDispatch();

    const handleGrid = ({ target: { value } }) => {
        const payload = gridSize(+value);
        dispatch(setGrid(payload));
        setItem("grid", payload.grid);
        setItem("size", payload.size);
    }

    return (
        <>
            <Menu>
                <MenuButton as={Button} display={['none', 'none','none', 'inline-block']} rightIcon={<BsFillCaretDownFill />}>Grid</MenuButton>
                <MenuList>
                    <MenuItem onClick={handleGrid} value={2}>(2 X 3) Products Grid</MenuItem>
                    <MenuItem onClick={handleGrid} value={3}>(3 X 3) Products Grid</MenuItem>
                    <MenuItem onClick={handleGrid} value={4}>(4 X 3) Products Grid</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};