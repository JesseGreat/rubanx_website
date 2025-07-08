export const Section: React.FC<{
    children: React.ReactNode;
    className?: string;
    background?: 'white' | 'gray' | 'orange';
  }> = ({ children, className = '', background = 'white' }) => {
    const backgrounds = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      orange: 'bg-gradient-to-r from-orange-400 to-orange-500'
    };
    
    return (
      <section className={`py-20 ${backgrounds[background]} ${className}`}>
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    );
  };
  