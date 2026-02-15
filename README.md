# dylanholm.es

Personal website and blog by Dylan Holmes, built with minimal HTML and CSS.

## About

A simple, fast-loading personal site focused on readability and maintainability. Built with plain HTML and CSS, using minimal external resources only when necessary for enhanced functionality.

## Features

- **Minimal Dependencies**: No npm packages or build tools required
- **CDN-Only External Resources**: KaTeX via CDN for mathematical notation when needed
- **Fast Loading**: Optimized for speed with minimal CSS and selective JavaScript
- **Universal Compatibility**: Works on any web server or hosting service
- **Mobile Responsive**: Clean design that works on all devices
- **Future-Proof**: Plain HTML/CSS foundation will work forever

## Local Development

Serve the site locally with any static file server:

```bash
# Python (recommended)
python3 -m http.server 8080

# Node.js 
npx serve .

# PHP
php -S localhost:8080
```

Then visit http://localhost:8080

## File Structure

```
├── index.html          # Blog index page
├── about.html          # About page
├── style.css           # All site styling
├── posts/              # Blog posts
│   ├── double-pendulum.html              # Physics analysis with animation
│   ├── algorithm-recursive-newton-euler.html  # Technical algorithm reference
│   └── *.html          # Other individual posts
└── README.md           # This file
```

## Deployment

### GitHub Pages

Deploy to GitHub Pages by pushing to the `gh-pages` branch:

```bash
# Deploy current directory to gh-pages
git subtree push --prefix . origin gh-pages

# Or force update gh-pages
git push origin feat/plain:gh-pages --force
```

Your site will be available at `https://yourusername.github.io/repositoryname`

### Making Changes

1. **Edit files directly** - Modify HTML, CSS, or create new posts
2. **Test locally** - Run a local server to preview changes
3. **Commit changes** - `git add .` and `git commit -m "Update content"`
4. **Deploy** - Push to `gh-pages` branch using the command above

### Alternative Hosting

This site works with any static hosting service:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Deploy directly from GitHub with zero configuration
- **Traditional hosting**: Upload files via FTP to any web server
- **CDN**: Works with any content delivery network

## Adding Blog Posts

To add a new blog post:

1. Create a new `.html` file in the `posts/` directory
2. Use the same structure as existing posts
3. Add a link to the post in `index.html`
4. Commit and deploy

## Philosophy

This site follows the KISS principle—Keep It Simple, Stupid. It prioritizes:

- **Simplicity** over complexity
- **Performance** over features  
- **Maintainability** over sophistication
- **Longevity** over trends

Minimal frameworks. No bundlers. No build process. External resources used sparingly and only via CDN for enhanced functionality (like mathematical notation). Just a website that works.

## Dependencies

- **KaTeX** (via CDN): Mathematical equation rendering for technical posts
  - Only loaded on pages that need mathematical notation
  - Fallback: equations display as LaTeX source if KaTeX fails to load