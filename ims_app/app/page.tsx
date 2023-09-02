'use client'
import { LoginPage } from '@/root/components';
import { store } from '@/root/redux';
import { Provider } from 'react-redux';
export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <LoginPage />
      </div>
    </Provider>
  );
}