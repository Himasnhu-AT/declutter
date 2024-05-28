import { FlipWords } from "@/components/animations/flipWord";
import { Boxes } from "@/components/animations/hero/grid-anim";
import { InfiniteMovingCards } from "@/components/animations/infiniteMovingcard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg mb-5">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Introducing Declutter
        </h1>
        <p className="text-center text-primary-foreground mt-2 text-neutral-300 relative z-20">
          xplore a revolutionary way to organize your mind with concepts like
          <FlipWords
            className="text-primary-foreground text-white"
            words={["Kanban", "Mind Mapping", "Pomodoro"]}
          />
        </p>
      </div>
      <section>
        <h1 className="text-center text-4xl text-white mb-4">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-800 rounded-lg">
            <Image
              src="/kanban.svg"
              alt="Kanban Board image"
              height={64}
              width={64}
            />
            <h2 className="text-white text-xl mt-2">Kanban Boards</h2>
            <p className="text-neutral-300 mt-2">
              Organize your tasks in a visual way with Kanban boards.
            </p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg">
            <Image
              src="/mindmap.svg"
              alt="Mind Map board image"
              height={64}
              width={64}
            />
            <h2 className="text-white text-xl mt-2">Mind Mapping</h2>
            <p className="text-neutral-300 mt-2">
              Visualize your thoughts and ideas with mind maps.
            </p>
          </div>
          <div className="p-4 bg-slate-800 rounded-lg">
            <Image
              src="/pomodoro.svg"
              alt="Pomodoro Image"
              height={64}
              width={64}
            />
            <h2 className="text-white text-xl mt-2">Pomodoro Timer</h2>
            <p className="text-neutral-300 mt-2">
              Stay focused and productive with the Pomodoro technique.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center text-4xl text-white mb-4 mt-9">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PricingCard
            title="Free"
            description="Get started for free."
            price={0}
            currency="USD"
            features={["Limited boards", "Limited tasks", "Limited users"]}
          />
          <PricingCard
            title="Pro"
            description="Unlock all features."
            price={10}
            currency="USD"
            features={[
              "Unlimited boards",
              "Unlimited tasks",
              "Unlimited users",
            ]}
          />
          <PricingCard
            title="Enterprise"
            description="Customize your experience."
            priceText={{
              Text: "Get in touch",
              link: "/contact",
            }}
            features={[
              "Custom branding",
              "Custom integrations",
              "Dedicated support",
            ]}
          />
        </div>
      </section>
      <section className=" mt-9 mb-4">
        <h1 className="text-center text-4xl text-white mb-4">Testimonials</h1>
        <TestimonialCards />
      </section>
    </>
  );
}

const PricingCard = ({
  title,
  description,
  price,
  currency,
  priceText,
  features,
}: {
  title: string;
  description: string;
  price?: number;
  priceText?: { Text: string; link: string };
  currency?: string;
  features: string[];
}) => {
  return (
    <>
      <div className="p-4 bg-slate-800 rounded-lg">
        <h2 className="text-white text-2xl mt-2 text-center">{title}</h2>
        <p className=" text-muted-foreground mt-2 text-center text-xl">
          {description}
        </p>
        {features &&
          features.map((feature) => (
            <span
              className="flex flex-row space-x-2 mt-2 space-y-1"
              key={feature}
            >
              <CheckSquareIcon color=" green" size={20} />
              <p className="text-neutral-300 ">{feature}</p>
            </span>
          ))}
        {price !== undefined ||
        currency != undefined ||
        price != null ||
        currency != null ? (
          <Button
            variant={"default"}
            className=" rounded-full min-w-full text-lg my-5 hover:bg-slate-700"
          >
            {price} {currency}
          </Button>
        ) : null}

        {priceText ? (
          <Link href={priceText.link}>
            <Button
              variant={"default"}
              className=" rounded-full min-w-full text-lg my-5 hover:bg-slate-700"
            >
              {priceText.Text}
            </Button>
          </Link>
        ) : null}
      </div>
    </>
  );
};

function TestimonialCards() {
  return (
    <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
