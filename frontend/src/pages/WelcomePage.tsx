import { Button } from "../components/ui/button";
import { CirclePlay } from "lucide-react";
import { PawPrint } from "lucide-react";
import catanddog2 from "../assets/cat-and-dog-2.jpg";
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
        <p className="text-center">
          Discover local pets waiting for a loving home. Our gentle matchmaking
          process helps you find the companion that fits your life perfectly.
        </p>
        <div className="flex flex-col gap-5">
          {" "}
          <Button size="lg">Get Started</Button>
          <Button
            className="text-[#6e8670] bg-[#ceeacf]"
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
    </>
  );
};

export default WelcomePage;
