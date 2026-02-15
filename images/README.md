# Images Directory

This directory contains all images used in the portfolio website.

## Directory Structure

- **`profile/`** - Profile photo and personal images
- **`projects/`** - Project screenshots and preview images
- **`skills/`** - Skill-related images and icons (optional)
- **`general/`** - Other website images (backgrounds, decorative elements, etc.)

## Image Guidelines

### Recommended Formats
- Use **WebP** format for best compression and quality (with fallback to PNG/JPG)
- Use **PNG** for images requiring transparency
- Use **JPG** for photographs
- Use **SVG** for logos and icons

### Recommended Sizes

#### Profile Photo
- **Size**: 400x400 pixels (square)
- **Format**: JPG or PNG
- **File name**: `profile-photo.jpg` or `profile-photo.png`
- **Location**: `images/profile/`

#### Project Screenshots
- **Size**: 1200x675 pixels (16:9 ratio) or 1200x800 pixels
- **Format**: JPG or WebP
- **File naming**: `project-name-screenshot.jpg`
- **Location**: `images/projects/`

#### General Images
- **Max width**: 1920 pixels
- **Optimize**: Compress images to reduce file size
- **Location**: `images/general/`

## Adding Images

1. **Add your images** to the appropriate subfolder
2. **Optimize images** before committing (use tools like TinyPNG, ImageOptim, or Squoosh)
3. **Update HTML** to reference your images:
   ```html
   <img src="images/profile/profile-photo.jpg" alt="Profile Photo">
   ```

## Image Optimization Tools

- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [ImageOptim](https://imageoptim.com/) - Mac app for image optimization
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

## Best Practices

1. **Always include alt text** for accessibility
2. **Use descriptive file names** (e.g., `nlp-project-dashboard.jpg` not `img1.jpg`)
3. **Keep file sizes small** (aim for under 200KB per image)
4. **Use responsive images** with srcset when needed
5. **Consider lazy loading** for images below the fold
