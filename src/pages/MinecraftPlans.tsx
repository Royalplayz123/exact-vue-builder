import { useState } from 'react';
import { Check, Cpu, Zap, HardDrive, Server, Shield, MapPin, CircleDot } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Intel plan block images
import oakBlock from '@/assets/blocks/oak.png';
import birchBlock from '@/assets/blocks/birch.png';
import jungleBlock from '@/assets/blocks/jungle.png';
import acaciaBlock from '@/assets/blocks/acacia.png';
import paleBlock from '@/assets/blocks/pale.png';
import mangroveBlock from '@/assets/blocks/mangrove.png';
import cherryBlock from '@/assets/blocks/cherry.png';
import crimsonBlock from '@/assets/blocks/crimson.png';
import warpedBlock from '@/assets/blocks/warped.png';

// AMD plan block images
import copperBlock from '@/assets/blocks/copper.png';
import ironBlock from '@/assets/blocks/iron.png';
import goldBlock from '@/assets/blocks/gold.png';
import redstoneBlock from '@/assets/blocks/redstone.png';
import diamondBlock from '@/assets/blocks/diamond.png';
import emeraldBlock from '@/assets/blocks/emerald.png';
import lapisBlock from '@/assets/blocks/lapis.png';
import quartzBlock from '@/assets/blocks/quartz.png';
import netheriteBlock from '@/assets/blocks/netherite.png';

interface Plan {
  name: string;
  price: number;
  ram: string;
  cpu: string;
  cpuModel: string;
  storage: string;
  storageType: string;
  ports: string;
  popular?: boolean;
  image: string;
  color: string;
}

const intelPlans: Plan[] = [
  { name: 'OAK', price: 49, ram: '2GB', cpu: '100% CPU', cpuModel: 'Intel Platinum 8269cy', storage: '4GB', storageType: 'SSD', ports: '2 Ports', image: oakBlock, color: '#8B6914' },
  { name: 'BIRCH', price: 89, ram: '4GB', cpu: '150% CPU', cpuModel: 'Intel Platinum 8269cy', storage: '8GB', storageType: 'SSD', ports: '2 Ports', image: birchBlock, color: '#D4C4A8' },
  { name: 'JUNGLE', price: 159, ram: '6GB', cpu: '200% CPU', cpuModel: 'Intel Platinum 8269cy', storage: '20GB', storageType: 'SSD', ports: '2 Ports', popular: true, image: jungleBlock, color: '#6B4423' },
  { name: 'ACACIA', price: 239, ram: '8GB', cpu: '300% CPU', cpuModel: 'Intel Platinum 8269cy', storage: '30GB', storageType: 'SSD', ports: '2 Ports', image: acaciaBlock, color: '#C36A2D' },
  { name: 'PALE', price: 329, ram: '10GB', cpu: '400% CPU', cpuModel: 'Intel Platinum 8269cy', storage: '40GB', storageType: 'SSD', ports: '2 Ports', popular: true, image: paleBlock, color: '#E8DCC8' },
  { name: 'MANGROVE', price: 439, ram: '12GB', cpu: '450% CPU', cpuModel: 'Intel Platinum 8269cy', storage: '50GB', storageType: 'SSD', ports: '2 Ports', image: mangroveBlock, color: '#8B4513' },
  { name: 'CHERRY', price: 579, ram: '16GB', cpu: '500% CPU', cpuModel: 'Intel Platinum 8269cy', storage: '60GB', storageType: 'SSD', ports: '2 Ports', popular: true, image: cherryBlock, color: '#FFB6C1' },
  { name: 'CRIMSON', price: 749, ram: '24GB', cpu: '600% CPU', cpuModel: 'Intel Platinum 8269cy', storage: '70GB', storageType: 'SSD', ports: '2 Ports', popular: true, image: crimsonBlock, color: '#DC143C' },
  { name: 'WARPED', price: 979, ram: '32GB', cpu: '700% CPU', cpuModel: 'Intel Platinum 8269cy', storage: '80GB', storageType: 'SSD', ports: '2 Ports', image: warpedBlock, color: '#00CED1' },
];

const amdPlans: Plan[] = [
  { name: 'COPPER', price: 149, ram: '2GB', cpu: '100% CPU', cpuModel: 'AMD Ryzen 9 9950X', storage: '4GB', storageType: 'NVMe', ports: '2 Ports', image: copperBlock, color: '#B87333' },
  { name: 'IRON', price: 289, ram: '4GB', cpu: '150% CPU', cpuModel: 'AMD Ryzen 9 9950X', storage: '10GB', storageType: 'NVMe', ports: '2 Ports', popular: true, image: ironBlock, color: '#A8A8A8' },
  { name: 'GOLD', price: 499, ram: '6GB', cpu: '200% CPU', cpuModel: 'AMD Ryzen 9 9950X', storage: '20GB', storageType: 'NVMe', ports: '2 Ports', image: goldBlock, color: '#FFD700' },
  { name: 'REDSTONE', price: 699, ram: '8GB', cpu: '250% CPU', cpuModel: 'AMD Ryzen 9 9950X', storage: '25GB', storageType: 'NVMe', ports: '2 Ports', image: redstoneBlock, color: '#FF0000' },
  { name: 'DIAMOND', price: 899, ram: '10GB', cpu: '300% CPU', cpuModel: 'AMD Ryzen 9 9950X', storage: '30GB', storageType: 'NVMe', ports: '2 Ports', popular: true, image: diamondBlock, color: '#00FFFF' },
  { name: 'EMERALD', price: 1099, ram: '12GB', cpu: '350% CPU', cpuModel: 'AMD Ryzen 9 9950X', storage: '40GB', storageType: 'NVMe', ports: '3 Ports', image: emeraldBlock, color: '#50C878' },
  { name: 'LAPIS', price: 1499, ram: '16GB', cpu: '400% CPU', cpuModel: 'AMD Ryzen 9 9950X', storage: '50GB', storageType: 'NVMe', ports: '3 Ports', image: lapisBlock, color: '#1E90FF' },
  { name: 'QUARTZ', price: 2199, ram: '24GB', cpu: '500% CPU', cpuModel: 'AMD Ryzen 9 9950X', storage: '60GB', storageType: 'NVMe', ports: '4 Ports', popular: true, image: quartzBlock, color: '#F5F5F5' },
  { name: 'NETHERITE', price: 2999, ram: '32GB', cpu: '600% CPU', cpuModel: 'AMD Ryzen 9 9950X', storage: '80GB', storageType: 'NVMe', ports: '2 Ports', image: netheriteBlock, color: '#4A4A4A' },
];

const features = [
  'Instant Setup',
  '24/7 Support',
  'One-Click Plugin',
  '99.9% Uptime',
  'Free Subdomain',
  'All Minecraft Versions',
  'One-Click Datapack',
  'One-Click Mods',
  'SFTP Access',
];

type CpuType = 'intel' | 'amd' | null;

const MinecraftPlans = () => {
  const [selectedCpu, setSelectedCpu] = useState<CpuType>(null);

  const currentPlans = selectedCpu === 'intel' ? intelPlans : selectedCpu === 'amd' ? amdPlans : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
              CHOOSE YOUR <span className="gradient-text-cyan">MINECRAFT PLANS</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up delay-100">
              Select between enterprise-grade Intel Platinum stability or AMD Ryzen 7 performance for optimal server hosting
            </p>

            {/* CPU Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">
              {/* Intel Card */}
              <div
                onClick={() => setSelectedCpu('intel')}
                className={`relative overflow-hidden rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                  selectedCpu === 'intel' 
                    ? 'ring-2 ring-primary shadow-lg shadow-primary/20' 
                    : 'hover:shadow-lg'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #1a3a5c 0%, #0a1929 100%)',
                }}
              >
                {selectedCpu === 'intel' && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-scale-in">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-1">INTEL PLATINUM</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    High-performance & stable hosting powered by Intel Platinum.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png" 
                    alt="Intel" 
                    className="h-12 object-contain brightness-0 invert opacity-80"
                  />
                  <span className="text-xs text-gray-400">Click to select</span>
                </div>
              </div>

              {/* AMD Card */}
              <div
                onClick={() => setSelectedCpu('amd')}
                className={`relative overflow-hidden rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                  selectedCpu === 'amd' 
                    ? 'ring-2 ring-orange-500 shadow-lg shadow-orange-500/20' 
                    : 'hover:shadow-lg'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #2d1f3d 0%, #1a1225 100%)',
                }}
              >
                {selectedCpu === 'amd' && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-scale-in">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-1">AMD RYZEN 9</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Ultra-fast single-core performance. Ideal for lag-free Minecraft hosting.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Ryzen_Logo.svg/2560px-AMD_Ryzen_Logo.svg.png" 
                    alt="AMD Ryzen" 
                    className="h-10 object-contain opacity-90"
                  />
                  <span className="text-xs text-gray-400">Click to select</span>
                </div>
              </div>
            </div>

            {/* Plans Section */}
            {selectedCpu === null ? (
              <div className="text-center py-16 animate-fade-in">
                <Cpu className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">SELECT A CPU ARCHITECTURE</h3>
                <p className="text-sm text-muted-foreground/70">Click on an available CPU option above to view plans</p>
              </div>
            ) : (
              <div className="animate-fade-up">
                {/* Plans Header */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className={`w-3 h-3 rounded-full ${selectedCpu === 'intel' ? 'bg-primary' : 'bg-orange-500'}`} />
                  <span className="font-semibold text-lg">
                    {selectedCpu === 'intel' ? 'INTEL PLATINUM PLANS' : 'AMD RYZEN 9 PLANS'}
                  </span>
                </div>
                <p className="text-muted-foreground mb-8">
                  {selectedCpu === 'intel' 
                    ? 'High-performance & stable hosting powered by Intel Platinum.'
                    : 'Ultra-fast single-core performance, ideal for lag-free Minecraft hosting.'}
                </p>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {currentPlans.map((plan, index) => (
                    <PlanCard key={plan.name} plan={plan} index={index} cpuType={selectedCpu} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="cta-section">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                READY TO HOST YOUR WORLD?
              </h2>
              <p className="text-white/80 mb-6">
                Deploy your Server in under 60 seconds. No long-term contracts required.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <Zap className="w-4 h-4" />
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

interface PlanCardProps {
  plan: Plan;
  index: number;
  cpuType: 'intel' | 'amd';
}

const PlanCard = ({ plan, index, cpuType }: PlanCardProps) => {
  const isIntel = cpuType === 'intel';
  
  return (
    <div 
      className="relative rounded-xl overflow-hidden border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg animate-fade-up"
      style={{ 
        animationDelay: `${index * 50}ms`,
        background: 'linear-gradient(180deg, hsl(230 20% 10%) 0%, hsl(230 20% 6%) 100%)'
      }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-500 text-white">
            POPULAR
          </span>
        </div>
      )}

      {/* Header with gradient based on plan color */}
      <div 
        className="pt-10 pb-4 px-4 text-center"
        style={{
          background: `linear-gradient(180deg, ${plan.color}20 0%, transparent 100%)`
        }}
      >
        <img src={plan.image} alt={plan.name} className="w-16 h-16 mx-auto mb-2 object-contain" />
        <h3 className="text-lg font-bold" style={{ color: plan.color }}>
          {plan.name} {!isIntel && <span className="text-yellow-300">✦</span>}
        </h3>
      </div>

      {/* Price */}
      <div className="mx-4 mb-4 p-3 rounded-lg bg-secondary/50">
        <div className="text-2xl font-bold">₹{plan.price}</div>
        <div className="text-xs text-muted-foreground">per month</div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 gap-2 mx-4 mb-4">
        <SpecBox icon={<Server className="w-4 h-4" />} label={plan.ram} sublabel="RAM" color="primary" />
        <SpecBox icon={<Cpu className="w-4 h-4" />} label={plan.cpu} sublabel={plan.cpuModel} color="green" />
        <SpecBox icon={<HardDrive className="w-4 h-4" />} label={plan.storage} sublabel={plan.storageType} color="primary" />
        <SpecBox icon={<CircleDot className="w-4 h-4" />} label={plan.ports} sublabel="Additional" color="green" />
      </div>

      {/* Info Rows */}
      <div className="mx-4 mb-4 space-y-2 text-sm">
        <InfoRow icon={<CircleDot className="w-3 h-3 text-destructive" />} label="Backups" value="On Demand" />
        <InfoRow icon={<MapPin className="w-3 h-3 text-destructive" />} label="Locations" value="India, Mumbai/Delhi" />
        <InfoRow icon={<Shield className="w-3 h-3 text-primary" />} label="DDoS Protection" value="16 TB" />
      </div>

      {/* Features */}
      <div className="mx-4 mb-4">
        <div className="text-xs font-semibold mb-2">Features:</div>
        <div className="grid grid-cols-2 gap-1">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
              <Check className="w-3 h-3 text-green-500" />
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Order Button */}
      <div className="p-4">
        <button 
          className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90"
          style={{
            background: isIntel 
              ? 'linear-gradient(135deg, hsl(270 70% 55%), hsl(290 70% 50%))' 
              : 'linear-gradient(135deg, #ea580c, #f97316)'
          }}
        >
          <Zap className="w-4 h-4" />
          Order Now
        </button>
      </div>
    </div>
  );
};

interface SpecBoxProps {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  color: 'primary' | 'green';
}

const SpecBox = ({ icon, label, sublabel, color }: SpecBoxProps) => (
  <div className={`p-2 rounded-lg ${color === 'primary' ? 'bg-primary/10' : 'bg-green-500/10'}`}>
    <div className="flex items-center gap-1 mb-1">
      <span className={color === 'primary' ? 'text-primary' : 'text-green-500'}>{icon}</span>
      <span className={`text-sm font-semibold ${color === 'primary' ? 'text-primary' : 'text-green-500'}`}>{label}</span>
    </div>
    <div className="text-xs text-muted-foreground truncate">{sublabel}</div>
  </div>
);

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoRow = ({ icon, label, value }: InfoRowProps) => (
  <div className="flex items-center justify-between py-1 border-b border-border/50">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-muted-foreground">{label}</span>
    </div>
    <span className="font-medium">{value}</span>
  </div>
);

export default MinecraftPlans;
