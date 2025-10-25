const path = require('path');

// Browser globals are now handled by Gatsby's built-in polyfills
// Removed JSDOM mock setup as it's not needed for modern Gatsby SSR


exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  });

  // Disable HTML minification for readable output
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      optimization: {
        minimize: false,
      },
    });
  }

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          // Mock Radix UI primitives for SSR
          '@radix-ui/react-slot': require.resolve('./mocks/radix-slot.js'),
          '@radix-ui/react-accordion': require.resolve('./mocks/radix-accordion.js'),
          '@radix-ui/react-alert-dialog': require.resolve('./mocks/radix-alert-dialog.js'),
          '@radix-ui/react-avatar': require.resolve('./mocks/radix-avatar.js'),
          '@radix-ui/react-checkbox': require.resolve('./mocks/radix-checkbox.js'),
          '@radix-ui/react-context-menu': require.resolve('./mocks/radix-context-menu.js'),
          '@radix-ui/react-dialog': require.resolve('./mocks/radix-dialog.js'),
          '@radix-ui/react-dropdown-menu': require.resolve('./mocks/radix-dropdown-menu.js'),
          '@radix-ui/react-label': require.resolve('./mocks/radix-label.js'),
          '@radix-ui/react-menubar': require.resolve('./mocks/radix-menubar.js'),
          '@radix-ui/react-navigation-menu': require.resolve('./mocks/radix-navigation-menu.js'),
          '@radix-ui/react-popover': require.resolve('./mocks/radix-popover.js'),
          '@radix-ui/react-radio-group': require.resolve('./mocks/radix-radio-group.js'),
          '@radix-ui/react-select': require.resolve('./mocks/radix-select.js'),
          '@radix-ui/react-separator': require.resolve('./mocks/radix-separator.js'),
          '@radix-ui/react-switch': require.resolve('./mocks/radix-switch.js'),
          '@radix-ui/react-toggle': require.resolve('./mocks/radix-toggle.js'),
          '@radix-ui/react-toggle-group': require.resolve('./mocks/radix-toggle-group.js'),
          '@radix-ui/react-toast': require.resolve('./mocks/radix-toast.js'),
        },
      },
    });
  }
};

// Format HTML output for readable source
exports.onPostBuild = async ({ store }) => {
  const { program } = store.getState();
  const fs = require('fs-extra');
  const { globSync } = require('glob');
  
  const htmlFiles = globSync(`${program.directory}/public/**/*.html`);
  
  // Simple HTML formatter function
  const formatHTML = (html) => {
    let formatted = html;
    let indent = 0;
    const tab = '  ';
    const lines = [];
    
    // Remove existing whitespace between tags
    formatted = formatted.replace(/>\s+</g, '><');
    
    // Split by tags
    const parts = formatted.split(/(<[^>]+>)/g).filter(Boolean);
    
    for (const part of parts) {
      if (part.match(/^<\//)) {
        // Closing tag
        indent = Math.max(0, indent - 1);
        lines.push(tab.repeat(indent) + part);
      } else if (part.match(/^<[^/][^>]*>$/)) {
        // Opening tag
        if (part.match(/<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)[^>]*>/)) {
          // Self-closing tags
          lines.push(tab.repeat(indent) + part);
        } else {
          lines.push(tab.repeat(indent) + part);
          if (!part.match(/\/>$/)) {
            indent++;
          }
        }
      } else if (part.trim()) {
        // Text content
        lines.push(tab.repeat(indent) + part.trim());
      }
    }
    
    return lines.join('\n');
  };
  
  for (const file of htmlFiles) {
    try {
      const html = await fs.readFile(file, 'utf-8');
      const formatted = formatHTML(html);
      await fs.writeFile(file, formatted);
    } catch (error) {
      console.warn(`Could not format ${file}:`, error.message);
    }
  }
  
  console.log(`✓ Formatted ${htmlFiles.length} HTML files`);
};
