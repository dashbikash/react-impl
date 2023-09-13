import { MantineThemeOverride } from "@mantine/core";

export const DefaultTheme: MantineThemeOverride = {
    colors: {
        brand: [
            "#e9eaff",
            "#c7c9ff",
            "#9fa6ff",
            "#7182ff",
            "#4963ff",
            "#0044ff",
            "#003af3",
            "#002ee6",
            "#001fdb",
            "#0000cc"
        ],
    },

    primaryColor: 'brand',
    colorScheme: 'light'
};

export const TealTheme: MantineThemeOverride = {
    colors: {
        brand: [
            '#e0f2f1',
            '#b3e0db',
            '#80cbc4',
            '#4db6ac',
            '#26a69a',
            '#009688',
            '#008e80',
            '#008375',
            '#00796b',
            '#006858'
        ],
    },

    primaryColor: 'brand',
    colorScheme: 'light'
};