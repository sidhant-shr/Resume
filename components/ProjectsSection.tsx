import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Car Bazaar( Car ShowCase App)",
    description:
      "Car Bazaar is a Car show-case app using NextJS ,typescript, tailwind CSS and headless UI.",
    image: "/carshowcase.png",
    github: "https://github.com/sidhant-shr/Car_Bazaar-car-show-case-app-using-next.js-",
    link: "https://car-bazaar-car-show-case-app-using-next-js.vercel.app",
  },
  {
    name: "Food Ordering App",
    description: "Food ordering app using react js , implementing context , reducer and state hooks alongwith firebase .",
    image: "/foodorder.png",
    github: "https://github.com/sidhant-shr/food_order_app",
    link: "https://food-order-app-nu-fawn.vercel.app",
  },
  {
    name: "Xplore",
    description:
      "Ethereum block explorer using Alchemy SDK , react.",
    image: "/xplore.png",
    github: "https://github.com/sidhant-shr/Xplore",
    link: "xplore-liard.vercel.app",
  },
  {
  name: "React Weather App",
  description:
    "React Weather App to show the current weather and the forecast for next 7 days ,using the openWeather Api and GeoDb Api",
  image: "/weather.png",
  github: "https://github.com/sidhant-shr/react-weather",
  link: "react-weather-app-beryl-xi.vercel.app",
},
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
