import React, { Suspense } from 'react';
import { AppBarStyled } from 'components/AppBar/AppBar.styled';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      <AppBarStyled>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBarStyled>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
