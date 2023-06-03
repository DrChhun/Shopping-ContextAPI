interface Props {
  subtotal: number;
}

export const CheckoutPayment: React.FC<Props> = ({ subtotal }) => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <p className="font-semibold">Subtotal</p>
        <p className="items-center">${subtotal}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="font-semibold">Discount</p>
        <p>$0.0</p>
      </div>
      <hr />
      <div className="flex justify-between mt-2">
        <p className="font-semibold">Total</p>
        <p>${subtotal}</p>
      </div>
    </>
  );
};
