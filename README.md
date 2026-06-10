# BBPS App - Native Web Application

A native web application for Bill Payment System (BBPS) built with vanilla HTML, CSS, and JavaScript.

## Features

- 📱 **Mobile Recharge** - Quick mobile recharges for all operators
- 💳 **Bill Payments** - Pay electricity, water, internet bills
- 👤 **User Profile** - Manage your profile and preferences
- 🎨 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Fast and Lightweight** - No heavy frameworks

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: PHP (built-in server)
- **Database**: MySQL (optional)
- **API**: REST API

## Getting Started

### Prerequisites
- PHP 7.0 or higher
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/2773201/bbps-app.git
cd bbps-app
```

2. Start the PHP development server:
```bash
php -S 0.0.0.0:8080
```

3. Open your browser and navigate to:
```
http://localhost:8080
```

## Project Structure

```
bbps-app/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Stylesheet
│   └── js/
│       ├── app.js         # Main application logic
│       ├── router.js      # Routing logic
│       └── api.js         # API communication
├── php/
│   ├── config.php         # Configuration
│   └── api/
│       └── index.php      # API endpoints
└── README.md              # This file
```

## API Endpoints

### Recharge
- `GET /api/operators` - Get list of operators
- `POST /api/recharge` - Submit recharge request

### Bills
- `GET /api/bills/:userId` - Get user bills
- `POST /api/bills/:billId/pay` - Pay a bill

### User
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/:userId` - Update user profile

## Usage

### Mobile Recharge
1. Navigate to "Recharge" tab
2. Enter phone number
3. Select operator
4. Enter amount
5. Click "Recharge Now"

### Pay Bills
1. Navigate to "Bills" tab
2. Select bill type
3. Click "Pay Now"
4. Follow payment instructions

## Development

### Adding New Features

1. Create new page in `assets/js/app.js`:
```javascript
loadNewFeature() {
    const content = `
        <div class="container">
            <!-- Your content -->
        </div>
    `;
    this.render(content);
}
```

2. Add navigation link in `index.html`

3. Update router in `assets/js/app.js`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for any purpose.

## Support

For support, please create an issue on GitHub or contact us at support@bbpsapp.com

## Roadmap

- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Transaction history
- [ ] Digital receipts
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA support
- [ ] Mobile app (React Native)
