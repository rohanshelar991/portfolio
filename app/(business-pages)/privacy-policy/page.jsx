"use client";

import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
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
          <h2 className="header-h">Privacy Policy</h2>
          <p className="mb-4">
            This privacy policy explains how information shared through Rohan
            Shelar&apos;s portfolio is collected, used, and handled.
          </p>

          <ol className="list-decimal list-inside list-wrapper">
            <li>
              <span>Information We Collect</span>
              <div>
                <p>We may collect the following information:</p>
                <ul>
                  <li>
                    Name, email address, phone number, and message content
                    submitted through the contact form.
                  </li>
                  <li>Basic usage and analytics data if analytics tools are enabled.</li>
                </ul>
              </div>
            </li>
            <li>
              <span>How We Use Your Information</span>
              <div>
                <p>We use your information to:</p>
                <ul>
                  <li>Respond to internship, collaboration, freelance, or project inquiries.</li>
                  <li>Follow up on conversations started through the website.</li>
                  <li>Improve the portfolio experience and understand general traffic patterns.</li>
                </ul>
              </div>
            </li>
            <li>
              <span>Data Protection</span>
              <div>
                <p>
                  Reasonable steps are taken to protect submitted information.
                  However, no website or email workflow can guarantee absolute
                  security, so please avoid sending highly sensitive personal or
                  financial details through the contact form.
                </p>
              </div>
            </li>
            <li>
              <span>Third-Party Services</span>
              <div>
                <p>
                  This website may use third-party services such as analytics,
                  hosting, 3D asset delivery, or email delivery providers.
                  Those services may process limited technical or submitted data
                  as part of normal website operation.
                </p>
              </div>
            </li>
            <li>
              <span>Cookies</span>
              <div>
                <p>
                  Basic cookies or local storage may be used for functionality,
                  performance, or analytics. You can manage these preferences
                  through your browser settings.
                </p>
              </div>
            </li>
            <li>
              <span>Your Rights</span>
              <div>
                <p>
                  You can request correction or deletion of personal information
                  that you have submitted through the website by contacting:
                </p>
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
            <li>
              <span>Policy Updates</span>
              <div>
                <p>
                  This policy may be updated from time to time. The latest
                  version published on this page will be treated as the current
                  version.
                </p>
              </div>
            </li>
            <li>
              <span>Contact Information</span>
              <div className="flex flex-col gap-1">
                <p>
                  For questions regarding this privacy policy, contact us via:
                </p>
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

export default PrivacyPolicyPage;
