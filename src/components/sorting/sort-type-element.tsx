import { SortType } from 'const';


type SortTypeElementProps = {
  value: SortType;
  selectedType: SortType;
  onClick: (value: string) => void;
}

function SortTypeElement({ value, selectedType, onClick }: SortTypeElementProps) {
  const activeClass = (value === selectedType) ? 'places__option--active' : '';

  return (
    <li className={`places__option ${activeClass}`} tabIndex={0} onClick={() => onClick(value)}>
      {value}
    </li>
  );
}


export default SortTypeElement;

