# Agent Guidelines for Sharon Tickler

## Development Commands
- **Start local server**: `python -m http.server 8000` or `npx serve .`
- **Open app**: Navigate to `http://localhost:8000`
- **Validate HTML**: Use browser dev tools or W3C validator
- **Test email**: Configure EmailJS credentials in script.js first

## Code Style Guidelines
- **HTML**: Semantic HTML5, 2-space indentation, proper meta tags
- **CSS**: BEM methodology, mobile-first, CSS Grid/Flexbox preferred
- **JavaScript**: ES6+, const/let, async/await, arrow functions
- **Imports**: CDN links only (EmailJS), no npm packages
- **Error Handling**: Try-catch with user-friendly status messages
- **Naming**: camelCase for JS, kebab-case for CSS, PascalCase for components
- **Types**: No TypeScript, use JSDoc for type hints
- **Formatting**: 2 spaces, no trailing whitespace, consistent line endings

## EmailJS Configuration
- Replace `YOUR_PUBLIC_KEY_HERE`, `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID` in script.js
- Test email functionality before deployment