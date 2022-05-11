import { Button, Center, Flex, Heading, Spacer, useColorMode } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setItem } from "../helpers/sessionStorage";
import { setGender } from "../redux/allProducts/actions";
import { Logout } from "./Logout";
import { NavButton } from "./MiniComponents";
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

export const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const dispatch = useDispatch();
    const { token, user } = useSelector((state) => state.authReducer, shallowEqual)

    const handleGenderChange = () => {
        dispatch(setGender("allProducts"));
        setItem("isGender", "allProducts");
    }

    return (
        <>
            <Flex top={'0px'} bg={colorMode === "dark" ? '#1a202c' : 'white'} h={14} pr={'10px'} w={'100%'} shadow={'sm'} pos={'fixed'} zIndex={2}>
                <Center>
                    <Link to={'/'}>
                        <Heading ml={5} display={['none', 'block']} fontSize={'20px'}>Mini Store</Heading>
                    </Link>
                </Center>
                <Spacer />
                <Center>
                    <NavButton name={'Home'} path={'/'} />
                    <NavButton onClick={handleGenderChange} name={'Products'} path={'/products'} />
                    {!!token ? <Logout name={user.name} /> : <NavButton name={'Login'} path={'/login'} />}
                    <Button bg={'transparent'} onClick={toggleColorMode}>
                        {colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
                    </Button>
                </Center>
            </Flex>
        </>
    );
};
