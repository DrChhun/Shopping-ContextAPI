import { Title } from "../Title";

export const Cta = () => {
  return (
    <div className="text-center space-y-4 container py-8 md:py-16">
      {/* <h2 className="text-xl md:text-3xl max-w-2xl mx-auto font-semibold">
        Subscribe to our newsletter to get updates to our latest collections
      </h2> */}
      <Title>
        Subscribe to our newsletter to get updates to our latest collections
      </Title>
      <p className="text-sm md:text-base font-medium text-slate-600">
        Get 20 off on your first order just by subscribing to our newsletter
      </p>
      <div className="flex justify-center gap-4">
        <input
          className="border-2 focus:outline-black border-gray-200 bg-gray-100 rounded-md py-2 px-4"
          type="text"
          placeholder="Enter your email"
        />
        <a
          className="px-4 py-2 border-2 border-black bg-black text-white rounded-md w-fit font-semibold"
          href="#"
        >
          Subscribe
        </a>
      </div>
      <div className="text-sm">
        <p className="text-slate-600">
          You will be able to unsubscribe at any time.
        </p>
        <p className="text-slate-600">
          Read our Privacy Policy{" "}
          <a className="underline font-semibold" href="#">
            here
          </a>
        </p>
      </div>
    </div>
  );
};
