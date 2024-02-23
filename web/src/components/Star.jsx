export const Star = ({ value }) => {
  const fullstar = Math.floor(value);
  const halfstar = value - fullstar;
  const emptystar = 5 - Math.ceil(value);
  const stars = [];
  for (let i = 0; i < fullstar; i++) {
    stars.push(
      <img
        key={`full-${i}`}
        src="/images/fullstar.png"
        className="w-3 h-3 "
        alt="star"
      />
    );
  }
  halfstar &&
    stars.push(
      <img
        key="half"
        src="/images/halfstar.png"
        className="w-3 h-3"
        alt="star"
      />
    );
  for (let i = 0; i < emptystar; i++) {
    stars.push(
      <img
        key={`half-${i}`}
        src="/images/empytstar.png"
        className="w-3 h-3 opacity-20"
        alt="star"
      />
    );
  }
  return stars;
};
