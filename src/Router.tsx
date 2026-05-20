import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RouterComponent;
