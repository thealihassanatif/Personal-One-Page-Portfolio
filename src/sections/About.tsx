import { Card } from "@/components/card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/JavaScript.svg";
import HTMLIcon from "@/assets/icons/HTML.svg";
import CssIcon from "@/assets/icons/CSS.svg";
import ReactIcon from "@/assets/icons/React.svg";
import GithubIcon from "@/assets/icons/Github-Dark.svg";
import BootstrapIcon from "@/assets/icons/Bootstrap.svg";
import TailwindCssIcon from "@/assets/icons/TailwindCSS.svg";
import TypescriptIcon from "@/assets/icons/TypeScript.svg";
import CppIcon from "@/assets/icons/CPP.svg";
import PythonIcon from "@/assets/icons/Python.svg";
import GitIcon from "@/assets/icons/Git.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/Sahiwal.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "BootStrap",
    iconType: BootstrapIcon,
  },
  {
    title: "TailwindCSS",
    iconType: TailwindCssIcon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "C++",
    iconType: CppIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "Git",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Writing",
    emoji: "✍️",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Music",
    emoji: "🎵",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what insdpires me."
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shapimg my perspective."
            />

            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card>
            <CardHeader
              title="My Toolbox"
              description="Explore the tools and technologies I use to craft exceptional
                digital experiences."
            />
            <div>
              {toolboxItems.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                >
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smiling memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
