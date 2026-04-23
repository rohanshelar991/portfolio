import ContactForm from "./privateClientComponents/ContactForm";
import dynamic from "next/dynamic";

const EarthCanvas = dynamic(() => import("./Earth"), {
  ssr: true,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-400"></div>
    </div>
  ),
});

const ContactMe = () => {
  return (
    <div id="contactme_wrapper">
      <div className="contactme_header">
        <span className="contactme_eyebrow">Let&apos;s Build Something Strong</span>
        <h1 className="header-h">Contact Me</h1>
        <p className="text-sm md:text-xl">
          Reach out for internships, collaborations, freelance work, or product ideas you want to turn into a real build.
        </p>
      </div>

      <div className="contactme_body">
        <div className="contactme_modal">
          <div className="contactme_meta_card">
            <span className="contactme_meta_label">Fastest way to reach me</span>
            <a href="mailto:rmshelar11@gmail.com" className="contactme_meta_value">
              rmshelar11@gmail.com
            </a>
            <p>
              I usually reply to internship, freelance, and collaboration inquiries with clear next steps, stack fit, and availability.
            </p>
            <div className="contactme_meta_pills">
              <span>Internships</span>
              <span>Freelance</span>
              <span>Collaborations</span>
            </div>
          </div>
          <EarthCanvas />
        </div>
        <div className="contactme_form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
