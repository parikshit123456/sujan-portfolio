# Parikshit Mandal - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and vanilla JavaScript.

## Features

- **Responsive Design**: Works perfectly on all devices from mobile to desktop
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Typewriter Effect**: Animated intro text on the hero section
- **Interactive Skills**: Animated skill bars with percentage displays
- **Project Showcase**: Grid layout with hover effects and project details
- **Contact Form**: Ready for integration with Formspree or EmailJS
- **SEO Optimized**: Semantic HTML and proper meta tags

## Sections

1. **Home/Hero**: Introduction with typewriter animation and profile image
2. **About**: Personal story and statistics counter
3. **Skills**: Animated progress bars for technical skills
4. **Qualifications**: Education and certifications timeline
5. **Experience**: Professional experience with timeline layout
6. **Projects**: Featured projects with images and tech stacks
7. **Contact**: Contact form and social links

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins)

## Setup Instructions

1. Clone or download the project files
2. Open `index.html` in your browser
3. For contact form functionality, integrate with [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)

## Customization

### Colors
The website uses CSS custom properties for easy theme customization. Update the root variables in `css/style.css`:

```css
:root {
    --primary-color: #3B82F6;
    --secondary-color: #8B5CF6;
    --accent-color: #10B981;
    /* ... other colors */
}
```

### Content
- Update personal information in `index.html`
- Replace project images with your own work
- Add your actual resume to `assets/resume.pdf`
- Update social media links in the contact section

### Images
- Replace the profile image URL in the hero section
- Add your project screenshots to the `assets/images/` directory
- Update image paths in the projects section

## Performance Features

- Optimized CSS with minimal dependencies
- Lazy loading for images
- Debounced scroll events for better performance
- Efficient animations using CSS transforms
- Semantic HTML for better accessibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Surge.sh**: Use the Surge CLI for quick deployment

## Contact Form Integration

### Using Formspree:
1. Sign up at [formspree.io](https://formspree.io/)
2. Update the form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
```

### Using EmailJS:
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their integration guide to replace the form submission handler in `js/script.js`

## License

This project is open source and available under the MIT License.

## Author

**Parikshit Mandal**
- Email: parikshit.mandal@example.com
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]