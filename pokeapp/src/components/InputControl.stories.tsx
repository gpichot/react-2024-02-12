import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByLabelText("Street name");

    await userEvent.type(input, "32 rue Massy", {
      delay: 100,
    });
  },
};
