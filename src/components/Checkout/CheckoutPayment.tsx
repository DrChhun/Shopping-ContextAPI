interface Props {
  subtotal: number;
}

export const CheckoutPayment: React.FC<Props> = ({ subtotal }) => {
  return (
    <>
      <div className="md:flex justify-between mb-4 hidden">
        <p className="font-semibold">Subtotal</p>
        <p className="items-center">${parseFloat(subtotal.toFixed(1))}</p>
      </div>
      <div className="md:flex hidden justify-between mb-4">
        <p className="font-semibold">Discount</p>
        <p>$0.0</p>
      </div>
      <hr className="hidden md:block" />
      <div className="flex justify-between mt-2">
        <p className="font-semibold">Total</p>
        <p>${parseFloat(subtotal.toFixed(1))}</p>
      </div>
    </>
  );
};
