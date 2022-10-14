import React from 'react'
import Button from './Button'
import Center from '../Center/Center'

export default {
    title: 'Nikhil/Button',
    component: Button,
    // args : {
    //     children: 'Button',
    // },
    // decorator:[story => <Center>{story()}</Center>]
}


export const PrimaryOne = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>
export const Warning = () => <Button variant="warning">Warning</Button>
export const Info = () => <Button variant="info">Info</Button>

PrimaryOne.storyName = 'Primary';

const Tamplate = args =>{
    return <Button {...args} />
}

export const PrimaryA = Tamplate.bind({});
PrimaryA.args = {
    variant: 'primary',
}
export const longPrimaryA = Tamplate.bind({});
longPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary Button',
}


export const SecondaryA = Tamplate.bind({});
SecondaryA.args = {
    variant: 'secondary',
}
