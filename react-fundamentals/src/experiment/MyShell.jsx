import {
    AppShell,
    Burger,
    Header,
    MediaQuery,
    NavLink,
    Navbar,
    Text,
    createStyles,
    useMantineTheme
} from '@mantine/core';
import { useState } from 'react';


import { FaPlusCircle } from 'react-icons/fa';
import { MdAnalytics, MdCategory, MdDashboard, MdFilterAlt } from "react-icons/md";

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        borderBottom: 0,
        color: 'white',
        boxShadow: 'unset'
    }
}));

export default function MyShell() {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            layout='default'
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    <NavLink
                        label="Create"
                        icon={<FaPlusCircle size="1rem" stroke={1.5} />}
                        variant="light"
                        className={classes.navLink}
                        active
                    />
                    <NavLink
                        label="Dashboard"
                        icon={<MdDashboard size="1rem" stroke={1.5} />}
                        variant="light"
                        className={classes.navLink}
                    />
                    <NavLink
                        label="First parent link"
                        icon={<MdCategory size="1rem" stroke={1.5} />}
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
                        label="Second parent link"
                        icon={<MdFilterAlt size="1rem" stroke={1.5} />}
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
                <Header height={{ base: 50, md: 50 }} p="md" className={classes.header}>
                    <div style={{ display: 'flex', alignItems: 'left', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((status) => !status)}
                                size="sm"
                                color='white'
                                mr="xl"
                            />
                        </MediaQuery>

                        <MdAnalytics /> <Text style={{ marginLeft: 5 }}>Brand</Text>

                    </div>
                </Header>
            }
        >
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
}