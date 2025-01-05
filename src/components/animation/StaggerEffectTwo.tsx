"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const variable = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.09 * index,
      duration: 0.8,
    },
  }),
};

const StaggerEffectTwo = ({
  id,
  children,
}: {
  id: number;
  children: ReactNode;
}) => {
  return (
    <>
      <motion.div
        key={id}
        variants={variable}
        initial="initial"
        whileInView="animate"
        custom={id}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default StaggerEffectTwo;
