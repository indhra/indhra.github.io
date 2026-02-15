# Quick Start: Adding Images to Your Portfolio

This guide shows you how to add images to your portfolio website after PR #2 is merged.

## 🖼️ Adding a Profile Photo

1. **Prepare your photo:**
   - Size: 400x400 pixels (square)
   - Format: JPG or PNG
   - File size: Under 200KB

2. **Save it:**
   - Place your photo in `images/profile/`
   - Name it: `profile-photo.jpg` or `profile-photo.png`

3. **That's it!** The website is already configured to display it automatically in the About section.

## 📸 Adding Project Screenshots

1. **Prepare your screenshot:**
   - Size: 1200x675 pixels (16:9 ratio recommended)
   - Format: JPG or PNG
   - File size: Under 200KB

2. **Save it:**
   - Place in `images/projects/`
   - Use descriptive name: `nlp-project-preview.jpg`

3. **Update HTML:**
   - Open `index.html`
   - Find your project card
   - Add this line at the top of the card (before `<div class="project-header">`):
   ```html
   <img src="images/projects/your-image-name.jpg" 
        alt="Your Project Name" 
        class="project-image"
        onerror="this.style.display='none'">
   ```

## 📁 Folder Structure

```
images/
├── README.md              # Detailed guidelines
├── profile/
│   ├── .gitkeep
│   └── (your profile photo goes here)
├── projects/
│   ├── README.md          # Project images guide
│   ├── .gitkeep
│   └── (your project screenshots go here)
├── skills/
│   ├── .gitkeep
│   └── (optional skill images)
└── general/
    ├── .gitkeep
    └── (other images)
```

## 💡 Tips

- **Optimize your images** before adding them using tools like:
  - [TinyPNG](https://tinypng.com/) - Free online compression
  - [Squoosh](https://squoosh.app/) - Advanced optimization

- **Name files descriptively**: `ml-dashboard-screenshot.jpg` not `img1.jpg`

- **Test locally** after adding images:
  ```bash
  python3 -m http.server 8000
  # Open http://localhost:8000 in your browser
  ```

## 🔍 Detailed Documentation

For more detailed information, see:
- `images/README.md` - Complete image guidelines
- `images/projects/README.md` - Project image specific guide
