import React from 'react';

import {classNames} from 'shared/lib/classNames'

import cls from "./Navbar.module.scss";
import {AppLink} from "shared/ui/AppLink";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";

export const Navbar = () => {
  return (
    <div className={classNames(cls.navbar)}>
      <div className={classNames(cls.logo)}></div>
      <div className={classNames(cls.links)}>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY}>Home</AppLink>
        <AppLink to={"/about"}  theme={AppLinkTheme.SECONDARY}>About</AppLink>
      </div>
    </div>
  );
};
