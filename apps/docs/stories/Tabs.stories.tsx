import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@lollypop-ui/core';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Account Settings</h3>
          <p className="text-sm text-neutral-500">
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Password Settings</h3>
          <p className="text-sm text-neutral-500">Change your password here.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 border rounded-lg">Overview content</div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4 border rounded-lg">Analytics content</div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4 border rounded-lg">Reports content</div>
      </TabsContent>
    </Tabs>
  ),
};
