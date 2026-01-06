/**
 * iZambezi - JavaScript API
 * CSS library for Zimbabwe's popular Logos
 * https://github.com/johnmugabe/izambezi
 * 
 * @license MIT
 * @version 2.0.0
 */

import icons from './icons.json';

/**
 * Default configuration options
 */
const defaultConfig = {
  prefix: 'izambezi',
  defaultSize: 'default',
  iconPath: 'https://johnmugabe.github.io/izambezi/icons/',
  useSVG: false
};

/**
 * iZambezi class for programmatic icon creation
 */
class IZambezi {
  constructor(config = {}) {
    this.config = { ...defaultConfig, ...config };
    this.icons = icons;
  }

  /**
   * Get all available icons
   * @returns {Object} Object containing all icon definitions
   */
  getIcons() {
    return this.icons;
  }

  /**
   * Get icon names as array
   * @returns {string[]} Array of icon names
   */
  getIconNames() {
    return Object.keys(this.icons);
  }

  /**
   * Search icons by name or label
   * @param {string} query - Search query
   * @returns {Object} Matching icons
   */
  searchIcons(query) {
    const lowerQuery = query.toLowerCase();
    return Object.entries(this.icons)
      .filter(([name, label]) => 
        name.toLowerCase().includes(lowerQuery) || 
        label.toLowerCase().includes(lowerQuery)
      )
      .reduce((acc, [name, label]) => {
        acc[name] = label;
        return acc;
      }, {});
  }

  /**
   * Get icons by category
   * @param {string} category - Category name (e.g., 'bank', 'university', 'fc')
   * @returns {Object} Icons matching the category
   */
  getIconsByCategory(category) {
    const lowerCategory = category.toLowerCase();
    return Object.entries(this.icons)
      .filter(([name, label]) => 
        name.includes(lowerCategory) || 
        label.toLowerCase().includes(lowerCategory)
      )
      .reduce((acc, [name, label]) => {
        acc[name] = label;
        return acc;
      }, {});
  }

  /**
   * Create an icon element
   * @param {string} iconName - Name of the icon
   * @param {Object} options - Options for the icon
   * @returns {HTMLElement} The created icon element
   */
  createIcon(iconName, options = {}) {
    const {
      size = this.config.defaultSize,
      animated = false,
      animation = null,
      infinite = false,
      speed = null,
      delay = null,
      className = '',
      useSVG = this.config.useSVG
    } = options;

    const element = document.createElement('i');
    
    // Base class
    const sizeClass = size === 'default' ? this.config.prefix : `${this.config.prefix}-${size}`;
    element.classList.add(sizeClass, iconName);
    
    // SVG enhancement
    if (useSVG) {
      element.classList.add('zw-svg');
    }
    
    // Animation classes
    if (animated || animation) {
      element.classList.add('animated');
      
      if (animation) {
        element.classList.add(animation);
      }
      
      if (infinite) {
        element.classList.add('infinite');
      }
      
      if (speed) {
        element.classList.add(speed);
      }
      
      if (delay) {
        element.classList.add(`delay-${delay}s`);
      }
    }
    
    // Custom classes
    if (className) {
      className.split(' ').forEach(cls => {
        if (cls) element.classList.add(cls);
      });
    }
    
    return element;
  }

  /**
   * Create icon HTML string
   * @param {string} iconName - Name of the icon
   * @param {Object} options - Options for the icon
   * @returns {string} HTML string
   */
  createIconHTML(iconName, options = {}) {
    return this.createIcon(iconName, options).outerHTML;
  }

  /**
   * Replace placeholder elements with icons
   * @param {string} selector - CSS selector for elements to replace
   */
  replaceElements(selector = '[data-izambezi]') {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(el => {
      const iconName = el.dataset.izambezi;
      const options = {
        size: el.dataset.size || 'default',
        animated: el.dataset.animated !== undefined,
        animation: el.dataset.animation,
        infinite: el.dataset.infinite !== undefined,
        speed: el.dataset.speed,
        delay: el.dataset.delay,
        useSVG: el.dataset.svg !== undefined
      };
      
      const icon = this.createIcon(iconName, options);
      
      // Preserve existing classes
      el.classList.forEach(cls => {
        if (!cls.startsWith('izambezi')) {
          icon.classList.add(cls);
        }
      });
      
      el.replaceWith(icon);
    });
  }

  /**
   * Initialize auto-replacement on DOM ready
   */
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.replaceElements());
    } else {
      this.replaceElements();
    }
  }

  /**
   * Get the CDN URL for CSS
   * @param {string} version - Version number (default: latest)
   * @returns {string} CDN URL
   */
  static getCDNUrl(version = 'latest') {
    return `https://cdn.jsdelivr.net/npm/izambezi@${version}/dist/izambezi.min.css`;
  }

  /**
   * Get link element for CSS inclusion
   * @returns {HTMLLinkElement} Link element
   */
  static createStyleLink() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = IZambezi.getCDNUrl();
    return link;
  }
}

// Export for different module systems
export { IZambezi, icons };
export default IZambezi;
