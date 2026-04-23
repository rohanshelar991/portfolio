"use client";

import Link from "next/link";
import React from "react";
import { ChevronLeftIcon } from "lucide-react";
import Footer from "@/components/Footer";

const TermsAndConditionsPage = () => {
  return (
    <div className="py-6">
      <div className="px-6">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 bg-black text-white py-2 px-4 w-fit rounded-md pr-6 hover:bg-black/90 duration-300 transition-all ease-in-out"
          >
            <ChevronLeftIcon /> Back
          </Link>
        </div>
        <div className="pt-6 pb-[4rem]">
          <h2 className="header-h">Terms and Conditions</h2>
          <p className="mb-4">
            By accessing or using this portfolio website, you agree to the
            following terms. If you do not agree, please do not use the site.
          </p>

          <ol className="list-decimal list-inside list-wrapper">
            <li>
              <span>Acceptance of Terms</span>
              <div>
                <p>
                  By accessing this website, you acknowledge that you have read,
                  understood, and agree to these terms.
                </p>
              </div>
            </li>
            <li>
              <span>Services Provided</span>
              <div>
                <p>
                  This website is intended to showcase Rohan Shelar&apos;s work,
                  skills, projects, experience, and contact information. Any
                  project, internship, freelance, or collaboration work
                  discussed through the site will be subject to separate direct
                  communication and agreement.
                </p>
              </div>
            </li>
            <li>
              <span>User Obligations</span>
              <div>
                <p>
                  You agree to provide accurate and respectful information when
                  contacting through this website.
                </p>
                <p>
                  You agree not to misuse, scrape aggressively, disrupt, or
                  attempt to interfere with the operation of this website.
                </p>
              </div>
            </li>
            <li>
              <span>Intellectual Property</span>
              <div>
                <p>
                  All content, including text, images, code, and designs, is the
                  intellectual property of Rohan Shelar unless stated otherwise.
                  Reuse, redistribution, or commercial copying without
                  permission is not allowed.
                </p>
              </div>
            </li>
            <li>
              <span>Accuracy of Information</span>
              <div>
                <p>
                  The portfolio is maintained in good faith, but some content
                  may change over time, including project links, availability,
                  resume details, and ongoing work.
                </p>
              </div>
            </li>
            <li>
              <span>Limitation of Liability</span>
              <div>
                <p>
                  This site is provided on an as-is basis. Rohan Shelar is not
                  liable for any direct or indirect loss arising from the use of
                  the website, external links, or reliance on its content.
                </p>
              </div>
            </li>
            <li>
              <span>Governing Law</span>
              <div>
                <p>
                  These terms are governed by the laws of the state of
                  Maharashtra and the Republic of India. Disputes will be
                  resolved under the jurisdiction of courts in Maharashtra.
                </p>
              </div>
            </li>
            <li>
              <span>Contact Information</span>
              <div className="flex flex-col gap-1">
                <p>For any inquiries, contact us via:</p>
                <div className="flex flex-col gap-1">
                  <span>
                    <a href="mailto:rmshelar11@gmail.com">
                      Email - rmshelar11@gmail.com
                    </a>
                  </span>
                  <span>Contact Form on the Website</span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
