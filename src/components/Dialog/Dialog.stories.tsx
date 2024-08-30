import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AlertDialog } from "./AlertDialog";
import React from "react";
import { DialogTrigger } from "react-aria-components";
import { Button } from "../Button/Button";
import { Modal } from "./Modal";

const meta = {
  title: "Components/Core/Dialog",
  component: AlertDialog,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DiscardTrip = (args: any) => (
  <DialogTrigger>
    <Button variant="outlined" color="danger">
      Discard trip
    </Button>
    <Modal>
      <AlertDialog {...args} />
    </Modal>
  </DialogTrigger>
);
export const DisconnectStrava = (args: any) => (
  <DialogTrigger>
    <Button variant="outlined" color="danger">
      Disconnect Strava
    </Button>
    <Modal>
      <AlertDialog {...args} />
    </Modal>
  </DialogTrigger>
);

DiscardTrip.args = {
  title: "Discard previous session",
  children:
    "Are you sure you want to discard the previous session? All unsaved changes will be lost. This cannot be undone.",
  variant: "destructive",
  actionLabel: "Discard",
};

DisconnectStrava.args = {
  title: "Disconnect Strava?",
  children:
    "This will remove the ability to import routes when creating a trip. Any trips you've already imported will stay unchanged.",
  variant: "destructive",
  actionLabel: "Disconnect",
};
