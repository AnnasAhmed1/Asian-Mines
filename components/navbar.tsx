"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "../styles/component.css";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

import { P2 } from "./helper";

const Navbar = ({
  navs,
  scrollToSection,
  activeSection,
}: {
  navs: Array<any>;
  scrollToSection: any;
  activeSection: any;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div
            className="logo-container"
            style={{
              
            }}
          >
            <Image
              src={logo}
              alt="logo"
              style={{
           
              }}
            />
            <div
            className="logo-text"
              style={{
             
              }}
            >
              <p>
                Asian Mines
                <br />
                and Minerals
              </p>
            </div>
          </div>
          <div className="hide-laptop">
            <P2
              text="Leading Exporter"
              color="#ffffff"
              fontWeight="bold"
              margin="0 0 3px 0"
            />
            <P2 text="of Chrome Ore" color="#ffffff" fontWeight="bold" />
          </div>
          <ul className="list hide-tablet">
            {navs?.map((nav, index) => {
              return (
                <li
                  onClick={(e) => {
                    scrollToSection(e, nav.id);
                  }}
                  className={`${
                    activeSection === nav.id ? "nav-active" : null
                  }`}
                  key={index}
                >
                  {nav.title}
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="show-tablet"
          >
            <MenuIcon />
          </button>
          {open ? (
            <ul className="list-responsive">
              {navs?.map((nav, index) => {
                return (
                  <li
                    onClick={(e) => {
                      scrollToSection(e, nav.id);
                      setOpen(false);
                    }}
                    className={`${
                      activeSection === nav.id ? "nav-active" : null
                    }`}
                    key={index}
                  >
                    {nav.title}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
