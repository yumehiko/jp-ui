import * as React from 'react';

export type MenuSize = 'large' | 'small';

export const MenuSizeContext = React.createContext<MenuSize>('large');

export const useMenuSize = () => React.useContext(MenuSizeContext);
