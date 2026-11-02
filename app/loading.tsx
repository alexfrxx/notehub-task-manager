'use client';

import css from './Loading.module.css';

export default function Loading() {
  return (
    <>
      <p className={css.loader}>Loading, please wait...</p>
    </>
  );
}
