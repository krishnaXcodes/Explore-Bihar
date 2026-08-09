import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumb.css';

const Breadcrumb = ({ items = [] }) => {
  const location = useLocation();
  
  // If no items provided, try to auto-generate from path
  const breadcrumbItems = items.length > 0 ? items : (() => {
    const paths = location.pathname.split('/').filter(p => p);
    
    if (paths.length === 0) return [];
    
    return paths.map((path, index) => {
      const url = `/${paths.slice(0, index + 1).join('/')}`;
      const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
      
      return {
        label,
        url,
        active: index === paths.length - 1
      };
    });
  })();

  if (breadcrumbItems.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link to="/" className="breadcrumb__link breadcrumb__link--home" aria-label="Home">
            <Home size={16} />
          </Link>
        </li>
        
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.url || index}>
            <li className="breadcrumb__separator" aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="breadcrumb__item">
              {item.active ? (
                <span className="breadcrumb__current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.url} className="breadcrumb__link">
                  {item.label}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
