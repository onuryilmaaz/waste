# Waste Management Skip Rental Application

A modern, responsive React-based web application for browsing and selecting waste management skips. This application provides an intuitive interface for users to search, filter, and select appropriate skip sizes for their waste disposal needs.

## 🚀 Live Demo

Browse available skips by location and find the perfect waste disposal solution for your needs.

## ✨ Features

### Core Functionality

- **Skip Browsing**: View available skips with detailed information including size, pricing, and availability
- **Advanced Filtering**: Filter skips by heavy waste allowance, road permission, price range, and yard size
- **Real-time Search**: Search skips by size, area, or waste type capabilities
- **Interactive UI**: Modern card-based interface with smooth animations and transitions
- **Responsive Design**: Fully responsive design that works seamlessly across all devices

### User Experience

- **Progress Navigation**: Visual step-by-step navigation showing the rental process
- **Loading States**: Smooth loading indicators for better user feedback
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Accessibility**: Built with accessibility best practices in mind

## 🛠️ Technology Stack

### Frontend Framework & Core

- **React 19.1.0** - Latest React with modern features and improved performance
- **TypeScript 5.8.3** - Type-safe JavaScript for better development experience
- **Vite 6.3.5** - Fast build tool and development server with HMR (Hot Module Replacement)

### Styling & UI

- **Tailwind CSS 3.4.17** - Utility-first CSS framework for rapid UI development
- **Tailwind Animate** - Additional animation utilities for Tailwind CSS
- **PostCSS** - CSS post-processor for enhanced styling capabilities
- **Framer Motion 12.16.0** - Production-ready motion library for React animations

### UI Components & Icons

- **Radix UI** - Unstyled, accessible UI primitives
  - `@radix-ui/react-dropdown-menu` - Accessible dropdown menus
  - `@radix-ui/react-slot` - Flexible slot composition
- **Lucide React 0.513.0** - Beautiful & consistent icon library
- **Class Variance Authority 0.7.1** - Building type-safe component APIs
- **clsx 2.1.1** & **tailwind-merge 3.3.0** - Utility libraries for conditional classes

### Data Management

- **Axios 1.9.0** - Promise-based HTTP client for API requests

### Development Tools

- **ESLint 9.25.0** - Code linting and quality assurance
- **TypeScript ESLint 8.30.1** - TypeScript-specific linting rules
- **Autoprefixer** - CSS vendor prefixing
- **Vite Plugin React SWC** - Fast React refresh with SWC compiler

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn** (version 1.22.0 or higher)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/onuryilmaaz/waste.git
cd waste
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

### 3. Start the Development Server

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

| Script            | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Starts the development server with hot reload      |
| `npm run build`   | Builds the app for production to the `dist` folder |
| `npm run preview` | Serves the production build locally for testing    |
| `npm run lint`    | Runs ESLint to check for code quality issues       |

## 🏗️ Project Structure

```
waste/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── assets/           # Static assets (images, etc.)
│   ├── components/       # Reusable UI components
│   │   ├── Card.tsx      # Skip card component with pricing and details
│   │   ├── FilterAndSearch.tsx  # Advanced filtering and search interface
│   │   ├── Footer.tsx    # Application footer
│   │   ├── Header.tsx    # Navigation header with progress steps
│   │   └── LoadingSpinner.tsx  # Loading state component
│   ├── pages/           # Page components
│   │   └── ChooseSkipSizePage.tsx  # Main skip selection page
│   ├── types/           # TypeScript type definitions
│   │   └── Skip.ts      # Skip and API response interfaces
│   ├── App.tsx          # Root application component
│   ├── App.css          # Application-specific styles
│   ├── index.css        # Global styles and Tailwind directives
│   ├── main.tsx         # Application entry point
│   └── vite-env.d.ts    # Vite environment type definitions
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TypeScript config
├── tsconfig.node.json    # Node.js TypeScript config
├── vite.config.ts        # Vite configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
└── README.md            # Project documentation
```

## 🔧 Configuration

### Environment Variables

The application currently connects to the API endpoint:

```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

To configure different API endpoints or add environment-specific settings, create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://your-api-endpoint.com
VITE_DEFAULT_POSTCODE=NR32
VITE_DEFAULT_AREA=Lowestoft
```

### Tailwind CSS Customization

The project includes custom Tailwind configurations in `tailwind.config.js`:

- Custom border width (3px)
- Enhanced box shadows (3xl shadow)
- Dark mode support
- Animation utilities

## 🌟 Key Features Explained

### Skip Data Management

The application fetches and displays skip rental data including:

- Skip size (in cubic yards)
- Hire period (in days)
- Pricing information (before VAT and including VAT)
- Transport costs and per-tonne pricing
- Location and area coverage
- Special permissions (road allowance, heavy waste capability)

### Advanced Filtering System

Users can filter skips by multiple criteria:

- **Heavy Waste Capability**: Filter skips that allow or don't allow heavy waste
- **Road Permission**: Filter skips allowed or not allowed on roads
- **Price Range**: Set minimum and maximum price filters
- **Size Range**: Filter by yard size (minimum and maximum)
- **Text Search**: Search by size, area, or capability keywords

### Responsive Design

The application features a fully responsive grid layout:

- Mobile: 1 column
- Small screens: 1 column
- Medium screens: 2 columns
- Large screens: 3 columns
- Extra large screens: 4 columns

### Animation & Interactions

Built with Framer Motion for smooth animations:

- Card hover effects
- Smooth transitions between states
- Loading animations
- Filter and search result animations

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

This will:

1. Run TypeScript compilation
2. Build the application using Vite
3. Generate optimized static files in the `dist` directory

To preview the production build locally:

```bash
npm run preview
```

## 🐛 Troubleshooting

### Common Issues

1. **Dependencies Installation Errors**

   ```bash
   # Clear npm cache
   npm cache clean --force

   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Build Errors**

   ```bash
   # Check TypeScript errors
   npm run lint

   # Ensure all dependencies are installed
   npm install
   ```

3. **Development Server Issues**

   ```bash
   # Kill any processes on port 5173
   lsof -ti:5173 | xargs kill -9

   # Restart development server
   npm run dev
   ```

