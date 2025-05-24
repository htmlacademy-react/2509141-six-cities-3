import GoodsItem from './goods-item/goods-item';


type GoodsProps = {
  goods: string[];
}

function Goods({ goods }: GoodsProps) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((item) => <GoodsItem item={item} key={item} />)}
      </ul>
    </div>
  );
}


export default Goods;
