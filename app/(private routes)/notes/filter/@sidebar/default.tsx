'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import css from './Sidebar.module.css';

const tags = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link
          href={`/notes/filter/all`}
          className={`${css.menuLink} ${pathname === `/notes/filter/all` ? css.active : ''}`}
        >
          All notes
        </Link>
      </li>
      {tags.map((tag, index) => {
        return (
          <li className={css.menuItem} key={index}>
            <Link
              href={`/notes/filter/${tag}`}
              className={`${css.menuLink} ${pathname === `/notes/filter/${tag}` ? css.active : ''}`}
            >
              {tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
