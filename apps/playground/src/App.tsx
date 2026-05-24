import { useState } from 'react';
import {
  ThemeProvider,
  useTheme,
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@lollypop-ui/core';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '🌙' : '☀️'} Toggle Theme
    </Button>
  );
}

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ThemeProvider>
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <header className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold">Lollypop UI</h1>
              <p className="text-neutral-500 mt-2">
                A production-ready React component library
              </p>
            </div>
            <ThemeToggle />
          </header>

          <Tabs defaultValue="components" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="space-y-6">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Different button variants and sizes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger</Button>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Select</CardTitle>
                  <CardDescription>Choose from a list of options</CardDescription>
                </CardHeader>
                <CardContent>
                  <Select>
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Select a framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vue">Vue</SelectItem>
                      <SelectItem value="angular">Angular</SelectItem>
                      <SelectItem value="svelte">Svelte</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forms" className="space-y-6">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Form Example</CardTitle>
                  <CardDescription>A simple form with inputs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    helperText="We'll never share your email"
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                  />
                </CardContent>
                <CardFooter>
                  <Button fullWidth>Submit</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="dialogs" className="space-y-6">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Dialog Examples</CardTitle>
                  <CardDescription>Click the buttons to open dialogs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Welcome to Lollypop UI</DialogTitle>
                        <DialogDescription>
                          This is a production-ready React component library with excellent
                          DX, accessibility, and theming support.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Continue</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
