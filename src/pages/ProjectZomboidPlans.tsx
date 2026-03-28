import GameHostingTemplate, { GameHostingConfig } from '@/components/GameHostingTemplate';
import projectZomboidImg from '@/assets/games/project-zomboid.jpg';

const config: GameHostingConfig = {
  gameName: 'PROJECT ZOMBOID',
  bannerImage: projectZomboidImg,
  accentColor: 'green',
  platforms: ['PC', 'MULTIPLAYER', 'CO-OP'],
  features: [
    'Instant Setup', '24/7 Support', 'One-Click Mods', '99.9% Uptime',
    'Free Subdomain', 'All Game Versions', 'Automatic Backups', 'Custom Domain',
    'SFTP Access', 'Mod Workshop Support',
  ],
  plans: [
    { name: 'SURVIVOR PLAN', price: 199, ram: '6GB', cpu: '2 cores', storage: '20GB', ports: '1 Ports', backups: 1, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
    { name: 'FORTIFIED PLAN', price: 399, ram: '12GB', cpu: '4 cores', storage: '50GB', ports: '1 Ports', backups: 2, locations: 'India, Mumbai/Delhi', ddos: '17 TB', popular: true },
    { name: 'STRONGHOLD PLAN', price: 699, ram: '24GB', cpu: '6 cores', storage: '80GB', ports: '2 Ports', backups: 3, locations: 'India, Mumbai/Delhi', ddos: '17 TB' },
  ],
  whyChooseFeatures: ['Easy to Use', 'Instance Manager', 'Game Swapping', 'Modding Support', 'Backups Manager', 'Instant Setup', 'DDoS Protection'],
};

const ProjectZomboidPlans = () => <GameHostingTemplate config={config} />;
export default ProjectZomboidPlans;
