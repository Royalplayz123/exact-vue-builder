import GameHostingTemplate, { GameHostingConfig } from '@/components/GameHostingTemplate';
import valheimImg from '@/assets/games/valheim.jpg';

const config: GameHostingConfig = {
  gameName: 'VALHEIM',
  bannerImage: valheimImg,
  accentColor: 'blue',
  platforms: ['PC', 'XBOX', 'CO-OP', 'MULTIPLAYER'],
  features: [
    'Instant Setup', '24/7 Support', 'One-Click Mods', '99.9% Uptime',
    'Free Subdomain', 'All Game Versions', 'Automatic Backups', 'Custom Domain',
    'SFTP Access', 'Cross-Play Support',
  ],
  plans: [
    { name: 'MEADOWS PLAN', price: 249, ram: '6GB', cpu: '2 cores', storage: '20GB', ports: '1 Ports', backups: 1, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
    { name: 'MOUNTAIN PLAN', price: 449, ram: '12GB', cpu: '4 cores', storage: '50GB', ports: '1 Ports', backups: 2, locations: 'India, Mumbai/Delhi', ddos: '17 TB', popular: true },
    { name: 'ASHLANDS PLAN', price: 799, ram: '24GB', cpu: '6 cores', storage: '80GB', ports: '2 Ports', backups: 3, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
  ],
  whyChooseFeatures: ['Easy to Use', 'Instance Manager', 'Game Swapping', 'Valheim Plus Support', 'Backups Manager', 'Instant Setup', 'DDoS Protection'],
};

const ValheimPlans = () => <GameHostingTemplate config={config} />;
export default ValheimPlans;
