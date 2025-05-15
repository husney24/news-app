# 📰 Modern News App

A sleek and modern news application built with React Native and Expo, featuring a beautiful UI, dark/light theme support, and smooth animations.

![News App Preview](https://via.placeholder.com/800x400?text=News+App+Preview)

## ✨ Features

- 🌓 Dark/Light theme support with system preference detection
- 🎨 Modern and clean UI design
- ⚡ Smooth animations and transitions
- 📱 Responsive layout for all screen sizes
- 🔄 Pull-to-refresh functionality
- 📰 Multiple news categories
- 🔖 Bookmark system for articles
- 🎯 Featured and trending news sections
- 🔍 Search functionality
- 🔔 Notification system

## 🛠️ Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- React Native Reanimated
- Expo Linear Gradient
- Custom Fonts (Poppins)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. Clone the repository:
```bash
git clone https://github.com/husney24/news-app.git
cd news-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your preferred platform:
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app for physical device

## 📱 App Structure

```
app/
├── (tabs)/           # Tab-based navigation screens
├── context/          # React Context providers
├── constants/        # App constants and theme
├── components/       # Reusable components
└── assets/          # Images, fonts, and other static assets
```

## 🎨 Theme System

The app implements a comprehensive theme system with:

- Automatic system theme detection
- Manual theme toggle
- Consistent color palette
- Smooth theme transitions

### Theme Colors

```typescript
// Light Theme
{
  background: '#FFFFFF',
  text: '#000000',
  primary: '#007AFF',
  secondary: '#5856D6',
  // ... more colors
}

// Dark Theme
{
  background: '#000000',
  text: '#FFFFFF',
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  // ... more colors
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)

## 📧 Contact

Husney - [@husney24](https://github.com/husney24)

Project Link: [https://github.com/husney24/news-app](https://github.com/husney24/news-app)
