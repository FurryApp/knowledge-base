import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'; // nextra-theme-blog or your custom theme
 
// Get the default MDX components
const themeComponents = getThemeComponents()
 
/**
 * Returns a merged set of MDX components, combining the default theme components with any custom overrides.
 *
 * @param components - Optional custom MDX components to override or extend the defaults.
 * @returns An object containing the merged MDX components.
 */
export function useMDXComponents(components?: ReturnType<typeof getThemeComponents>) {
  return {
    ...themeComponents,
    ...components
  }
}