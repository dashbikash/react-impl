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
    Autocomplete,
    useMantineTheme, NavLink, createStyles, Container, Group, rem, Menu, Button
} from '@mantine/core';

import { IconGauge, IconFingerprint, IconActivity, IconDashboard, IconBrandReact, IconSearch, IconExternalLink, IconUser, IconUserCircle } from '@tabler/icons-react';

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
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background || undefined,
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
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background || undefined,
                0.1
            ),
        },

        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },
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
                            <NavLink label="Third child link" active />
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
                <Header height={56} className={classes.header} mb={120}>
                    <Container>
                        <div className={classes.inner}>
                            <Group>
                                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                    <Burger
                                        opened={opened}
                                        onClick={() => setOpened((status) => !status)}
                                        size="sm"
                                        color='white'
                                        mr="xl"
                                    />
                                </MediaQuery>
                                <IconBrandReact size={28} /> <Text style={{ marginLeft: 5 }}>Brand</Text>
                            </Group>

                            <Group ml={50} spacing={5}>
                            <a className={classes.link} href='#' onClick={(event) => {
                                            event.preventDefault();
                                        }}><IconSearch /></a>
                                <Menu width={200} shadow="md">
                                    <Menu.Target>
                                        <a className={classes.link} href='#' onClick={(event) => {
                                            event.preventDefault();
                                        }}><IconUserCircle /></a>
                                    </Menu.Target>

                                    <Menu.Dropdown>
                                        <Menu.Item component="a" href="https://mantine.dev">
                                            Mantine website
                                        </Menu.Item>

                                        <Menu.Item
                                            icon={<IconExternalLink size={rem(14)} />}
                                            component="a"
                                            href="https://mantine.dev"
                                            target="_blank"
                                        >
                                            External link
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Group>
                        </div>
                    </Container>

                </Header>
            }
        >
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
}