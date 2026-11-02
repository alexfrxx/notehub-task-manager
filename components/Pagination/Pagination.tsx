'use client';

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import css from './Pagination.module.css';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  forcePage: number;
}

export default function Pagination({
  pageCount,
  onPageChange,
  forcePage
}: PaginationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const onChange = () => setIsMobile(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      pageRangeDisplayed={isMobile ? 1 : 5}
      nextLabel="→"
      previousLabel="←"
      activeClassName={css.active}
      containerClassName={css.pagination}
      marginPagesDisplayed={1}
      forcePage={forcePage}
    />
  );
}
