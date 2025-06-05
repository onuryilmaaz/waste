# Waste Management Platform

A modern React application built with TypeScript and Vite for waste management services. This platform provides a streamlined multi-step process for users to book waste collection services.

## 🚀 Features

### Multi-Step Progress Header

- **6-Step Process**: Postcode → Waste Type → Select Skip → Permit Check → Choose Date → Payment
- **Visual Progress Indicator**: Real-time step tracking with icons and progress bars
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean black background with white elements for better contrast

### Performance Optimizations

- **React Hooks Optimization**: Implemented `useMemo` for preventing unnecessary re-renders
- **Smooth Animations**: Optimized CSS transitions for lag-free user experience
- **Memory Efficient**: Cached computations to reduce component re-rendering

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **ESLint** for code linting

## 📁 Project Structure

```
src/
├── components/
│   └── Header.tsx          # Main progress header component
├── App.tsx
└── main.tsx
```

## 🎨 Design System

### Color Scheme

- **Background**: Black (`bg-black`)
- **Active Step**: Black background with white text
- **Completed Steps**: Light gray background with black text
- **Future Steps**: White background with black text and hover effects

### Responsive Breakpoints

- **Mobile**: Base styles
- **Tablet**: `sm:` prefix (640px+)
- **Desktop**: `md:` prefix (768px+)
- **Large Desktop**: `lg:` prefix (1024px+)

## ⚡ Performance Features

### React Optimization

- **Memoized Arrays**: Steps array wrapped in `useMemo` to prevent re-creation
- **Computed Values**: Current step index cached to avoid repeated calculations
- **Efficient Transitions**: Reduced animation complexity for smoother performance

### CSS Optimization

- **Simplified Animations**: Fast color transitions instead of complex transforms
- **Reduced GPU Usage**: Removed scale transforms that cause repaints
- **Optimized Shadows**: Minimal shadow effects for better performance

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/onuryilmaaz/waste.git
cd waste
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS with custom configuration in `tailwind.config.js` for:

- Custom color palette
- Responsive breakpoints
- Animation utilities

### TypeScript

Configured with strict mode for better type safety and development experience.

## 📱 Responsive Design

The Header component is fully responsive with:

- **Mobile**: Icon-only steps with compact spacing
- **Tablet**: Icon + text with medium spacing
- **Desktop**: Full layout with optimal spacing and hover effects

## 🎯 Future Enhancements

- Add step validation
- Implement routing between steps
- Add form state management
- Integrate with backend APIs
- Add accessibility improvements

## 📄 License

This project is licensed under the MIT License.
