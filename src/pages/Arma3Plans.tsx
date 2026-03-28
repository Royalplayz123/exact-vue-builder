import GameHostingTemplate, { GameHostingConfig } from '@/components/GameHostingTemplate';
import arma3Img from '@/assets/games/arma3.jpg';

const config: GameHostingConfig = {
  gameName: 'ARMA 3',
  bannerImage: arma3Img,
  accentColor: 'slate',
  platforms: ['PC', 'MULTIPLAYER', 'MILSIM'],
  features: [
    'Instant Setup', '24/7 Support', 'One-Click Mods', '99.9% Uptime',
    'Free Subdomain', 'All Game Versions', 'Automatic Backups', 'Custom Domain',
    'SFTP Access', 'Steam Workshop',
  ],
  plans: [
    { name: 'RECRUIT PLAN', price: 349, ram: '8GB', cpu: '3 cores', storage: '30GB', ports: '1 Ports', backups: 1, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
    { name: 'COMMANDER PLAN', price: 599, ram: '16GB', cpu: '4 cores', storage: '60GB', ports: '2 Ports', backups: 2, locations: 'India, Mumbai/Delhi', ddos: '17 TB', popular: true },
    { name: 'GENERAL PLAN', price: 999, ram: '32GB', cpu: '8 cores', storage: '120GB', ports: '3 Ports', backups: 3, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
  ],
  whyChooseFeatures: ['Easy to Use', 'Instance Manager', 'Mission Support', 'Modding Support', 'Backups Manager', 'Instant Setup', 'DDoS Protection'],
};

const Arma3Plans = () => <GameHostingTemplate config={config} />;
export default Arma3Plans;
