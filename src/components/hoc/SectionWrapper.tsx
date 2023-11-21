import { motion } from "framer-motion";
import React from "react";
import { staggerContainer } from "../../utils/motion";
import { styles } from "../../style";

interface Props {
  Component: React.FC;
  idName: string;
}

const SectionWrapper = ({ Component, idName }: Props) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer({ staggerChildren: 3, delayChildren: 0.3 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
 