import React from "react";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-neutral to-slate-500 rounded-t-2xl text-base-100 py-16">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Top Section: Branding */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white hover:text-blue-400 transition-all duration-300">
            Loop API
          </h2>
          <p className="text-lg text-gray-400 mt-2 max-w-lg">
            The open-source API marketplace for developers. Discover, publish,
            and integrate APIs seamlessly.
          </p>
        </div>

        {/* Bottom Section: Links & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full text-lg">
          {/* Services */}
          <div className="flex flex-col items-center">
            <h6 className="font-semibold text-xl text-white mb-3">Services</h6>
            <Link
              to="/explore"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-normal"
            >
              Explore APIs
            </Link>
            <Link
              to="/publish"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-normal"
            >
              Publish API
            </Link>
            <Link
              to="/manage"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-normal"
            >
              Manage APIs
            </Link>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center">
            <h6 className="font-semibold text-xl text-white mb-3">Company</h6>
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-normal"
            >
              About Us
            </Link>
            <Link
              to="/support"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-normal"
            >
              Contact
            </Link>
            <Link
              to="/developer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-normal"
            >
              About Developer
            </Link>
          </div>

          {/* Community */}
          <div className="flex flex-col items-center">
            <h6 className="font-semibold text-xl text-white mb-3">Community</h6>
            <Link
              to="/docs"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-normal"
            >
              API Docs
            </Link>

            <Link
              to="/blog"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-normal"
            >
              Tech Blog
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center">
            <h6 className="font-semibold text-xl text-white mb-3">Connect</h6>
            <div className="flex space-x-6">
              <Link
                to="https:/github.com/1998amansinha/loop_api"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-blue-400 transition-all duration-300"
              >
                <FaGithub size={28} />
              </Link>
              <a
                href="https://linkedin.com/company/loop-api"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-blue-400 transition-all duration-300"
              >
                <FaLinkedin size={28} />
              </a>

              <Link
                to="https:/github.com/1998amansinha/loop_api"
                className="hover:scale-110 hover:text-blue-400 transition-allduration-300"
              >
                <FaXTwitter size={28} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} Loop API. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
