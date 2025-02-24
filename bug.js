```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-color': '#007bff',
      },
    },
  },
  plugins: [],
};
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Tailwind CSS Bug</title>
    <link href="/dist/output.css" rel="stylesheet">
  </head>
  <body>
    <div class="bg-custom-color">
      This element should have a blue background.
    </div>
  </body>
</html>
```