interface HeadBannerProps {
  imageUrl: string;
  title?: string;
  subtitle?: string;
  height?: "sm" | "md" | "lg";
}

export const HeadBanner = ({ 
  imageUrl, 
  title, 
  subtitle, 
  height = "md" 
}: HeadBannerProps) => {
  const heightClasses = {
    sm: "h-32 md:h-40",
    md: "h-48 md:h-64",
    lg: "h-64 md:h-80"
  };

  return (
    <section className={`relative ${heightClasses[height]} overflow-hidden`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      {(title || subtitle) && (
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center space-y-2">
            {title && (
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};