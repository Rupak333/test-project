import React, { useState } from "react";
import { useEffect } from "react";
import {
  MdOutlineMenu,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { link, useLocation } from "react-router-dom";
import logo from "../assets/image.png";
const Newnab = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  const [showMenu, setShowMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showProgram, setShowProgram] = useState(false);
  const [showSubject, setShowSubject] = useState(false);
  const [showSchollership, setShowSchollership] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!ShowMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };
  useEffect(() => {
    if (!showMenu) {
      document.body.style.overflow = "";
    }
  }, [showMenu]);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    if (showProgram) {
      setShowProgram(false);
    }
    if (showSchollership) {
      setShowSchollership(false);
    }
    if (showSubject) {
      setShowSubject(false);
    }
  };

  const handleSubjectClick = () => {
    setShowSubject(!showSubject);
    if (showAbout) {
      setShowAbout(false);
    }
    if (showProgram) {
      setShowProgram(false);
    }
    if (showSchollership) {
      setShowSchollership(false);
    }
  };

  const handleScholarClick = () => {
    setShowSchollership(!showSchollership);
    if (showAbout) {
      setShowAbout(false);
    }
    if (showProgram) {
      setShowProgram(false);
    }
    if (showSubject) {
      setShowSubject(false);
    }
  };

  const handleProgramClick = () => {
    setShowProgram(!showProgram);

    if (showAbout) {
      setShowAbout(false);
    }
    if (showSchollership) {
      setShowSchollership(false);
    }
    if (showSubject) {
      setShowSubject(false);
    }
  };
};

const aboutLinks = [
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQs" },
  { to: "/features", label: "Our Facilities" },
  { to: "/apply", label: "Apply Online" },
  { to: "/teams", label: "Our Team" },
  { to: "/imageGallery", label: "Gallery" },
];

const subjectLinks = [
  { to: "/haSubjects", label: "PCL In General Medicine (HA)" },
  { to: "/pharmacySub", label: "Diploma In Pharmacy" },
];

const programLinks = [
  { to: "/ha", label: "PCL In General Medicine (HA)" },
  { to: "/pharmacy", label: "Diploma In Pharmacy" },
  { to: "/", label: "PCL In Nursing" },
];

const scholarLinks = [
  { to: "/scholarHA", label: "PCL In General Medicine (HA)" },
  { to: "/ScholarDPH", label: "Diploma In Pharmacy" },
];

export default function Newnab() {
  return <div></div>;
}
