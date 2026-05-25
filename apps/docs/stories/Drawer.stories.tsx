import type { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Button,
  Input,
} from '@lollypop-ui/core';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer (Right)</Button>
      </DrawerTrigger>
      <DrawerContent side="right">
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>Make changes to your profile here.</DrawerDescription>
        </DrawerHeader>
        <div className="px-6 py-4 space-y-4">
          <Input label="Name" placeholder="John Doe" />
          <Input label="Email" placeholder="john@example.com" />
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};

export const Left: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer (Left)</Button>
      </DrawerTrigger>
      <DrawerContent side="left">
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerDescription>Navigate to different sections.</DrawerDescription>
        </DrawerHeader>
        <div className="px-6 py-4 space-y-2">
          <Button variant="ghost" fullWidth>
            Dashboard
          </Button>
          <Button variant="ghost" fullWidth>
            Projects
          </Button>
          <Button variant="ghost" fullWidth>
            Settings
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const Top: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer (Top)</Button>
      </DrawerTrigger>
      <DrawerContent side="top">
        <DrawerHeader>
          <DrawerTitle>Notification</DrawerTitle>
          <DrawerDescription>You have a new message!</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer (Bottom)</Button>
      </DrawerTrigger>
      <DrawerContent side="bottom">
        <DrawerHeader>
          <DrawerTitle>Cookie Settings</DrawerTitle>
          <DrawerDescription>Manage your cookie preferences.</DrawerDescription>
        </DrawerHeader>
        <div className="px-6 py-4">
          <p className="text-sm text-neutral-600">
            We use cookies to improve your experience on our site.
          </p>
        </div>
        <DrawerFooter>
          <Button>Accept</Button>
          <Button variant="outline">Decline</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
