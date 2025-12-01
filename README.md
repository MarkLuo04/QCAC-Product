# Linko - Yae Miko Colour-Changing Glass Cup (Product Page)

This is a prototype product page for a temperature colour-changing glass cup featuring Yae Miko from Genshin Impact. The page is built with modularity and reusability in mind so it can be easily adapted for other future products in the art shop.

The design follows Linko Art’s requested white/teal theme and incorporates a Shopify-esque aesthetic common with modern online art shops while adding unique visual details and animations.

This webpage includes:

- **Product Overview**: Product images, detailed specifications, and pricing
- **Interactive Features**: Image gallery and related products carousel
- **Customer Reviews**: Review system with local storage persistence
- **Review Form**: User-friendly form for submitting new reviews
- **Responsive Design**: Mobile friendly design that works on all platforms
- **Smooth Animations**: Minimalistic animations using Framer Motion

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

## Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/QCAC-Product.git
   cd QCAC-Product
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Technologies Used
- **React** 
- **Vite** 
- **JavaScript (ES6+)** 
- **Tailwind CSS v4** 
- **Lucide React** 
- **Framer Motion**


## Challenges

### Global Theming with Tailwind CSS v4
I designed each section of the website individually using Tailwind, but once most components were built, I noticed a lot of repetitive styling. This made it difficult to change the website’s colour scheme. Initially, I tried creating custom global CSS utility classes, but this went against Tailwind’s design philosophy. After more research, I found that Tailwind CSS v4 deprecates the old tailwind.config.js and instead manages theming using the new @theme directive. This approach allowed me to organize design values in one place and significantly reduce repeated code.

### Animation Performance Optimization
One of the challenges I faced was optimizing animations created with Framer Motion. The initial implementation felt laggy, but after researching best practices, I redesigned the animations to be more subtle and performance-focused. This included using declarative, state-based animations, relying on transform properties such as x, y, and scale instead of properties like width or margin, and incorporating tools like layout animations and keyframes to keep the animations smooth and efficient.

