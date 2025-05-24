import { useState } from 'react';
import { SortType } from 'const';
import { setSortType } from 'store/action';
import { getKeyByValue } from 'utils/util';
import { useAppDispatch, useAppSelector } from 'hooks';
import SortTypeElement from './sort-type-element';


function Sorting() {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);

  const [opened, setOpened] = useState(false);
  const openedClass = opened ? 'places__options--opened' : '';


  const handleListChange = (value: string) => {
    setOpened(!opened);

    const type = getKeyByValue(value, SortType) ?? SortType.Popular;
    dispatch(setSortType(type));
  };

  const handleListClick = () =>
    setOpened(!opened);


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleListClick}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openedClass}`}>
        {/* ❔ Передать sortType в props лучше чем вызывать useAppSelector в каждом из <SortTypeElement>? */}
        {Object.values(SortType).map((type) => <SortTypeElement value={type} selectedType={sortType} key={type} onClick={handleListChange} />)}
      </ul>
    </form>
  );
}


export default Sorting;
