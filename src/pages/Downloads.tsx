import { Download, FileText, Image, Package, Music, Video, Archive } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// File type icons mapping
const getFileIcon = (type: string) => {
  switch (type) {
    case 'image': return Image;
    case 'video': return Video;
    case 'audio': return Music;
    case 'archive': return Archive;
    case 'document': return FileText;
    default: return Package;
  }
};

// Configure your downloadable files here
const downloadableFiles = [
  {
    id: 1,
    title: "Minecraft Server Setup Guide",
    description: "Complete step-by-step guide to setting up your own Minecraft server with plugins and optimization tips.",
    thumbnail: "/placeholder.svg",
    downloadUrl: "https://example.com/file1.pdf",
    fileSize: "2.5 MB",
    fileType: "document",
    category: "Guides"
  },
  {
    id: 2,
    title: "Custom Server Pack",
    description: "Pre-configured modpack with optimized settings for the best gaming experience on our servers.",
    thumbnail: "/placeholder.svg",
    downloadUrl: "https://example.com/file2.zip",
    fileSize: "150 MB",
    fileType: "archive",
    category: "Mods"
  },
  {
    id: 3,
    title: "Codenest Wallpaper Pack",
    description: "High-quality wallpapers featuring our brand and gaming themes for desktop and mobile.",
    thumbnail: "/placeholder.svg",
    downloadUrl: "https://example.com/file3.zip",
    fileSize: "25 MB",
    fileType: "image",
    category: "Media"
  },
  {
    id: 4,
    title: "Discord Bot Template",
    description: "Ready-to-use Discord bot template with basic commands and moderation features included.",
    thumbnail: "/placeholder.svg",
    downloadUrl: "https://example.com/file4.zip",
    fileSize: "5 MB",
    fileType: "archive",
    category: "Tools"
  },
  {
    id: 5,
    title: "Server Configuration Templates",
    description: "Optimized configuration files for various game servers including Minecraft, Palworld, and more.",
    thumbnail: "/placeholder.svg",
    downloadUrl: "https://example.com/file5.zip",
    fileSize: "1.2 MB",
    fileType: "archive",
    category: "Configs"
  },
  {
    id: 6,
    title: "Getting Started Video Tutorial",
    description: "Video walkthrough explaining how to set up and manage your game server effectively.",
    thumbnail: "/placeholder.svg",
    downloadUrl: "https://example.com/file6.mp4",
    fileSize: "350 MB",
    fileType: "video",
    category: "Tutorials"
  },
];

const categories = ["All", ...new Set(downloadableFiles.map(file => file.category))];

const Downloads = () => {
  const handleDownload = (url: string, title: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = title;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <div className="section-badge mb-6 mx-auto w-fit">
                <Download className="w-4 h-4 text-primary" />
                <span>Downloads</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text-cyan">Free Resources</span> & Downloads
              </h1>
              <p className="text-lg text-muted-foreground">
                Download guides, templates, mods, and tools to enhance your gaming and hosting experience.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center animate-fade-in">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 text-sm font-medium text-foreground"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloadableFiles.map((file, index) => {
                const FileIcon = getFileIcon(file.fileType);
                return (
                  <div
                    key={file.id}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden bg-secondary/30">
                      <img
                        src={file.thumbnail}
                        alt={file.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-medium text-primary backdrop-blur-sm">
                          {file.category}
                        </span>
                      </div>
                      
                      {/* File Type Icon */}
                      <div className="absolute top-3 right-3">
                        <div className="w-10 h-10 rounded-lg bg-card/80 backdrop-blur-sm flex items-center justify-center border border-border">
                          <FileIcon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {file.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {file.description}
                      </p>
                      
                      {/* File Info & Download */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                          {file.fileSize}
                        </span>
                        <Button
                          onClick={() => handleDownload(file.downloadUrl, file.title)}
                          className="btn-primary-gradient text-foreground font-medium gap-2"
                          size="sm"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-xl p-8 animate-fade-in">
              <div className="icon-circle-cyan mx-auto mb-4">
                <Package className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Need Something Specific?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Contact our support team and we'll help you get the resources you need.
              </p>
              <a
                href="https://support.codenestsolution.shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-secondary-gradient text-foreground font-medium">
                  Contact Support
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Downloads;
