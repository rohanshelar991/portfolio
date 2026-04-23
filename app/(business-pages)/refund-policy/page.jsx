"use client";

import Footer from "@/components/Footer";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const RefundPolicyPage = () => {
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
          <h2 className="header-h">Refund Policy</h2>
          <p className="mb-4">
            This website is primarily a portfolio and contact platform. Refunds
            are only relevant if a separate paid engagement or freelance
            project is agreed directly with Rohan Shelar.
          </p>

          <ol className="list-decimal list-inside list-wrapper">
            <li>
              <span>Refund Eligibility</span>
              <div>
                <p>
                  If a paid project is canceled before work begins, a full
                  refund may be considered.
                </p>
                <p>
                  If work has already started, any refund decision will depend
                  on completed scope, time invested, and any agreed milestones.
                </p>
              </div>
            </li>
            <li>
              <span>No Refunds After Project Completion</span>
              <div>
                <p>
                  Once agreed deliverables have been completed and approved,
                  refunds are generally not available.
                </p>
              </div>
            </li>
            <li>
              <span>Platform or Transfer Fees</span>
              <div>
                <p>
                  Any third-party payment processing or transfer fees may be
                  deducted from a refund where applicable.
                </p>
              </div>
            </li>
            <li>
              <span>How to Request a Refund</span>
              <div>
                <p>
                  To request a refund, share the project details, payment
                  information, and reason for the request:
                </p>
                <div className="flex flex-col gap-1">
                  <span>
                    <a href="mailto:rmshelar11@gmail.com">
                      Email - rmshelar11@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <span>Dispute Resolution</span>
              <div>
                <p>
                  Every effort will be made to resolve issues fairly through
                  discussion. If a dispute cannot be resolved, it will be
                  handled under the laws and jurisdiction applicable in
                  Maharashtra, India.
                </p>
              </div>
            </li>
            <li>
              <span>Policy Updates</span>
              <div>
                <p>
                  This policy may be revised whenever needed, and the latest
                  version on this page will apply going forward.
                </p>
              </div>
            </li>
            <li>
              <span>Contact Information</span>
              <div className="flex flex-col gap-1">
                <p>For refund inquiries, contact us via:</p>
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

export default RefundPolicyPage;
