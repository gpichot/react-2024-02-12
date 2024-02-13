import { Meta, StoryObj } from "@storybook/react";
import InputControl from "./InputControl";

const meta: Meta<typeof InputControl> = {
  title: "InputControl",
  component: InputControl,
};

export default meta;

type Story = StoryObj<typeof InputControl>;

export const Default: Story = {
  args: {
    label: "Street name",
    name: "streetName",
    placeholder: "42 rue de la Paix",
  },
};
