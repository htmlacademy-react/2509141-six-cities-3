type PremiumMarkProps = {
  isPremium: boolean;
  isCardMode: boolean;
}

function PremiumMark({isPremium, isCardMode}: PremiumMarkProps) {
  if (isPremium) {
    return (
      <div className={isCardMode ? 'place-card__mark' : 'offer__mark'}>
        <span>Premium</span>
      </div>
    );
  }

  return null;
}


export default PremiumMark;
