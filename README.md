# Flexible Buttons

## Description

This project is a React-based web application featuring a customizable button component with various modes, including filled, outline, text-only, and icon-inclusive buttons. It also demonstrates the use of custom SVG icons within the button component.

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

```
git clone [repository-url]
cd [repository-directory]
```

2. **Install Dependencies**

Ensure you have Node.js and npm installed, then run:

`npm install`

3. **Start the Development Server**

`npm run dev`

This will launch the app in your default browser.

## Usage

The project consists of the main `App` component that showcases different types of buttons:

- Default Button
- Filled Button
- Outline Button
- Text-only Button
- Buttons with Icons

You can use the `Button` component in your project by importing it along with the required icon components:

```
import Button from './Button';
import HomeIcon from './assets/HomeIcon';
import PlusIcon from './assets/PlusIcon';
```

// Use in your component
<Button Icon={HomeIcon}>Home</Button>
<Button Icon={PlusIcon} mode="text">Add</Button>

## Customization

To customize the button styles, edit the CSS in `App.css`. The button supports the following modes:

- `filled` (default)
- `outline`
- `text`

Icons can be added by passing an SVG component to the `Icon` prop.

```

```
