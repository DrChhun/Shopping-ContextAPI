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
      <div className="group">
        <div className="!aspect-h-6 !aspect-w-5 mb-8 overflow-hidden rounded-md">
          <img
            className="!object-cover !h-fit rounded-md group-hover:scale-105 duration-1000"
            src={image}
            alt={title}
          />
        </div>
        <p className="text-lg line-clamp-1">{title}</p>
        <div className="flex justify-between">
          <p className="text-xl md:text-2xl font-semibold md:font-bold">
            ${price}
          </p>
          <p>⭐️ {rating.rate}</p>
        </div>
      </div>
    </>
  );
};
