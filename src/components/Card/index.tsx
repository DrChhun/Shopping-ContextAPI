interface Props {
  image: string;
  title: string;
  price: number;
  rating: {
    rate: number;
  };
}

export const Card: React.FC<Props> = ({ image, title, price, rating }) => {
  return (
    <>
      <div>
        <div className="!aspect-h-6 !aspect-w-5 mb-8">
          <img className="!object-cover rounded-md" src={image} alt={title} />
        </div>
        <p className="text-lg line-clamp-1">{title}</p>
        <div className="flex justify-between">
          <p className="text-2xl font-bold">${price}</p>
          <p>⭐️ {rating.rate}</p>
        </div>
      </div>
    </>
  );
};
