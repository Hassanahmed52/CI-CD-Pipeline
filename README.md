# 🛍️ Premium Shopping Cart - Full Stack Application

A modern, production-ready e-commerce shopping cart application with a complete CI/CD pipeline. Built with React, Node.js/Express, Docker, and deployed via GitHub Actions.

## 🌟 Features

### Frontend (React)
- ✅ **Multi-Cart Selection** - Browse between different shopping carts
- ✅ **Interactive Cart Management** - View items, quantities, and prices
- ✅ **Shipping Options** - Multiple delivery methods with cost calculation
- ✅ **Order Summary** - Clear breakdown of cart total, tax, and shipping
- ✅ **Purchase Confirmation** - Secure checkout with agreement modal
- ✅ **Success Feedback** - Beautiful confirmation screen after purchase
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile
- ✅ **Modern UI** - Gradient backgrounds, smooth animations, professional styling

### Backend (Express.js)
- ✅ **REST API** - Clean, RESTful endpoints for cart management
- ✅ **Sample Data** - Pre-loaded shopping carts with products
- ✅ **Health Checks** - Monitoring endpoint for uptime checks
- ✅ **CORS Support** - Secure cross-origin requests
- ✅ **Error Handling** - Comprehensive error responses
- ✅ **Logging** - HTTP request/response logging with Morgan

### DevOps & Infrastructure
- ✅ **Docker Containerization** - Multi-stage builds for optimized images
- ✅ **Docker Compose** - Easy local development orchestration
- ✅ **CI/CD Pipeline** - Automated testing, building, and deployment
- ✅ **Health Monitoring** - Container health checks
- ✅ **Network Isolation** - Secure inter-service communication

---

## 📋 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 17, Material-UI, Axios, CSS3 |
| **Backend** | Node.js 22, Express 4, Morgan, CORS |
| **Database** | In-Memory (Sample Data) |
| **Container** | Docker, Docker Compose |
| **Build** | React Scripts, Node Package Manager |
| **Testing** | Jest, React Testing Library, Supertest |

---

---

## 📖 Repository

🔗 **GitHub Repository:** [CI-CD-Pipeline](https://github.com/Hassanahmed52/CI-CD-Pipeline.git)

```bash
git clone https://github.com/Hassanahmed52/CI-CD-Pipeline.git
cd ci-cd
```

---

## 🚀 Quick Start

### Option 1: Docker Compose (Recommended)

```bash
# Clone the repository (if not already cloned)
git clone https://github.com/Hassanahmed52/CI-CD-Pipeline-with-Git-and-GitHub-Actions---assignment3.git
cd ci-cd

# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

Access at: **http://localhost:3000**

### Option 2: Local Development

#### Prerequisites
- Node.js 22.x or higher
- npm 10.x or higher

#### Setup Backend
```bash
cd backend
npm install
npm start
# Backend runs on http://localhost:5000
```

#### Setup Frontend (New Terminal)
```bash
cd frontend
npm install
npm start
# Frontend runs on http://localhost:3000
```

---

## 🎯 Usage Guide

### Selecting a Cart
1. **Cart #777** - Fresh Fruits (Strawberries & Blackberries)
2. **Cart #888** - Bakery Items (Yummy Cookies)

Click the cart buttons to switch between different shopping carts.

### Checkout Process
1. Select your cart from the options
2. Review items and quantities
3. Choose shipping method:
   - **Standard (Free)** - 5-7 business days
   - **Express ($5.99)** - 2-3 business days  
   - **Overnight ($19.99)** - Next business day
4. Click "Complete Purchase"
5. Confirm purchase agreement
6. See success confirmation

---

## 📦 API Endpoints

### Get Cart by ID
```bash
GET /api/carts/:id

# Example
curl http://localhost:5000/api/carts/777
```

**Response:**
```json
{
  "cartID": "777",
  "cartItems": [
    {
      "title": "Fresh Strawberries",
      "description": "Assorted sizes, 2 cartons",
      "cost": 200,
      "imageUrl": "strawberries.jpg"
    }
  ]
}
```

### Create New Cart
```bash
POST /api/carts
Content-Type: application/json

{
  "cartID": "999",
  "cartItems": [...]
}
```

### Health Check
```bash
GET /health

# Response
{
  "status": "healthy",
  "service": "backend"
}
```

---

## 🏗️ Project Structure

```
ci-cd/
├── backend/                    # Express.js server
│   ├── index.js               # Main server file
│   ├── carts.js               # Cart routes & logic
│   ├── package.json           # Dependencies
│   └── Dockerfile             # Docker configuration
│
├── frontend/                   # React application
│   ├── public/                # Static files
│   ├── src/
│   │   ├── App.js            # Main app component
│   │   ├── App.css           # Styling
│   │   ├── cartview.js       # Cart display component
│   │   ├── shippingOptions.js # Shipping selector
│   │   └── msgYNModal.js     # Confirmation modal
│   ├── package.json          # Dependencies
│   ├── Dockerfile            # Multi-stage Docker build
│   └── nginx.conf            # Nginx configuration
│
├── docker-compose.yml         # Container orchestration
└── README.md                  # This file
```

---

## 🔧 Configuration

### Environment Variables

**Backend** (`backend/`)
```
NODE_ENV=production
PORT=5000
FRONTEND_URL=http://frontend:80 (in Docker)
```

**Frontend** (`frontend/package.json`)
```json
"proxy": "http://backend:5000"
```

### Docker Ports
- **Frontend**: 3000 (Nginx)
- **Backend**: 5000 (Express)

---

## 📊 Sample Data

### Cart #777 - Fresh Fruits
- 2x Strawberries: $200
- 2x Blackberries: $295
- **Subtotal**: $495
- **Tax (10%)**: $49.50

### Cart #888 - Bakery
- 1x Yummy Cookies: $150
- **Subtotal**: $150
- **Tax (10%)**: $15

---

## 🧪 Testing

### Run Backend Tests
```bash
cd backend
npm test
```

### Run Frontend Tests
```bash
cd frontend
npm test
```

### Build Frontend (Production)
```bash
cd frontend
npm run build
```

---

## 🐳 Docker Commands

### Build Images
```bash
# Build backend
docker build -t backend:latest ./backend

# Build frontend
docker build -t frontend:latest ./frontend
```

### View Logs
```bash
# All services
docker-compose logs

# Specific service
docker-compose logs frontend
docker-compose logs backend

# Follow logs (live)
docker-compose logs -f
```

### Container Status
```bash
docker-compose ps
```

### Clean Up
```bash
# Stop and remove containers
docker-compose down

# Remove images
docker rmi backend:latest frontend:latest

# Remove everything (volumes too)
docker-compose down -v
```

---

## 🔐 Security Features

- ✅ CORS enabled for secure communication
- ✅ Input validation on API endpoints
- ✅ HTTP error handling with stack trace suppression in production
- ✅ Docker network isolation
- ✅ No sensitive data in images
- ✅ Health checks for container monitoring

---

## 📱 Responsive Design

The application is fully responsive:
- **Desktop** (1024px+): Multi-column layout, full-featured UI
- **Tablet** (768px-1023px): Optimized touch targets
- **Mobile** (<768px): Single-column layout, stacked buttons

---

## 🚀 CI/CD Pipeline

This repository includes GitHub Actions workflows for:
1. **Testing** - Automated unit and integration tests
2. **Building** - Docker image creation and optimization
3. **Registry** - Push to Amazon ECR
4. **Deployment** - Auto-deploy to AWS EC2 instances
5. **Notifications** - Email alerts on deployment status

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Backend Connection Error
```bash
# Verify backend is running
curl http://localhost:5000/health

# Check logs
docker-compose logs backend
```

### Build Fails
```bash
# Clear Docker cache and rebuild
docker-compose down
docker system prune
docker build -t frontend:latest ./frontend
```

---

## 📈 Performance Metrics

- **Frontend Build Time**: ~10-15 seconds
- **Backend Startup Time**: <1 second
- **API Response Time**: <100ms
- **Container Size**: Frontend ~30MB, Backend ~200MB

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🔗 Resources

- [React Documentation](https://reactjs.org)
- [Express.js Guide](https://expressjs.com)
- [Docker Best Practices](https://docs.docker.com)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

**Last Updated**: August 2026  
**Version**: 2.0 - Enhanced Shopping Cart with Multi-Cart Selection
- Sends email notification on completion

### Pipeline Steps

1. **Code Checkout** - Fetch latest code from repository
2. **Dependency Installation** - Install Node.js dependencies
3. **Build** - Compile React application
4. **Test** - Run unit tests with coverage
5. **Lint** - Check code quality with ESLint
6. **Docker Build** - Create Docker image
7. **ECR Push** - Upload image to Amazon ECR
8. **Deploy** - SSH to EC2 and deploy container
9. **Notify** - Send email with deployment status


## Testing

### Run All Tests:
```bash
npm run test-react
```

### Run Tests with Coverage:
```bash
npm run test-react -- --coverage
```

### Run Linting:
```bash
npx eslint src/
```

## Deployment

### Manual Deployment

#### Without Docker:
```bash
# Install dependencies
npm install

# Build frontend
npm run build-react

# Start with PM2
pm2 start index.js --name ci-cd-app
```

#### With Docker:
```bash
# Build image
docker build -t ci-cd-app:latest .

# Run container
docker run -d -p 3000:3000 --name ci-cd-app ci-cd-app:latest
```

### Automated Deployment (CI/CD)

1. Create a feature branch
2. Make changes and commit
3. Create pull request to `main`
4. GitHub Actions deploys to Testing environment
5. Merge pull request after approval
6. GitHub Actions deploys to Staging environment

### Environment Variables

Configure the following secrets in GitHub repository settings:

**AWS Credentials:**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AWS_ACCOUNT_ID`
- `ECR_REPOSITORY`

**EC2 Configuration:**
- `EC2_TESTING_IP`
- `EC2_STAGING_IP`
- `EC2_SSH_KEY`

**Email Notifications:**
- `EMAIL_USERNAME`
- `GMAIL_APP_PASSWORD`
- `NOTIFICATION_EMAIL`

**Variables:**
- `EC2_HOST` (default: ubuntu)


## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

This project builds upon the original [ReactNodeTesting](https://github.com/eljamaki01/ReactNodeTesting) repository created by [eljamaki01](https://github.com/eljamaki01). The base application code, including the React frontend and Express backend, was adapted from this repository. Our contribution focuses on implementing a comprehensive CI/CD pipeline with Docker containerization, GitHub Actions workflows, and automated deployment to AWS infrastructure.

**Original Repository:** [https://github.com/eljamaki01/ReactNodeTesting](https://github.com/eljamaki01/ReactNodeTesting)

We extend our gratitude to the original author for providing an excellent foundation for demonstrating modern DevOps practices and automation workflows.

---
