import css from './SearchBox.module.css';

interface SearchBoxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <label className={css.wrapper}>
      <input
        onChange={onChange}
        type="text"
        name="notes"
        placeholder="Search notes"
        className={css.input}
      />
      <svg width="18" height="20">
        <use href="/sprite.svg#finder"></use>
      </svg>
    </label>
  );
}
