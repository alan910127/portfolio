import { ScrollableMain } from "@/components/ScrollableMain";
import { ElevatorLayout } from "@/layouts/ElevatorLayout";
import { motion } from "framer-motion";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import avatar from "~/images/avatar.jpg";

const HomePage: NextPage = () => {
  return (
    <ElevatorLayout title="Hello, I am Alan" currentLabel="Home">
      <ScrollableMain className="flex flex-col items-center gap-8">
        <motion.section
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          <Image
            src={avatar}
            alt="Avatar"
            className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48 md:h-64 md:w-64"
            placeholder="blur"
          />
        </motion.section>

        <motion.section
          className="flex flex-col items-center gap-4 text-slate-700"
          initial={{ opacity: 0, y: "50%" }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h1 className="flex flex-col items-center text-lg sm:text-xl md:text-2xl">
            <span>Hello, my name is</span>
            <strong className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Li-Lun Lin
            </strong>
          </h1>
          <p className="-mt-4 text-center sm:text-lg md:text-xl">
            You can also call me Alan
          </p>
          <p className="text-center italic text-slate-500 sm:text-lg md:text-xl">
            A passionate learner in Computer Science and new technology
          </p>

          <ul className="mt-4 flex gap-8 text-2xl">
            <li>
              <Link href="https://github.com/alan910127">
                <BsGithub />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/lilunlin0127">
                <BsLinkedin />
              </Link>
            </li>
          </ul>
        </motion.section>
      </ScrollableMain>
    </ElevatorLayout>
  );
};

export default HomePage;
