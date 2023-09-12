import { useState } from 'react';
import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme, NavLink, createStyles, Container
} from '@mantine/core';

import { IconGauge, IconFingerprint, IconActivity, IconDashboard, IconBrandReact } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    header: {
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        borderBottom: 0,
        color: 'white',
        boxShadow:'unset'
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
                        label="Active filled"
                        icon={<IconDashboard size="1rem" stroke={1.5} />}
                        variant="filled"
                    />
                    <NavLink
                        label="First parent link"
                        icon={<IconGauge size="1rem" stroke={1.5} />}
                        childrenOffset={28}
                    >
                        <NavLink label="First child link" />
                        <NavLink label="Second child link" />
                        <NavLink label="Nested parent link" childrenOffset={28}>
                            <NavLink label="First child link" />
                            <NavLink label="Second child link" />
                            <NavLink label="Third child link" />
                        </NavLink>
                    </NavLink>

                    <NavLink
                        label="Second parent link"
                        icon={<IconFingerprint size="1rem" stroke={1.5} />}
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
                        
                        <IconBrandReact/> <Text style={{marginLeft:5}}>Brand</Text>

                    </div>
                </Header>
            }
        >
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
}