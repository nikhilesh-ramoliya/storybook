import { Button } from "@mui/material";
import { oneOf } from "prop-types";
import React from 'react'
import { text , boolean, number, select } from '@storybook/addon-knobs';

export default {
    title: 'nikhil/MuiButton',
    component: Button,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'text'],
            }
        },
        variant: {
            control: {
                type: 'select',
                options: ['text', 'outlined', 'contained'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        margin: {
            control: {
                type: 'select',
                options: ['none', 'dense', 'normal'],
            }
        },
        disabled: {
            control: {
                type: 'boolean',
            }
        }

    },
};



const Template = (args) => <Button {...args} />;
export const PrimaryA = Template.bind({});
PrimaryA.args = {
    children: 'Primary Args',
};
export const Log = Template.bind({});
Log.args = {
    children: 'Log Args',
}


export const Knobs = () => {
    return <Button variant="contained" disabled={boolean("disabled", false)} color="primary">{text('Label', 'Hello Storybook')}</Button>
}