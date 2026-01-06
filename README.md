# iZambezi

<p align="center">
  <img src="https://img.shields.io/npm/v/izambezi?style=flat-square" alt="npm version">
  <img src="https://img.shields.io/npm/l/izambezi?style=flat-square" alt="license">
  <img src="https://img.shields.io/badge/icons-200%2B-green?style=flat-square" alt="icons">
  <img src="https://img.shields.io/badge/made%20in-Zimbabwe-gold?style=flat-square" alt="Made in Zimbabwe">
</p>

<p align="center">
  <strong>A lightweight CSS icon library for Zimbabwe's popular logos and brands</strong>
</p>

<p align="center">
  <a href="https://johnmugabe.github.io/izambezi/docs.html">Documentation</a> •
  <a href="https://johnmugabe.github.io/izambezi/example.html">Examples</a> •
  <a href="#icons">Icon List</a>
</p>

---

## ✨ Features

- 🎨 **200+ Icons** - Banks, universities, telecoms, government, media, and more
- 🪶 **Lightweight** - Only ~15KB minified + gzipped
- 🎯 **Easy to Use** - Simple class-based API
- 📐 **Multiple Sizes** - From small to 5x large
- 🎬 **Animations** - 12+ built-in animations
- 🔄 **Transforms** - Rotation, flip, and spin utilities
- 📦 **Modern Build** - ES Modules, CommonJS, UMD support
- 🎨 **Customizable** - CSS custom properties for theming

## 📦 Installation

### CDN (Recommended)

Add to your `<head>`:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/izambezi@2/dist/izambezi.min.css">

<!-- JavaScript (optional) -->
<script src="https://cdn.jsdelivr.net/npm/izambezi@2/dist/izambezi.min.js"></script>
```

Or use unpkg:

```html
<link rel="stylesheet" href="https://unpkg.com/izambezi@2/dist/izambezi.min.css">
```

### npm

```bash
npm install izambezi
```

```javascript
// ES Modules
import IZambezi from 'izambezi';
import 'izambezi/dist/izambezi.min.css';

// CommonJS
const IZambezi = require('izambezi');
```

### Download

Download the latest release from [GitHub Releases](https://github.com/johnmugabe/izambezi/releases).

## 🚀 Quick Start

### Basic Usage

```html
<i class="iz iz-econet"></i>
<i class="iz iz-cbz"></i>
<i class="iz iz-uzimba"></i>
```

### Sizes

```html
<i class="iz iz-econet iz-sm"></i>    <!-- Small -->
<i class="iz iz-econet"></i>           <!-- Default -->
<i class="iz iz-econet iz-lg"></i>     <!-- Large -->
<i class="iz iz-econet iz-xl"></i>     <!-- Extra Large -->
<i class="iz iz-econet iz-2x"></i>     <!-- 2x -->
<i class="iz iz-econet iz-3x"></i>     <!-- 3x -->
<i class="iz iz-econet iz-4x"></i>     <!-- 4x -->
<i class="iz iz-econet iz-5x"></i>     <!-- 5x -->
```

### Animations

```html
<i class="iz iz-econet iz-beat"></i>        <!-- Heartbeat -->
<i class="iz iz-econet iz-bounce"></i>      <!-- Bounce -->
<i class="iz iz-econet iz-fade"></i>        <!-- Fade -->
<i class="iz iz-econet iz-shake"></i>       <!-- Shake -->
<i class="iz iz-econet iz-spin"></i>        <!-- Spin -->
<i class="iz iz-econet iz-pulse"></i>       <!-- Pulse -->
<i class="iz iz-econet iz-flip"></i>        <!-- Flip -->
<i class="iz iz-econet iz-tada"></i>        <!-- Tada -->
<i class="iz iz-econet iz-wobble"></i>      <!-- Wobble -->
<i class="iz iz-econet iz-jello"></i>       <!-- Jello -->
<i class="iz iz-econet iz-rubber"></i>      <!-- Rubber band -->
<i class="iz iz-econet iz-swing"></i>       <!-- Swing -->
```

### Transforms

```html
<!-- Rotation -->
<i class="iz iz-econet iz-rotate-90"></i>
<i class="iz iz-econet iz-rotate-180"></i>
<i class="iz iz-econet iz-rotate-270"></i>

<!-- Flip -->
<i class="iz iz-econet iz-flip-h"></i>      <!-- Horizontal -->
<i class="iz iz-econet iz-flip-v"></i>      <!-- Vertical -->
<i class="iz iz-econet iz-flip-both"></i>   <!-- Both -->

<!-- Spin (continuous) -->
<i class="iz iz-econet iz-spinning"></i>
<i class="iz iz-econet iz-spinning-reverse"></i>
```

## 📚 JavaScript API

The optional JavaScript module provides programmatic icon access:

```javascript
import IZambezi from 'izambezi';

// Initialize (replaces [data-iz] elements)
IZambezi.init();

// Get all icons
const icons = IZambezi.getIcons();

// Search icons
const results = IZambezi.searchIcons('bank');

// Get icons by category
const banks = IZambezi.getIconsByCategory('banks');

// Create icon element
const icon = IZambezi.createIcon('econet', {
  size: 'lg',
  animation: 'pulse',
  className: 'my-custom-class'
});
document.body.appendChild(icon);

// Get icon HTML string
const html = IZambezi.createIconHTML('cbz', { size: '2x' });
```

### Data Attribute Usage

```html
<!-- Auto-replace with init() -->
<span data-iz="econet"></span>
<span data-iz="cbz" data-iz-size="lg" data-iz-animation="bounce"></span>
```

## 🏦 Icons

### Banks
`cbz`, `steward`, `stanbic`, `fbc`, `zb`, `agribank`, `ecobank`, `nedbank`, `nbs`, `nmbz`, `posb`, `metbank`, `cabs`, `baz`, `rbz`, `zbfa`, `first-capital`, `banc-abc`, and more...

### Universities
`uzimba`, `nust`, `msu`, `cut`, `buse`, `hit`, `gzu`, `africa-university`, `solusi`, `wua`, `lsu`, `uzc`, `catholic-university`, and more...

### Telecoms
`econet`, `netone`, `telecel`, `telone`, `liquid-telcom`, `powertel`, `africom`, `brodacom`, and more...

### Government
`govzim`, `zec`, `zimra`, `zinara`, `zinwa`, `zimstat`, `idbz`, `nssa`, `potraz`, and more...

### Media
`zbctv`, `zbcradio`, `herald`, `chronicle`, `newsday`, `dailynews`, `hmetro`, `zimpapers`, and more...

### Social & Transport
`paynow`, `ecocash`, `onemoney`, `telecash`, `zipit`, `natpharm`, `zetdc`, `airzimbabwe`, and more...

## 🎨 Customization

Use CSS custom properties to customize icons:

```css
:root {
  --iz-size: 1.5em;
  --iz-animation-duration: 1s;
  --iz-animation-timing: ease-in-out;
}

/* Per-icon customization */
.my-icon {
  --iz-size: 3em;
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/johnmugabe/izambezi.git
cd izambezi

# Install dependencies
npm install

# Build CSS
npm run build:css

# Build JavaScript
npm run build:js

# Build everything
npm run build

# Watch for changes
npm run dev
```

## 📝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Adding New Icons

1. Add the icon image to `src/images/`
2. Add the icon class to `src/scss/_icons.scss`
3. Add metadata to `src/js/icons.json`
4. Run `npm run build`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

Created with ❤️ in Zimbabwe by [John Mugabe](https://github.com/johnmugabe)

---

<p align="center">
  <sub>Made with 🇿🇼 in Zimbabwe</sub>
</p>
