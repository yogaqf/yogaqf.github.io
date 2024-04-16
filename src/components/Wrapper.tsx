const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full justify-between md:flex-col">{children}</div>
  );
};
export default Wrapper;
