// BBPS App - Main Application

class BBPSApp {
    constructor() {
        this.currentPage = 'home';
        this.user = null;
        this.init();
    }

    init() {
        console.log('BBPS App initialized');
        this.loadHome();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Setup event listeners for navigation
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                e.preventDefault();
                const route = e.target.getAttribute('href').replace('#/', '');
                this.navigate(route);
            }
        });
    }

    navigate(route) {
        this.currentPage = route;
        switch (route) {
            case 'home':
                this.loadHome();
                break;
            case 'recharge':
                this.loadRecharge();
                break;
            case 'bills':
                this.loadBills();
                break;
            case 'profile':
                this.loadProfile();
                break;
            default:
                this.loadHome();
        }
    }

    loadHome() {
        const content = `
            <div class="container">
                <div class="card">
                    <h2>Welcome to BBPS</h2>
                    <p>Bill Payment System - Pay all your bills in one place</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
                        <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                            <h3>Mobile Recharge</h3>
                            <p>Quick and easy mobile recharges</p>
                        </div>
                        <div class="card" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;">
                            <h3>Bill Payments</h3>
                            <p>Pay electricity, water, and other bills</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.render(content);
    }

    loadRecharge() {
        const content = `
            <div class="container">
                <div class="card">
                    <h2>Mobile Recharge</h2>
                    <form id="rechargeForm">
                        <div class="form-group">
                            <label>Phone Number</label>
                            <input type="tel" id="phone" placeholder="Enter phone number" required>
                        </div>
                        <div class="form-group">
                            <label>Operator</label>
                            <select id="operator" required>
                                <option value="">Select Operator</option>
                                <option value="airtel">Airtel</option>
                                <option value="jio">Jio</option>
                                <option value="vodafone">Vodafone</option>
                                <option value="idea">Idea</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Amount</label>
                            <input type="number" id="amount" placeholder="Enter amount" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Recharge Now</button>
                    </form>
                </div>
            </div>
        `;
        this.render(content);
        this.attachRechargeForm();
    }

    loadBills() {
        const content = `
            <div class="container">
                <div class="card">
                    <h2>Pay Bills</h2>
                    <div style="display: grid; gap: 1rem;">
                        <div class="card">
                            <h3>Electricity Bill</h3>
                            <p>Pay your electricity bill</p>
                            <button class="btn btn-primary">Pay Now</button>
                        </div>
                        <div class="card">
                            <h3>Water Bill</h3>
                            <p>Pay your water bill</p>
                            <button class="btn btn-primary">Pay Now</button>
                        </div>
                        <div class="card">
                            <h3>Internet Bill</h3>
                            <p>Pay your internet bill</p>
                            <button class="btn btn-primary">Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.render(content);
    }

    loadProfile() {
        const content = `
            <div class="container">
                <div class="card">
                    <h2>My Profile</h2>
                    <form id="profileForm">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" required>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="tel" placeholder="Enter your phone" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Save Profile</button>
                    </form>
                </div>
            </div>
        `;
        this.render(content);
    }

    attachRechargeForm() {
        const form = document.getElementById('rechargeForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const phone = document.getElementById('phone').value;
                const operator = document.getElementById('operator').value;
                const amount = document.getElementById('amount').value;
                
                console.log('Recharge request:', { phone, operator, amount });
                alert(`Recharge of ₹${amount} requested for ${phone}`);
                form.reset();
            });
        }
    }

    render(content) {
        const contentDiv = document.getElementById('content');
        if (contentDiv) {
            contentDiv.innerHTML = content;
        }
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new BBPSApp();
    });
} else {
    window.app = new BBPSApp();
}