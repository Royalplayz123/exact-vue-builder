import GameHostingTemplate, { GameHostingConfig } from '@/components/GameHostingTemplate';
import terrariaImg from '@/assets/games/terraria.jpg';

const config: GameHostingConfig = {
  gameName: 'TERRARIA',
  bannerImage: terrariaImg,
  accentColor: 'emerald',
  platforms: ['PC', 'XBOX', 'PLAYSTATION', 'SWITCH', 'MOBILE'],
  features: [
    'Instant Setup', '24/7 Support', 'One-Click Mods', '99.9% Uptime',
    'Free Subdomain', 'All Game Versions', 'Automatic Backups', 'Custom Domain',
    'SFTP Access', 'Cross-Play Support',
  ],
  plans: [
    { name: 'COPPER PLAN', price: 149, ram: '4GB', cpu: '2 cores', storage: '15GB', ports: '1 Ports', backups: 1, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
    { name: 'GOLD PLAN', price: 299, ram: '8GB', cpu: '3 cores', storage: '30GB', ports: '1 Ports', backups: 2, locations: 'India, Mumbai/Delhi', ddos: '17 TB', popular: true },
    { name: 'LUMINITE PLAN', price: 499, ram: '16GB', cpu: '4 cores', storage: '60GB', ports: '2 Ports', backups: 3, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
  ],
  whyChooseFeatures: ['Easy to Use', 'Instance Manager', 'Game Swapping', 'tModLoader Support', 'Backups Manager', 'Instant Setup', 'DDoS Protection'],
};

const TerrariaPlans = () => <GameHostingTemplate config={config} />;
export default TerrariaPlans;
