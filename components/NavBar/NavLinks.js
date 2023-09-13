import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";

const NavLinks = (props) => {
  const router = useRouter();
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const performScroll = (elementId) => {
    // const target = document.getElementById(elementId).offsetTop;

    scroller.scrollTo(elementId, {
      duration: 800, // adjust the time of the scroll (ms)
      delay: 0,
      smooth: "easeOutQuad",
      offset: -80, // subtract your header's height here
    });
  };

  const handleClick = (e, path, targetId) => {
    e.preventDefault();

    if (router.pathname !== path) {
      router.push(path).then(() => {
        if (targetId) {
          performScroll(targetId);
        }
      });
    } else if (targetId) {
      performScroll(targetId);
    }
  };

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => props.isMobile && props.onCloseMobileMenu()}
      >
        <Link href="/">Home</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => props.isMobile && props.onCloseMobileMenu()}
      >
        <Link href="/#targetElement" legacyBehavior>
          <a onClick={(e) => handleClick(e, "/", "targetElement")}>Služby</a>
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => props.isMobile && props.onCloseMobileMenu()}
      >
        <Link href="/kontakt">Kontakt</Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
