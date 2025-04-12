type PremiumMarkProps = {
  isPremium: boolean;
  isCardMode: boolean;
}

function PremiumMark({isPremium, isCardMode}: PremiumMarkProps) {
  return isPremium && (
    <div className={isCardMode ? 'place-card__mark' : 'offer__mark'}>
      <span>Premium</span>
    </div>
  );
}


export default PremiumMark;
