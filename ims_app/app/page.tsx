'use client'
import { Provider } from 'react-redux';
import { store } from './root/redux';
import { LoginPage } from './root/components';
import AdminNavBar from './root/components/admin-navbar/AdminNavBar';
import { AdminMain } from './root/components/admin-main';
export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LoginPage />
        <AdminNavBar/>
        <AdminMain/>
      </main>
    </Provider>
  );
}