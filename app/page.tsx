import Image from "next/image";
import Header from "./components/Header";
import XIcon from "./components/XIcon";
import MailIcon from "./components/MailIcon";
import LinkedInIcon from "./components/LinkedInIcon";
import GitHubIcon from "./components/GitHubIcon";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="my-20">
        <div className=" flex flex-row justify-between">
          <div className="flex flex-col space-y-6">
            <h2 className="font-semibold text-5xl py-6">Hi, I am Thorben.</h2>
            <p className="">
              I am a computer science and industrial engineering student
              currently studying at Saarland University.
            </p>
            <p className="">
              My fields of interest are{" "}
              <strong>sleek designs, robotics, AI and IoT</strong>.
            </p>
            <p>
              Since you are already here, please have a look at my personal
              projects.
            </p>
            <p>
              In case you have any questions or inquiries, please feel free to
              contact me over my socials.
            </p>
            <div className="flex flex-row space-x-10 py-24">
              <XIcon />
              <MailIcon />
              <LinkedInIcon />
              <GitHubIcon />
            </div>
          </div>

          <div>
            <Image
              src="/IMG_4480.JPG"
              alt="Portrait"
              width="500"
              height="500"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="hero h-screen justify-start px-20">
        <h2 className="text-5xl font-semibold">
          Some of my personal projects include
        </h2>
      </div>
      <div className="hero border w-full">
        <h2 className="text-5xl font-semibold">
          Some of my personal projects include
        </h2>
        <div className="py-24 space-y-6 flex flex-row justify-between">
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold">
              playce - Automated access solution platform
            </h3>
            <div className="flex flex-col space-y-8">
              <p className="flex text-lg">
                Playce is a platform as a system (PaaS) that enables sport clubs
                to seamlessly automate their facilities.
                <br />
                What the platform basically does is, clubs can register and
                offer their facilities over the platform. <br />
                Users can add smart devices from several different brands to
                control access as well as lighting automatically. <br />
                Payments, statistics, device control will be handled by the
                platform automatically.
              </p>
              <ul className="flex content-end justify-end list list-disc text-lg space-y-3 ml-8">
                <p className="font-bold text-xl">To achieve this I utilized:</p>
                <li>
                  <strong>Seam Co.</strong> for smart lock control
                </li>
                <li>
                  <strong>Stripe Connect</strong> for payment processing between
                  multiple parties
                </li>
                <li>
                  <strong>Java Spring Boot</strong> for the backend
                </li>
                <li>
                  <strong>Next.JS</strong> for the frontend
                </li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <Image
              src="/playce_logo.png"
              width="500"
              height="200"
              className=""
              alt="playce logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
