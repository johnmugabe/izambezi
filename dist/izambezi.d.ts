/**
 * iZambezi TypeScript Definitions
 */

export interface IconOptions {
  /** Size of the icon: 'sm' | 'default' | 'lg' | 'xl' | '2x' | '3x' | '4x' | '5x' */
  size?: string;
  /** Enable animation */
  animated?: boolean;
  /** Animation name: 'bounce' | 'flash' | 'pulse' | 'heartBeat' | 'bounceIn' | 'fadeIn' | 'zoomIn' | 'shake' | 'wobble' | 'tada' */
  animation?: string;
  /** Loop animation infinitely */
  infinite?: boolean;
  /** Animation speed: 'fast' | 'faster' | 'slow' | 'slower' */
  speed?: string;
  /** Animation delay in seconds (1-5) */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
  /** Use SVG version if available */
  useSVG?: boolean;
}

export interface IZambeziConfig {
  /** CSS class prefix (default: 'izambezi') */
  prefix?: string;
  /** Default icon size */
  defaultSize?: string;
  /** Path to icon assets */
  iconPath?: string;
  /** Use SVG by default */
  useSVG?: boolean;
}

export interface Icons {
  [key: string]: string;
}

export declare class IZambezi {
  constructor(config?: IZambeziConfig);
  
  /** Configuration object */
  config: Required<IZambeziConfig>;
  
  /** All available icons */
  icons: Icons;
  
  /** Get all available icons */
  getIcons(): Icons;
  
  /** Get icon names as array */
  getIconNames(): string[];
  
  /** Search icons by name or label */
  searchIcons(query: string): Icons;
  
  /** Get icons by category */
  getIconsByCategory(category: string): Icons;
  
  /** Create an icon element */
  createIcon(iconName: string, options?: IconOptions): HTMLElement;
  
  /** Create icon HTML string */
  createIconHTML(iconName: string, options?: IconOptions): string;
  
  /** Replace placeholder elements with icons */
  replaceElements(selector?: string): void;
  
  /** Initialize auto-replacement on DOM ready */
  init(): void;
  
  /** Get the CDN URL for CSS */
  static getCDNUrl(version?: string): string;
  
  /** Get link element for CSS inclusion */
  static createStyleLink(): HTMLLinkElement;
}

export declare const icons: Icons;
export default IZambezi;
