import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/card";

const testimonials = [
  {
    name: "Ayyan",
    position: "CEO @ Ayyan Travels",
    text: "Ali was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Mohammad Attiq",
    position: "Senior Manager @ GreenEarth Fertilizers",
    text: "Working with Ali was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Mian Sajid",
    position: "ZM @ GreenFert Fertilizers",
    text: "Ali's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Muhammad Umar",
    position: "Marketing Director @ SiteBudy",
    text: "Ali is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Amir Akram",
    position: "Owner @ Akram Jewelers",
    text: "Ali's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Don&#39;t just take my word for it. See what my clients have to say
        about my work."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonials) => (
              <Card
                key={testimonials.name}
                className="max-w-xs md:max-w-md md:p-8"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonials.avatar}
                      alt={testimonials.name}
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonials.name}</div>
                    <div className="text-sm md:text-base text-white/40">
                      {testimonials.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm">{testimonials.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
