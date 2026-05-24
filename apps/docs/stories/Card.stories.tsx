import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from '@lollypop-ui/core';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here. You can put any content inside.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Click the button below to create your account and get started.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Card className="w-[350px]" variant="bordered">
      <CardHeader>
        <CardTitle>Bordered Card</CardTitle>
        <CardDescription>This card has a border.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content inside a bordered card.</p>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card className="w-[350px]" variant="elevated">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>This card has a shadow.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content inside an elevated card.</p>
      </CardContent>
    </Card>
  ),
};
