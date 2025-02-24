# Tailwind CSS Custom Color Bug

This repository demonstrates a bug where custom colors defined in `tailwind.config.js` are not applied correctly in the HTML.  The expected behavior is that the `bg-custom-color` class should set the background color to blue (`#007bff`), but it doesn't.  The solution is provided in a separate file to illustrate the fix.

## Bug

The bug lies in the way custom colors are defined and used with Tailwind CSS. The provided code includes a custom color definition in `tailwind.config.js`, but the HTML file fails to render the color correctly.  This can be due to a number of reasons, from incorrect paths to build issues or errors in the configuration itself.