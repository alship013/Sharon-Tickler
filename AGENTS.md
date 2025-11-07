# Agent Guidelines for Sharon Tickler

## Development Commands
- **Start local server**: `python -m http.server 8000` or `npx serve .`
- **Open app**: Navigate to `http://localhost:8000`
- **Validate HTML**: Use browser developer tools or online validators
- **Test email functionality**: Configure EmailJS credentials first

## Code Style Guidelines
- **HTML**: Use semantic HTML5 tags, proper indentation (2 spaces)
- **CSS**: BEM methodology for class names, mobile-first responsive design
- **JavaScript**: ES6+ features, const/let instead of var, async/await for promises
- **Imports**: Use CDN links for external libraries (EmailJS)
- **Error Handling**: Try-catch blocks with user-friendly status messages
- **Naming**: camelCase for variables, kebab-case for CSS classes
- **Comments**: Minimal inline comments, focus on self-documenting code

## EmailJS Configuration
- Replace `YOUR_PUBLIC_KEY_HERE` in script.js with actual EmailJS public key
- Update `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID` accordingly
- Test email functionality before deployment

## File Structure
- Keep all files in root directory (simple static site)
- No build process required - direct file serving