import TabSwitcher from '@/components/TabSwitcher';
import React, { FC } from 'react';
import SignInForm from './SignInForm';

const AuthPage: FC = () => {
  return (
    <div className='flex relative w-full h-screen bg-backgroud'>
      <div className='max-w-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <TabSwitcher SignInTab={<SignInForm />} SignUpTab={<h2>Sign Up</h2>} />
      </div>
    </div>
  );
}

export default AuthPage;
