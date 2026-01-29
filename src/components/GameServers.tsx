import minecraftImg from '@/assets/games/minecraft.jpg';
import hytaleImg from '@/assets/games/hytale.jpg';
import palworldImg from '@/assets/games/palworld.jpg';
import enshroudedImg from '@/assets/games/enshrouded.jpg';
import projectZomboidImg from '@/assets/games/project-zomboid.jpg';
import terrariaImg from '@/assets/games/terraria.jpg';
import valheimImg from '@/assets/games/valheim.jpg';
import arkSurvivalImg from '@/assets/games/ark-survival.jpg';
import arma3Img from '@/assets/games/arma3.jpg';

const games = [
  { name: 'MINECRAFT', image: minecraftImg },
  { name: 'HYTALE', image: hytaleImg },
  { name: 'PALWORLD', image: palworldImg },
  { name: 'ENSHROUDED', image: enshroudedImg },
  { name: 'PROJECT ZOMBOID', image: projectZomboidImg },
  { name: 'TERRARIA', image: terrariaImg },
  { name: 'VALHEIM', image: valheimImg },
  { name: 'ARK: SURVIVAL', image: arkSurvivalImg },
  { name: 'ARMA 3', image: arma3Img },
];

const GameServers = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 gradient-text-purple">
          GAME SERVER
        </h2>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {games.map((game, index) => (
            <div 
              key={game.name}
              className="game-card animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-3 text-center border-t border-border">
                <span className="text-xs font-semibold text-foreground">{game.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-10">
          <button className="btn-primary-gradient px-6 py-2.5 rounded-lg font-medium text-foreground text-sm">
            SEE ALL GAMES
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameServers;
