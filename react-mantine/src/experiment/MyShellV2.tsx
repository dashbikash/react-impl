import {
    AppShell,
    Burger,
    Group,
    Header,
    MediaQuery,
    Menu,
    NavLink,
    Navbar,
    Text,
    createStyles,
    rem,
    useMantineTheme
} from '@mantine/core';
import { useState } from 'react';

import { FaPlusCircle, FaSearch, FaUserCircle } from 'react-icons/fa';
import { MdAnalytics, MdCategory, MdDashboard, MdLabel, MdLogout, MdManageAccounts } from "react-icons/md";


const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        borderBottom: 0,
        paddingLeft: 5,
        paddingRight: 5,
        color: 'white'
    },

    inner: {
        height: rem(56),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },



    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.md,
        textDecoration: 'none',
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                0.1
            ),
        },
    },

    linkLabel: {
        marginRight: rem(5),
    },

    user: {
        color: theme.white,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
                0.1
            ),
        },

        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },
    navLink: {
        borderRadius: theme.radius.md,
    }
}));

export default function MyShellV2() {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            layout='default'
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} onClick={() => { setOpened(false) }}>
                    
                    <NavLink
                        label="Dashboard"
                        icon={<MdDashboard size="1rem" stroke="1.5" />}
                        variant="light"
                        className={classes.navLink}
                        active
                    />
                    <NavLink
                        label="Search"
                        icon={<FaSearch size="1rem" stroke="1.5" />}
                        variant="light"
                        className={classes.navLink}
                        
                    />
                    <NavLink
                        label="Create"
                        icon={<FaPlusCircle size="1rem" stroke="1.5" />}
                        variant="light"
                        className={classes.navLink}
                        
                    />
                    <NavLink
                        label="Catagories"
                        icon={<MdCategory size="1rem" stroke="1.5" />}
                        childrenOffset={28}
                    >
                        <NavLink label="First child link" />
                        <NavLink label="Second child link" />
                        <NavLink label="Nested parent link" childrenOffset={28}>
                            <NavLink label="First child link" />
                            <NavLink label="Second child link" />
                            <NavLink label="Third child link" active />
                        </NavLink>
                    </NavLink>

                    <NavLink
                        label="Labels"
                        icon={<MdLabel size="1rem" stroke="1.5" />}
                        childrenOffset={28}
                        defaultOpened
                    >
                        <NavLink label="First child link" />
                        <NavLink label="Second child link" />
                        <NavLink label="Third child link" />
                    </NavLink>

                </Navbar>
            }
            header={
                <Header height={56} className={classes.header} mb={120}>

                    <div className={classes.inner}>
                        <Group>
                            <Burger
                                className={classes.burger}
                                opened={opened}
                                onClick={() => setOpened((openStatus) => !openStatus)}
                                size="sm"
                                color='white'
                                mr="xl"
                            />
                            <MdAnalytics size={28} color='yellow' /><Text style={{ fontWeight: 'bold', fontSize: 22 }} >Vidura</Text>
                        </Group>

                        <Group ml={50} spacing={5}>
                            
                            <Menu width={200} shadow="md">
                                <Menu.Target>
                                    <a className={classes.link} href='#' onClick={(event) => {
                                        event.preventDefault();
                                    }} style={{ fontSize: 18 }}><FaUserCircle /></a>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Item
                                        icon={<MdManageAccounts size={rem(14)} />}
                                        component="a"
                                        href="https://mantine.dev"
                                    >
                                        Manage
                                    </Menu.Item>

                                    <Menu.Item
                                        icon={<MdLogout size={rem(14)} />}
                                        component="a"
                                        href="https://mantine.dev"
                                    >
                                        Sign out
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    </div>

                </Header>
            }
        >
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
}