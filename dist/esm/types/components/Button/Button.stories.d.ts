import type { StoryObj } from "@storybook/react";
import { Button } from "./Button";
declare const meta: {
    title: string;
    component: typeof Button;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
