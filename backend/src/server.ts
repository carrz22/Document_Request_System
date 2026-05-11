import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger';
import { initializeFirebase, testConnection } from './config/firebase';
import authRoutes from './routes/auth.routes';
import documentRoutes from './routes/document.routes';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Initialize Firebase
const firebaseInitialized = initializeFirebase();

if (firebaseInitialized) {
  testConnection();
} else {
  console.error('❌ Firebase failed to initialize. Check your Firebase credentials.');
  process.exit(1);
}

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (/^http:\/\/localhost:\d+$/.test(origin)) return callback(null, true);
    if (/\.vercel\.app$/.test(origin)) return callback(null, true);
    if (/\.onrender\.com$/.test(origin)) return callback(null, true);
    callback(new Error(`CORS blocked: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/users', userRoutes);

// Serve Angular frontend (production)
const frontendPath = path.join(__dirname, '../../frontend/frontend-app/dist/document-request-frontend/browser');
app.use(express.static(frontendPath));

app.get('*', (req: Request, res: Response, next: NextFunction) => {
  if (req.path.includes('.')) return next(); // skip .js, .css, .ico etc
  res.sendFile(path.join(frontendPath, 'index.html'), (err) => {
    if (err) {
      console.error('❌ sendFile error:', err.message);
      res.status(500).json({ success: false, message: err.message });
    }
  });
});

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 API Docs: http://localhost:${PORT}/api-docs`);
});