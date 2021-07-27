import React from 'react';
import cn from 'classnames';
import styles from './grid.module.scss';

export const Grid = ({children,container,item,xs,sm,md,lg,spacing,justifyContent,alignItems}) =>{
   const classNames = cn({
      [styles.Grid_container]:container,
      [styles.Grid_item]:item,
      [styles[`Grid_xs_${xs}`]]:xs,
      [styles[`Grid_sm_${sm}`]]:sm,
      [styles[`Grid_md_${lg}`]]:md,
      [styles[`Grid_lg_${lg}`]]:lg,
      [styles[`Grid_spacing_${spacing}`]]:spacing,
      [styles[`Grid_justifyContent_${justifyContent}`]]:justifyContent,
      [styles[`Grid_alignItems_${alignItems}`]]:alignItems,
   });
   return<div className={classNames}>{children}</div>;
};
