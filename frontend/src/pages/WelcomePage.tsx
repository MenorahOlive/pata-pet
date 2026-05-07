import { Button } from "../components/ui/button";
import { CirclePlay, Search, MessageSquare, HouseHeart } from "lucide-react";
import { PawPrint } from "lucide-react";
import catanddog2 from "../assets/cat-and-dog-2.jpg";

const infoCardContent = [
  {
    divStyles: "p-5 rounded-full bg-green-bg-custom",
    icon: Search,
    IconStyles: "text-green-text-custom  ",
    title: "Search & Discover",
    description:
      " Browse curated profiles of pets in your area with detailed personality traits and needs.",
  },
  {
    divStyles: "p-5 rounded-full bg-red-bg-custom",
    icon: MessageSquare,
    IconStyles: "text-red-text-custom  ",
    title: "Meet & Greet",
    description:
      "Message shelters directly and schedule a safe, soft-introduction meeting at your pace.",
  },
  {
    divStyles: "p-5 rounded-full bg-yellow-bg-custom",
    icon: HouseHeart,
    IconStyles: "text-yellow-text-custom  ",
    title: "Welcome Home",
    description:
      " Complete the adoption with our guided support and start your new life together.",
  },
];

const InfoCard = ({
  divStyles,
  icon: Icon,
  iconStyles,
  title,
  description,
}: {
  divStyles: string;
  icon: any;
  iconStyles: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 p-8 bg-white-custom  rounded-2xl shadow-2xl">
      <div className={divStyles}>
        <Icon className={iconStyles} />
      </div>

      <h4 className="text-2xl text-center font-medium">{title}</h4>
      <p className="text-brown-custom text-center">{description}</p>
    </div>
  );
};

const WelcomePage = () => {
  return (
    <>
      <section className="p-5 text-black-custom flex flex-col gap-8">
        <span className="flex flex-row items-center  justify-center gap-2 text-4xl text-orange-custom font-extrabold">
          <PawPrint className="size-8" />
          PataPet
        </span>
        <h1 className="text-5xl font-medium text-center mt-5">
          Find your new{" "}
          <span className="text-orange-custom font">best friend</span>
        </h1>
        <p className="text-center text-brown-custom">
          Discover local pets waiting for a loving home. Our gentle matchmaking
          process helps you find the companion that fits your life perfectly.
        </p>
        <div className="flex flex-col gap-5">
          {" "}
          <Button size="lg">Get Started</Button>
          <Button
            className="text-green-text-custom bg-green-bg-custom"
            size="lg"
            variant="green"
          >
            <CirclePlay />
            How it works
          </Button>
        </div>
        <div>
          <img src={catanddog2} alt="Image of a cat and dog" />
        </div>
      </section>

      <section className=" p-5 text-black-custom flex flex-col gap-5 bg-amber-50/40">
        <h2 className="text-center text-4xl font-medium mt-5">
          How PataPet <br /> Works
        </h2>
        <p className="text-brown-custom text-center">
          We've simplified the adoption journey to make it as stress-free as
          possible for both you and your future companion.
        </p>
        {infoCardContent.map((l, index) => (
          <InfoCard
            key={index}
            divStyles={l.divStyles}
            icon={l.icon}
            iconStyles={l.IconStyles}
            title={l.title}
            description={l.description}
          />
        ))}
      </section>
    </>
  );
};

export default WelcomePage;
