# KISS Version - Plain HTML Port

This branch (`kiss`) contains a minimal, dependency-free version of the dylanholm.es blog.

## Changes Made

- **Removed Next.js**: Converted from Next.js/React to plain HTML
- **No Dependencies**: Zero npm packages, no build process required
- **Minimal CSS**: Clean, simple styling without external frameworks
- **Math Fallback**: LaTeX equations converted to Unicode/plain text
- **Static Files**: Direct HTML files that can be served by any web server

## Files

- `index.html` - Main blog index page
- `about.html` - About page
- `posts/algorithm-recursive-newton-euler.html` - Blog post
- `style.css` - All styling in one CSS file

## Serving

Just serve the directory with any static file server:

```bash
python3 -m http.server 8080
```

## Philosophy

**KISS** - Keep It Simple, Stupid. This version prioritizes:
- Zero build dependencies
- Fast loading
- Simple maintenance  
- Works everywhere
- No JavaScript required