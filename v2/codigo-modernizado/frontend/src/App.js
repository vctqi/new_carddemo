import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import LoginPage from './pages/Auth/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import { isAuthenticated } from './utils/auth';

// Lazy load other pages to improve initial load time
const UsersPage = React.lazy(() => import('./pages/Admin/UsersPage'));
const UserFormPage = React.lazy(() => import('./pages/Admin/UserFormPage'));
const ProfilePage = React.lazy(() => import('./pages/Profile/ProfilePage'));
const CustomersPage = React.lazy(() => import('./pages/Customers/CustomersPage'));
const AccountsPage = React.lazy(() => import('./pages/Accounts/AccountsPage'));
const CardsPage = React.lazy(() => import('./pages/Cards/CardsPage'));
const TransactionsPage = React.lazy(() => import('./pages/Transactions/TransactionsPage'));

// Loading component for lazy-loaded pages
const LazyLoading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' 
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Protected routes with MainLayout */}
      <Route element={<MainLayout />}>
        {/* Redirect to dashboard if authenticated, otherwise to login */}
        <Route 
          path="/" 
          element={
            isAuthenticated() ? 
            <Navigate to="/dashboard" replace /> : 
            <Navigate to="/login" replace />
          } 
        />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <React.Suspense fallback={<LazyLoading />}>
                <ProfilePage />
              </React.Suspense>
            </ProtectedRoute>
          } 
        />
        
        {/* Admin routes */}
        <Route 
          path="/admin/users" 
          element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
              <React.Suspense fallback={<LazyLoading />}>
                <UsersPage />
              </React.Suspense>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/admin/users/create" 
          element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
              <React.Suspense fallback={<LazyLoading />}>
                <UserFormPage />
              </React.Suspense>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/admin/users/edit/:id" 
          element={
            <ProtectedRoute requiredRole="ROLE_ADMIN">
              <React.Suspense fallback={<LazyLoading />}>
                <UserFormPage />
              </React.Suspense>
            </ProtectedRoute>
          } 
        />
        
        {/* Customer routes */}
        <Route 
          path="/customers" 
          element={
            <ProtectedRoute>
              <React.Suspense fallback={<LazyLoading />}>
                <CustomersPage />
              </React.Suspense>
            </ProtectedRoute>
          } 
        />
        
        {/* Account routes */}
        <Route 
          path="/accounts" 
          element={
            <ProtectedRoute>
              <React.Suspense fallback={<LazyLoading />}>
                <AccountsPage />
              </React.Suspense>
            </ProtectedRoute>
          } 
        />
        
        {/* Card routes */}
        <Route 
          path="/cards" 
          element={
            <ProtectedRoute>
              <React.Suspense fallback={<LazyLoading />}>
                <CardsPage />
              </React.Suspense>
            </ProtectedRoute>
          } 
        />
        
        {/* Transaction routes */}
        <Route 
          path="/transactions" 
          element={
            <ProtectedRoute>
              <React.Suspense fallback={<LazyLoading />}>
                <TransactionsPage />
              </React.Suspense>
            </ProtectedRoute>
          } 
        />
        
        {/* 404 - Not Found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;