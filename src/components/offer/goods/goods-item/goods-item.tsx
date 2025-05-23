type GoodsItemProps = {
  item: string;
}

function GoodsItem({ item }: GoodsItemProps) {
  return (
    <li className="offer__inside-item">
      {item}
    </li>
  );
}


export default GoodsItem;
