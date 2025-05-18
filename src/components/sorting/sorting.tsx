import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setSortType } from 'store/action';
import { SortType } from 'const';


function Sorting() {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);

  const [opened, setOpened] = useState(false);
  const openedClass = opened ? 'places__options--opened' : '';


  const handleListClick = (evt: FormEvent<HTMLFormElement>) => {
    setOpened(!opened);

    const target = evt.target as HTMLElement;
    const text = target.textContent ?? '';

    const index = Object.values<string>(SortType).findIndex((val) => val === text);
    if (index === -1) {
      return;
    }

    const type = SortType[Object.keys(SortType)[index] as keyof typeof SortType];


    dispatch(setSortType(type));
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleListClick}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openedClass}`}>
        <li className="places__option places__option--active" tabIndex={0}>{SortType.Popular}</li>
        <li className="places__option" tabIndex={0}>{SortType.ToHighPrice}</li>
        <li className="places__option" tabIndex={0}>{SortType.ToLowPrice}</li>
        <li className="places__option" tabIndex={0}>{SortType.Top}</li>
      </ul>
    </form>
  );
}


export default Sorting;
