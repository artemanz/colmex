import { Star } from "@/assets/svg";
import { Discuss, Settings, Target } from "./assets/svg";
import { Form } from "@/components";

interface Props {}

const Feedback = (props: Props) => {
  return (
    <section id="feedback">
      <div className="desktop:flex">
        <div className="px-4 py-20 text-white bg-foreground basis-1/2">
          <div className="max-w-sm mx-auto">
            <div className="mb-8 text-center">
              <p className="mb-2 text-accent">GET A FREE QUOTE</p>
              <h2 className="mb-4 text-3xl font-bold uppercase font-secondary">
                HOW IT WORKS
              </h2>
              <p>
                Please contact our team or complete the form below. A
                representative will contact you shortly.
              </p>
            </div>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-5">
                <div className="flex-shrink-0 basis-16 min-w-[64px]">
                  <Discuss />
                </div>
                <p>
                  Raise Your Request <br /> We'll talk about your issues, how
                  you use technology, and what you want to get out of IT.
                </p>
              </li>
              <li className="flex items-center gap-5">
                <div className="flex-shrink-0 basis-16 min-w-[64px]">
                  <Settings />
                </div>
                <p>
                  Get Estimate <br /> If we're the right fit, you'll choose the
                  IT service agreement that works best for your organization.
                </p>
              </li>
              <li className="flex items-center gap-5">
                <div className="flex-shrink-0 basis-16 min-w-[64px]">
                  <Target />
                </div>
                <p>
                  Schedule Visit <br /> Within days, you'll be experiencing IT
                  like never before.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20 desktop:basis-1/2">
          <div className="flex items-center justify-center gap-2 mb-5 text-accent">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>

          <div className="w-full max-w-xs desktop:max-w-lg">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feedback };
