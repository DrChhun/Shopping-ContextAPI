interface Props {
  children: string;
}

export const Title: React.FC<Props> = ({ children }) => (
  <h2 className="text-xl md:text-3xl font-semibold max-w-2xl mx-auto">
    {children}
  </h2>
);
