// ❔ PremiumMark используется только вместе с PlaceCard.
// Допустимо хранить их в одной директории?
// Или один tsx строго в своей собственной папке?

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
