import GameHostingTemplate, { GameHostingConfig } from '@/components/GameHostingTemplate';
import enshroudedImg from '@/assets/games/enshrouded.jpg';

const config: GameHostingConfig = {
  gameName: 'ENSHROUDED',
  bannerImage: enshroudedImg,
  accentColor: 'amber',
  platforms: ['PC', 'CO-OP', 'MULTIPLAYER'],
  features: [
    'Instant Setup', '24/7 Support', 'One-Click Mods', '99.9% Uptime',
    'Free Subdomain', 'All Game Versions', 'Automatic Backups', 'Custom Domain',
    'SFTP Access', 'Co-Op Support',
  ],
  plans: [
    { name: 'EMBER PLAN', price: 299, ram: '8GB', cpu: '2 cores', storage: '25GB', ports: '1 Ports', backups: 1, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
    { name: 'FLAME PLAN', price: 499, ram: '16GB', cpu: '4 cores', storage: '50GB', ports: '1 Ports', backups: 2, locations: 'India, Mumbai/Delhi', ddos: '17 TB', popular: true },
    { name: 'INFERNO PLAN', price: 899, ram: '32GB', cpu: '6 cores', storage: '80GB', ports: '2 Ports', backups: 3, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
  ],
  whyChooseFeatures: ['Easy to Use', 'Instance Manager', 'Game Swapping', 'Modding Support', 'Backups Manager', 'Instant Setup', 'DDoS Protection'],
};

const EnshroudedPlans = () => <GameHostingTemplate config={config} />;
export default EnshroudedPlans;
