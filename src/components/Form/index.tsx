import { Star } from "@/assets/svg";

interface Props {}

const Form = (props: Props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <p className="text-[2rem] font-bold text-center desktop:text-4xl mb-8 whitespace-nowrap">
        CONTACT US
      </p>

      <div className="flex flex-col items-center gap-4 mb-8">
        <input
          className="w-full py-2 bg-transparent border-b border-foreground placeholder:text-neutral desktop:py-4"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full py-2 bg-transparent border-b border-foreground placeholder:text-neutral desktop:py-4"
          type="tel"
          placeholder="Phone number"
        />
      </div>

      <button className="w-full button">BOOK NOW</button>
    </form>
  );
};

export { Form };
