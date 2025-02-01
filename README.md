# Naber Frontend

Modern React frontend application built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡️ Vite for lightning fast development
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🐳 Docker support for containerization
- 📱 Responsive design
- 🔧 Modern development setup

## 📦 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (optional)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd naber-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🐳 Docker Development

To run the application using Docker:

```bash
docker-compose up
```

The application will be available at http://localhost:3000

## 📁 Project Structure

```
📂 naber-frontend/
┣ 📂 src/
┃ ┣ 📂 components/   # Reusable components
┃ ┣ 📂 pages/        # Page components
┃ ┣ 📂 styles/       # Custom CSS files
┃ ┣ 📂 utils/        # Helper functions
┃ ┣ 📜 main.tsx      # Entry point
┃ ┗ 📜 App.tsx       # Root component
┣ 📜 Dockerfile
┣ 📜 docker-compose.yml
┗ 📜 ... (config files)
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests (when configured)

## 🚀 Deployment

Build the production-ready application:

```bash
npm run build
```

## 📝 License

This project is licensed under the MIT License.
