'use client'
import { LoginPage } from '@/root/components';
import { store } from '@/root/redux';
import { Provider } from 'react-redux';
export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LoginPage />
      </main>
    </Provider>
  );
}