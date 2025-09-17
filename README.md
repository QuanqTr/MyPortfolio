# Creative Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Express.js.

## Features

- 🎨 Modern UI with smooth animations
- 📱 Responsive design for all devices
- ✉️ Contact form with email notifications
- 🗄️ PostgreSQL database integration
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (Neon)
- **Email**: Nodemailer with Gmail SMTP
- **Deployment**: Vercel

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values with your configuration

4. Push database schema:
   ```bash
   npm run db:push
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

## Deployment to Vercel

1. **Fork/Clone this repository**

2. **Set up Neon PostgreSQL** (if not already done):
   - Create account at [neon.tech](https://neon.tech)
   - Create a new database
   - Copy the connection string

3. **Deploy to Vercel**:
   - Connect your GitHub repo to Vercel
   - Add environment variables in Vercel dashboard:
     - `DATABASE_URL`: Your Neon PostgreSQL connection string
     - `EMAIL_USER`: Your Gmail address
     - `EMAIL_PASS`: Your Gmail app password

4. **Configure Gmail** (for contact form):
   - Enable 2-factor authentication on your Google account
   - Generate an App Password: [Google Account Security](https://myaccount.google.com/security)
   - Use the App Password as `EMAIL_PASS`

5. **Deploy**: Vercel will automatically build and deploy your app

## Environment Variables

```bash
DATABASE_URL=postgresql://username:password@hostname/database?sslmode=require
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

## Build Commands

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Database Push**: `npm run db:push`

## Project Structure

```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   └── hooks/       # Custom hooks
├── server/              # Express backend
├── shared/              # Shared types/schemas
└── dist/                # Build output
```

## Contact Form

The contact form automatically:
- Sends email notifications to your configured email
- Stores submissions in PostgreSQL database
- Includes professional HTML email templates

## License

MIT License