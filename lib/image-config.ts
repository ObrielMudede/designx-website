/**
 * =====================================================
 * IMAGE CONFIGURATION
 * =====================================================
 * 
 * Replace the placeholder URLs below with your actual image links.
 * 
 * HOW TO ADD YOUR IMAGES:
 * 1. Upload your images to /public/images/ folder
 * 2. Update the paths below (e.g., "/images/my-logo.png")
 * 
 * OR use external URLs:
 * 1. Host your images on a service like Cloudinary, Imgur, or your own server
 * 2. Paste the full URL below (e.g., "https://example.com/my-image.jpg")
 * 
 * =====================================================
 */

export const images = {
  // =====================================================
  // LOGO
  // =====================================================
  // Your company logo - appears in header and footer
  // Recommended size: 150x150px or larger (square works best)
  logo: "/images/logo.png",

  // =====================================================
  // HERO SECTION IMAGES (Landing Page)
  // =====================================================
  // These images float and animate on the homepage hero section
  // Recommended size: At least 600x400px

  // Image 1: A sample flyer design you created
  heroFlyer: "/images/hero-flyer.png",

  // Image 2: A sample Facebook post design
  heroFacebookPost: "/images/hero-facebook.jpg",

  // Image 3: A school website mockup/screenshot
  heroWebsite: "/images/hero-website.jpg",

  // =====================================================
  // PORTFOLIO IMAGES
  // =====================================================
  // Showcase your best work - used on Portfolio page
  // Recommended size: At least 800x600px

  portfolio: {
    flyers: [
      "/images/portfolio/flyer-1.png",
      "/images/portfolio/flyer-2.png",
      "/images/portfolio/flyer-3.png",
      "/images/portfolio/flyer-4.png",
      "/images/portfolio/flyer-5.png",
      "/images/portfolio/flyer-6.png",
      "/images/portfolio/flyer-7.png",
    ],
    facebookPosts: [
      "/images/portfolio/facebook-1.jpg",
      "/images/portfolio/facebook-2.jpg",
      "/images/portfolio/facebook-3.jpg",
    ],
    websites: [
      "/images/portfolio/website-1.PNG",
      "/images/portfolio/website-2.PNG",
    ],
  },

  // =====================================================
  // ABOUT PAGE
  // =====================================================
  // Your profile photo or team photo
  // Recommended size: At least 400x400px (square works best for profile)
  founderPhoto: "/images/founder.png",

  // Optional: Team photos
  teamPhotos: [
    "/images/team/member-1.jpg",
    "/images/team/member-2.jpg",
  ],

  // =====================================================
  // TESTIMONIALS (if you add them later)
  // =====================================================
  testimonials: [
    "/images/testimonials/school-1.png",
    "/images/testimonials/school-2.png",
    "/images/testimonials/school-3.png",
    "/images/testimonials/school-4.png",
    "/images/testimonials/school-5.png",
    "/images/testimonials/school-6.png",
  ],
}

// Default fallback for broken images
export const fallbackImage = "/placeholder.svg"
