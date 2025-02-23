import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="About Navonmesh Tech Fest"
          text="Empowering Innovation and Technology"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] transition-transform duration-300 hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">About Navonmesh</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Navonmesh Tech Fest is a premier technology festival celebrating innovation and creativity
              </p>
              <ul className="body-2">
                {[
                  "Exciting Tech Workshops",
                  "Industry Expert Talks",
                  "Innovative Project Showcase",
                  "Networking Opportunities"
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0">
                <img
                  src={service3}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Student Innovation</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Showcase your innovative projects and ideas at Navonmesh Tech Fest. Join us in shaping the future!
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Tech Workshops</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Participate in hands-on workshops led by industry experts and gain practical experience in cutting-edge technologies.
                </p>
              </div>
              <PhotoChatMessage />
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
