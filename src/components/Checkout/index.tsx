export const CheckoutItem: React.FC<any> = ({ data }) => {
  console.log(data, "GG");
  return (
    <div>
      {data.map((x: any) => (
        <div
          key={x.name}
          className={`flex gap-8 py-4 ${x.name === "null" && "hidden"}`}
        >
          <div
            className={`w-64 h-64 object-cover ${
              x.name === "null" && "hidden"
            }`}
          >
            <img className={`w-64 h-64 object-cover `} src={x.image} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-semibiold">{x.name}</h2>
            <div className="line-clamp-4">
              <p>{x.name}</p>
            </div>
            <p>{x.size}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
