// API - Handle backend communication

class API {
    constructor(baseURL = 'http://localhost:8080/api') {
        this.baseURL = baseURL;
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const config = { ...defaultOptions, ...options };

        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Recharge endpoints
    async getOperators() {
        return this.request('/operators');
    }

    async submitRecharge(phone, operator, amount) {
        return this.request('/recharge', {
            method: 'POST',
            body: JSON.stringify({ phone, operator, amount }),
        });
    }

    // Bill endpoints
    async getBills(userId) {
        return this.request(`/bills/${userId}`);
    }

    async payBill(billId, amount) {
        return this.request(`/bills/${billId}/pay`, {
            method: 'POST',
            body: JSON.stringify({ amount }),
        });
    }

    // User endpoints
    async getProfile(userId) {
        return this.request(`/users/${userId}`);
    }

    async updateProfile(userId, data) {
        return this.request(`/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }
}

// Create global API instance
const api = new API();

// Export API
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API;
}