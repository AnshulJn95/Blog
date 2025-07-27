
# MegaBlog - Modern Blog Application

A full-featured blog application built with React, Appwrite, and TinyMCE, featuring rich text editing, user authentication, and responsive design.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## ✨ Features

- **Rich Text Editor**: TinyMCE integration with advanced formatting options
- **User Authentication**: Secure login/signup with Appwrite
- **Blog Management**: Create, edit, delete, and publish blog posts
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: Redux Toolkit for efficient state handling
- **Real-time Updates**: Live blog post updates
- **File Uploads**: Image and media upload capabilities
- **SEO Friendly**: Optimized for search engines
- **Modern UI**: Clean and intuitive user interface

## 🛠 Tech Stack

- **Frontend**: React 18.3.1, Vite
- **Styling**: Tailwind CSS 3.4.7
- **State Management**: Redux Toolkit 2.2.7, React Redux 9.1.2
- **Backend**: Appwrite 15.0.0 (BaaS)
- **Rich Text Editor**: TinyMCE React 5.1.1
- **Routing**: React Router DOM 6.25.1
- **Form Handling**: React Hook Form 7.52.1
- **HTML Parsing**: html-react-parser 5.1.12

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0.0 or higher)
- **npm** or **yarn** package manager
- **Appwrite Account** (for backend services)
- **TinyMCE Account** (for rich text editor)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnshulJn95/Blog.git
   cd Blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables))

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## 🔧 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
# Appwrite Configuration
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="your-project-id-here"
VITE_APPWRITE_DATABASE_ID="your-database-id-here"
VITE_APPWRITE_COLLECTION_ID="your-collection-id-here"
VITE_APPWRITE_BUCKET_ID="your-bucket-id-here"

# TinyMCE Configuration
VITE_TINYMCE_API_KEY="your-tinymce-api-key-here"
```

### Getting Your Environment Variables:

#### Appwrite Setup:
1. Create an account at [Appwrite Cloud](https://cloud.appwrite.io)
2. Create a new project
3. Set up a database with collections for posts
4. Create a storage bucket for file uploads
5. Copy the respective IDs from your Appwrite console

#### TinyMCE Setup:
1. Sign up at [TinyMCE](https://www.tiny.cloud/)
2. Get your API key from the dashboard
3. Add your domain to the approved domains list

## 📖 Usage

### For Users:

1. **Registration/Login**: Create an account or log in to existing account
2. **Create Posts**: Use the rich text editor to write and format blog posts
3. **Manage Posts**: Edit, delete, or publish your posts
4. **Browse Content**: Read posts from other users
5. **Media Upload**: Add images and media to your posts

### For Developers:

1. **Component Development**: Create reusable React components
2. **State Management**: Use Redux slices for managing application state
3. **API Integration**: Utilize Appwrite SDK for backend operations
4. **Styling**: Use Tailwind CSS classes for responsive design

## 📁 Project Structure

```
Blog/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── RTE/              # Rich Text Editor
│   │   └── ...
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Signup/
│   │   └── ...
│   ├── store/
│   │   ├── authSlice.js
│   │   ├── postSlice.js
│   │   └── store.js
│   ├── appwrite/
│   │   ├── auth.js
│   │   ├── config.js
│   │   └── ...
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 📝 Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server on `localhost:5173` |
| `npm run build` | Builds the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🤝 Contributing

We welcome contributions to MegaBlog! Here's how you can help:

### Getting Started

1. **Fork the repository**
   ```bash
   git fork https://github.com/AnshulJn95/Blog.git
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/Blog.git
   cd Blog
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design compatibility
- Test your changes thoroughly

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Example**:
```
feat(editor): add image upload functionality

- Implement drag and drop image upload
- Add image compression before upload
- Update TinyMCE configuration for image handling

Closes #123
```

### Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Ensure the build passes**
   ```bash
   npm run build
   npm run lint
   ```
4. **Create a pull request** with:
   - Clear title and description
   - Screenshots (if UI changes)
   - Testing instructions
   - Issue references

### Code Style

- Use ES6+ features
- Follow React best practices
- Use functional components with hooks
- Implement proper error handling
- Follow Tailwind CSS conventions

## 🚀 Deployment

### Vercel Deployment

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```
2. **Upload the `dist` folder** to Netlify
3. **Set environment variables** in Netlify settings

### Manual Deployment

1. **Build for production**
   ```bash
   npm run build
   ```
2. **Upload the `dist` folder** to your hosting provider

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Environment Variables Not Loading**
- Ensure variables start with `VITE_`
- Restart development server after adding variables
- Check for typos in variable names

**TinyMCE Not Loading**
- Verify API key is correct
- Check domain is whitelisted in TinyMCE dashboard
- Ensure internet connection for CDN access

**Appwrite Connection Issues**
- Verify project ID and endpoint URL
- Check CORS settings in Appwrite console
- Ensure API keys have proper permissions

### Getting Help

- **Issues**: Create an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check Appwrite and TinyMCE docs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Appwrite** for providing excellent Backend-as-a-Service
- **TinyMCE** for the rich text editor
- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first styling
- **Vite** for the fast build tool

**Happy Blogging! 📝✨**

For questions or support, please open an issue or contact the maintainers.

[1] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/86432016/36da40fc-3383-4f65-9df5-9d678998bc54/index.html
[2] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/86432016/e54b5d19-8438-4944-96cb-02156923b134/package-lock.json
[3] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/86432016/b3da59c3-af76-43c5-9dda-17070f6ed756/package.json
[4] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/86432016/3dc75ee4-89b9-4976-8616-d0ac4cde6c9f/postcss.config.js
[5] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/86432016/9e3f05f7-a5bd-4b80-985d-bbdb760c0605/README.md
[6] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/86432016/3bb9015b-88be-40f6-9b1f-ff4def11def0/tailwind.config.js
[7] https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/86432016/06fa04e1-4fb6-4354-baf2-2cf670df6939/vite.config.js
