type PremiumMarkProps = {
  isPremium: boolean;
}

function PremiumMark({isPremium}: PremiumMarkProps) {
  if (isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }

  return null;
}


export default PremiumMark;
