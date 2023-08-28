import React, { useState } from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className='xs:w-[250px] w-full mb-4'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-3 px-2 min-h-[300px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[16px] font-bold text-center'>
          {title}
        </h3> 
        <p className='text-white text-sm text-left'>
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const [activeHeading, setActiveHeading] = useState('Tech skills');

  const handleClick = (heading) => {
      setActiveHeading(heading);       
  }
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`ml-10 ${styles.sectionSubText}`}>Introduction</p>
        <div className="flex justify-evenly">
        {Object.keys(services).map((heading) => (
          <h2
            key={heading}
            className={`cursor-pointer ${
              activeHeading === heading ? 'bg-blue-500 rounded-xl px-2 text-white' : ''
            } ${styles.sectionHeadMany}`}
            onClick={() => handleClick(heading)}         
        
          >
             {heading}
          </h2>
        ))} 
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 mx-20 text-secondary text-[17px] leading-[30px]'
      >   
          <p className="ml-8">{services[activeHeading].intro}</p>       
        
      </motion.div>

      <div className='mt-20 flex flex-wrap justify-evenly mx-20 gap-2'>
        {services[activeHeading].content.map((item, index) => (
          <ServiceCard key={item.title} index={index}
          title={item.title} icon={item.icon} description={item.description} />
        ))}
      </div>
    </>
  );
};

export default About;
