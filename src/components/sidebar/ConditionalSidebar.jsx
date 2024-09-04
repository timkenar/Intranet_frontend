import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const ConditionalSidebar = ({ children }) => {
  const location = useLocation();
  const showSidebar = ['/dashboard', '/profile','/search', '/help', '/meetings', '/directory', '/settings', "/meetings/new", "/actions","/notifications", "/resources", "/messenger" ].includes(location.pathname);

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default ConditionalSidebar;
