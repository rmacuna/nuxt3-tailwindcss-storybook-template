import { Meta, StoryObj } from "@storybook/vue3";

// Create the story for this button
import Button from "~/components/Button/Button.vue";

const meta: Meta<typeof Button> = {
  title: "UI / Button",
  component: Button,
  render: (args) => ({
    components: { Button }, // Notice that `MyComponent` is not imported here
    setup: () => ({ args }),
    template: `
      <Button class="bg-black" />
    `,
  }),
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    class: "bg-black"
  }
};
