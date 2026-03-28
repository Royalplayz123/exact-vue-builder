import GameHostingTemplate, { GameHostingConfig } from '@/components/GameHostingTemplate';
import terrariaImg from '@/assets/games/terraria.jpg';

const config: GameHostingConfig = {
  gameName: 'SATISFACTORY',
  bannerImage: terrariaImg,
  accentColor: 'orange',
  platforms: ['PC', 'MULTIPLAYER', 'CO-OP'],
  features: [
    'Instant Setup', '24/7 Support', 'One-Click Mods', '99.9% Uptime',
    'Free Subdomain', 'All Game Versions', 'Automatic Backups', 'Custom Domain',
    'SFTP Access', 'Mod Support',
  ],
  plans: [
    { name: 'PIONEER PLAN', price: 249, ram: '6GB', cpu: '2 cores', storage: '20GB', ports: '1 Ports', backups: 1, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
    { name: 'ENGINEER PLAN', price: 449, ram: '12GB', cpu: '4 cores', storage: '50GB', ports: '1 Ports', backups: 2, locations: 'India, Mumbai/Delhi', ddos: '17 TB', popular: true },
    { name: 'ARCHITECT PLAN', price: 799, ram: '24GB', cpu: '6 cores', storage: '80GB', ports: '2 Ports', backups: 3, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
  ],
  whyChooseFeatures: ['Easy to Use', 'Instance Manager', 'Game Swapping', 'Modding Support', 'Backups Manager', 'Instant Setup', 'DDoS Protection'],
};

const SatisfactoryPlans = () => <GameHostingTemplate config={config} />;
export default SatisfactoryPlans;
