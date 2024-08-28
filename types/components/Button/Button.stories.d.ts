import type { StoryObj } from '@storybook/react';
import Button from "./Button";
declare const meta: {
    title: string;
    component: typeof Button;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: string;
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<any, any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
