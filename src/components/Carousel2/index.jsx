import { useState } from 'react';
import { CCarousel } from '@coreui/react'
import './styles.css';

export function SimplyCarousel({ children }) {

  return (
    <>
      <CCarousel>
        {children}
      </CCarousel>
    </>
  );
}