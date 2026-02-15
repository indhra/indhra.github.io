# Project Images

Add screenshots or preview images for your projects here.

## How to Add Project Images to Your Portfolio

### Step 1: Add Your Image
Place your project screenshot in this folder with a descriptive name:
- Example: `nlp-project-preview.jpg`
- Example: `ml-dashboard-screenshot.png`

### Step 2: Update HTML
In `index.html`, add an `<img>` tag at the top of your project card:

```html
<div class="project-card">
    <!-- Add this line -->
    <img src="images/projects/your-project-name.jpg" 
         alt="Project Name Screenshot" 
         class="project-image"
         onerror="this.style.display='none'">
    
    <div class="project-header">
        <i class="fas fa-book"></i>
        <h3>Your Project Name</h3>
    </div>
    <!-- rest of the card content -->
</div>
```

### Example

```html
<div class="project-card">
    <img src="images/projects/nlp-llms-preview.jpg" 
         alt="NLP and LLMs Project Preview" 
         class="project-image"
         onerror="this.style.display='none'">
    
    <div class="project-header">
        <i class="fas fa-book"></i>
        <h3>Natural Language Processing & LLMs</h3>
    </div>
    <p class="project-description">
        From scratch to advanced LLMs - comprehensive learning...
    </p>
    <!-- rest of card -->
</div>
```

## Image Specifications

- **Recommended Size**: 1200x675 pixels (16:9 ratio)
- **Maximum File Size**: 200KB (compress before adding)
- **Format**: JPG for photographs, PNG for graphics with transparency
- **Naming**: Use descriptive, lowercase names with hyphens

## Notes

- The `onerror="this.style.display='none'"` attribute ensures that if an image is missing, it won't show a broken image icon
- Images are styled automatically with the `.project-image` class
- Images are optional - projects without images will display normally
