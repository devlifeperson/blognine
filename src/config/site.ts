import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "Showcasing creative works, design trends, and artistic inspiration",
  description: "",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "SEO & Optimization Tools",
    slug: "optimization-tools",
    tools: [
      {
        title: "Security Audit",
        desc: "Run a security scan on your site to detect vulnerabilities and threats.",
        href: "https://tools360s.com/safe-browsing",
      },
      {
        title: "URL Redirection Inspector",
        desc: "Check the redirection path to ensure proper SEO and link integrity.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Google Cache Review",
        desc: "See cached versions of your site to verify indexing.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Meta Tag Review",
        desc: "Analyze and improve your site's meta tags for SEO.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Backlink Generator",
        desc: "Generate backlinks to enhance your site's SEO and ranking.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "Indexing Checker",
        desc: "Verify that your URLs are indexed by Google.",
        href: "https://tools360s.com/google-index-checker/",
      },
    ],
  },
  {
    title: "Text Tools",
    slug: "text-analysis",
    tools: [
      {
        title: "Text Comparison Tool",
        desc: "Identify differences between two texts for revision analysis.",
        href: "https://tools360s.com/text-compare",
      },
      {
        title: "Word and Character Counter",
        desc: "Count words and characters in your text to meet requirements.",
        href: "https://tools360s.com/word-counter",
      },
    ],
  },
  {
    title: "Image Utilities",
    slug: "photo-tools",
    tools: [
      {
        title: "Watermark Adder",
        desc: "Protect your images by adding a watermark.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Image Format Converter",
        desc: "Switch image formats between JPEG, PNG, WebP, and more.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Cloud Storage Uploader",
        desc: "Upload images to the cloud for easy sharing.",
        href: "https://review360.info/upload-image",
      },
      {
        title: "Image Compression Tool",
        desc: "Compress images for faster loading times.",
        href: "https://review360.info",
      },
      {
        title: "Crop Images Online",
        desc: "Resize images to fit specific dimensions.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Image Resizer",
        desc: "Adjust image dimensions for different platforms.",
        href: "https://review360.info/image-resizer",
      },
    ],
  },
  {
    title: "General Utility Tools",
    slug: "general-tools",
    tools: [
      {
        title: "IP Finder",
        desc: "Determine your public IP address for networking tasks.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Password Generator",
        desc: "Generate random, strong passwords to secure accounts.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Code Beautifier",
        desc: "Format code for HTML, CSS, JavaScript, and JSON.",
        href: "https://tools360s.com/code-formatter",
      },
      {
        title: "Invoice Maker",
        desc: "Create invoices with professional details for clients.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Browser Version Checker",
        desc: "Check if your browser is up-to-date for security.",
        href: "https://tools360s.com/browser-update/",
      },
    ],
  },
  {
    title: "URL & Link Tools",
    slug: "url-tools",
    tools: [
      {
        title: "QR Code Creator",
        desc: "Generate QR codes for easy sharing of links on mobile.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "URL Shortener",
        desc: "Turn long URLs into concise links for easy sharing.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "Link Analytics",
        desc: "Track and analyze the performance of your shortened URLs.",
        href: "https://free-url.short360s.com/stats",
      },
    ],
  },
];
