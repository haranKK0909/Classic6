import React from 'react';
import Button from '../../../components/ui/Button';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories?.map((category) => (
        <Button
          key={category?.id}
          variant={activeCategory === category?.id ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category?.id)}
          className={`transition-organic ${
            activeCategory === category?.id 
              ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
              : 'hover:bg-accent/10 hover:text-accent'
          }`}
        >
          {category?.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;