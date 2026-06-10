# DigitalOcean Deployment Guide

## Prerequisites
1. DigitalOcean account
2. SSH key pair
3. Domain name (optional)

## Deployment Steps

### Option 1: Deploy with DigitalOcean App Platform (Recommended)

1. **Create a Droplet:**
   - Visit https://cloud.digitalocean.com
   - Create a new App
   - Select "GitHub" as source
   - Connect your GitHub account
   - Select repository: `2773201/bbps-app`
   - Select branch: `develop`

2. **Configure Resources:**
   - HTTP Port: 8080
   - Memory: 512MB (minimum)
   - Storage: 5GB (minimum)

3. **Set Environment Variables:**
   ```
   DB_HOST=your_db_host
   DB_USER=root
   DB_PASS=your_password
   DB_NAME=bbps_db
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (2-5 minutes)
   - Access your app at: `https://your-app.ondigitalocean.app`

### Option 2: Deploy with Droplet + SSH

1. **Create a Droplet:**
   ```
   - Image: Ubuntu 20.04 LTS
   - Size: Basic ($5/month)
   - Region: Select nearest region
   - Add SSH key
   ```

2. **SSH into Droplet:**
   ```bash
   ssh root@your_droplet_ip
   ```

3. **Install Dependencies:**
   ```bash
   apt update && apt upgrade -y
   apt install -y php php-mysql mysql-server nginx git
   ```

4. **Clone Repository:**
   ```bash
   cd /var/www
   git clone https://github.com/2773201/bbps-app.git
   cd bbps-app
   git checkout develop
   ```

5. **Configure Nginx:**
   ```bash
   cp nginx.conf /etc/nginx/sites-available/bbps-app
   ln -s /etc/nginx/sites-available/bbps-app /etc/nginx/sites-enabled/
   nginx -t
   systemctl restart nginx
   ```

6. **Start Application:**
   ```bash
   php -S 0.0.0.0:8080 &
   ```

### Option 3: Deploy with Docker

1. **Create Droplet:**
   - Select "Droplets" > "Create"
   - Choose Ubuntu 20.04
   - Add Docker app

2. **Clone and Deploy:**
   ```bash
   git clone https://github.com/2773201/bbps-app.git
   cd bbps-app
   docker-compose up -d
   ```

3. **Access App:**
   ```
   http://your_droplet_ip:8080
   ```

## Post-Deployment

1. **Set Up SSL Certificate:**
   ```bash
   apt install -y certbot python3-certbot-nginx
   certbot certonly --nginx -d yourdomain.com
   ```

2. **Configure Firewall:**
   ```bash
   ufw allow 22/tcp
   ufw allow 80/tcp
   ufw allow 443/tcp
   ufw enable
   ```

3. **Set Up Database:**
   ```bash
   mysql -u root -p
   CREATE DATABASE bbps_db;
   CREATE USER 'bbps_user'@'localhost' IDENTIFIED BY 'secure_password';
   GRANT ALL PRIVILEGES ON bbps_db.* TO 'bbps_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

## Your Live URLs After Deployment

**Option 1 (App Platform):**
```
https://bbps-app.ondigitalocean.app
```

**Option 2 & 3 (Droplet):**
```
http://your_droplet_ip:8080
Or with domain: https://yourdomain.com
```

## Quick Start Checklist

- [ ] Create DigitalOcean account
- [ ] Set up Droplet or App Platform
- [ ] Deploy repository
- [ ] Configure database
- [ ] Set up domain (optional)
- [ ] Enable SSL
- [ ] Test application

## Support

- DigitalOcean Docs: https://docs.digitalocean.com
- GitHub Repository: https://github.com/2773201/bbps-app
