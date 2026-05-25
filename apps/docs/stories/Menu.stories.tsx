import type { Meta, StoryObj } from '@storybook/react';
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  Button,
} from '@lollypop-ui/core';
import { useState } from 'react';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>My Account</MenuLabel>
        <MenuSeparator />
        <MenuItem>Profile</MenuItem>
        <MenuItem>Billing</MenuItem>
        <MenuItem>Team</MenuItem>
        <MenuItem>Subscription</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const WithCheckboxes: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    return (
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">View</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Status Bar
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            Activity Bar
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
            Panel
          </MenuCheckboxItem>
        </MenuContent>
      </Menu>
    );
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    const [position, setPosition] = useState('bottom');

    return (
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">Panel Position</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuLabel>Position</MenuLabel>
          <MenuSeparator />
          <MenuRadioGroup value={position} onValueChange={setPosition}>
            <MenuRadioItem value="top">Top</MenuRadioItem>
            <MenuRadioItem value="bottom">Bottom</MenuRadioItem>
            <MenuRadioItem value="right">Right</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    );
  },
};
