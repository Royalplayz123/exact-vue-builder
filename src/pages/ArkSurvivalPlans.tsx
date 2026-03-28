import GameHostingTemplate, { GameHostingConfig } from '@/components/GameHostingTemplate';
import arkSurvivalImg from '@/assets/games/ark-survival.jpg';

const config: GameHostingConfig = {
  gameName: 'ARK: SURVIVAL',
  bannerImage: arkSurvivalImg,
  accentColor: 'teal',
  platforms: ['PC', 'XBOX', 'PLAYSTATION', 'SWITCH', 'CROSS-PLAY'],
  features: [
    'Instant Setup', '24/7 Support', 'One-Click Mods', '99.9% Uptime',
    'Free Subdomain', 'All Game Versions', 'Automatic Backups', 'Custom Domain',
    'SFTP Access', 'Cross-Play Support',
  ],
  plans: [
    { name: 'RAPTOR PLAN', price: 399, ram: '10GB', cpu: '3 cores', storage: '30GB', ports: '1 Ports', backups: 1, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
    { name: 'REX PLAN', price: 699, ram: '16GB', cpu: '4 cores', storage: '60GB', ports: '2 Ports', backups: 2, locations: 'India, Mumbai/Delhi', ddos: '17 TB', popular: true },
    { name: 'GIGANOTOSAURUS PLAN', price: 1199, ram: '32GB', cpu: '8 cores', storage: '120GB', ports: '3 Ports', backups: 3, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
  ],
  whyChooseFeatures: ['Easy to Use', 'Instance Manager', 'Cluster Support', 'Modding Support', 'Backups Manager', 'Instant Setup', 'DDoS Protection'],
};

const ArkSurvivalPlans = () => <GameHostingTemplate config={config} />;
export default ArkSurvivalPlans;
