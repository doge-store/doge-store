import { PiCheckCircle } from "react-icons/pi";
import CTASectiont from "../components/homepage/CTASectiont";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/breadcrumb_img_22.png";
function PrivacyPolicy() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Privacy Policy"
        pageDesc="Your privacy matters. Our Privacy Policy outlines how we handle your data in providing Accounting & Payroll Processing Services."
        pageTitle="Privacy Policy"
      />

      <section className="container stp-30 sbp-30 flex flex-col gap-2">
        <div className=" flex justify-start items-start flex-col">
          <p className="bg-p1 py-3 px-5 text-white rounded-full">
            Privacy Policy
          </p>
          <h2 className="display-4 py-6">Privacy Policy</h2>
          <p className=" text-bodyText">
            We collect necessary information to provide our Accounting & Payroll
            Processing Services, including personal details (e.g., names,
            addresses), contact information, and financial data required for
            payroll and accounting purpose
          </p>
        </div>

        <div className="">
          <h3 className="heading-1 py-6">Information we collect</h3>
          <p className=" text-bodyText">
            In the course of providing Accounting & Payroll Processing Services,
            we collect essential information to ensure accurate and efficient
            service delivery. This may include personal details such as names,
            addresses, and contact information, as well as financial data
            necessary for payroll and accounting purposes. We prioritize the
            security and confidentiality of this information, employing
            industry-standard measures to safeguard it. Rest assured, our data
            collection is guided by a commitment to transparency,
          </p>

          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              Accounting & Payroll Processing Services, we collect essential
              information
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              commitment to transparency, compliance with relevant regulations
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              We prioritize the security and confidentiality of this
              information,
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="heading-2 py-6">Use of information</h3>
          <p className=" text-bodyText">
            The information collected during the provision of Accounting &
            Payroll Processing Services is used solely for the purpose of
            delivering accurate and efficient financial services. We employ this
            data to facilitate payroll processing, accounting tasks, and related
            functions essential to your business operations. Your information is
            handled with the utmost care, ensuring confidentiality and
            compliance with relevant data protection regulations. We do not use
            your data for purposes beyond the scope of our services, and it is
            not shared with unauthorized third parties. Our commitment is to
            utilize your information responsibly, enhancing the quality and
            precision of the financial services we provide. For further details,
            please consult our comprehensive Privacy Policy.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Data security</h3>
          <p className=" text-bodyText">
            At Accupay, we prioritize the security of your data. Rigorous
            measures are in place to safeguard the confidentiality and integrity
            of the information entrusted to us. This includes robust encryption
            protocols, access controls, and regular security audits. We are
            committed to protecting your data from unauthorized access,
            disclosure, alteration, or destruction. Our dedicated security team
            ensures compliance with industry best practices and relevant data
            protection regulations.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Data sharing and third parties</h3>
          <p className=" text-bodyText">
            We understand the importance of your privacy. Your data, collected
            for Accounting & Payroll Processing Services, is treated with utmost
            confidentiality. We do not share your information with third parties
            unless essential for service delivery. In such cases, strict
            contractual agreements ensure that third parties adhere to our
            privacy standards. Rest assured, your data is never sold, traded, or
            used for unrelated purposes. Our commitment is to transparency and
            responsible data handling. For more details on data sharing
            practices and the involvement of third parties, please review our
            comprehensive Privacy Policy. Your trust is paramount, and we take
            every measure to protect the security and confidentiality of your
            information
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Data retention</h3>
          <p className=" text-bodyText">
            At [Accupay], we value your privacy and adhere to responsible data
            practices. Your data, collected for Accounting & Payroll Processing
            Services, is retained only for as long as necessary to fulfill the
            purposes outlined in our services. We follow clear retention
            policies, considering legal requirements and operational needs. Once
            the retention period expires, your data is securely and permanently
            deleted.
          </p>

          <ul className="pt-6 flex flex-col gap-4">
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              We believe in minimizing data storage while ensuring compliance
              with regulations
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              For specific details on our data retention practices
            </li>
            <li className="flex justify-start items-center gap-1">
              <span className="text-2xl text-p1">
                <PiCheckCircle />
              </span>
              please refer to our comprehensive Privacy Policy. Your trust is
              paramount
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Cookies and tracking technologies</h3>
          <p className=" text-bodyText">
            At [Accupay], we utilize cookies and tracking technologies to
            enhance your experience with our Accounting & Payroll Processing
            Services. These technologies help us improve service functionality,
            personalize content, and analyze usage patterns. Cookies may be used
            for session management, and tracking technologies enable us to
            understand user preferences. Rest assured, we prioritize your
            privacy, and you have the option to manage cookie preferences. Our
            use of these technologies aligns with industry standards and
            regulations
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Children's privacy</h3>
          <p className=" text-bodyText">
            At Accupay, we are committed to protecting the privacy of all users,
            including children. Our Accounting & Payroll Processing Services are
            not intended for individuals under the age of 18. We do not
            knowingly collect or process personal information from children. If
            you believe that we have inadvertently collected information from a
            child, please contact us immediately, and we will take prompt steps
            to delete such data.
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Changes to the privacy policy</h3>
          <p className=" text-bodyText">
            At [Accupay], we are committed to maintaining transparency in our
            data practices. As we continually strive to enhance our Accounting &
            Payroll Processing Services, updates to our Privacy Policy may
            occur. Any changes made will be communicated to you through
            prominent notifications on our website or other appropriate
            channels. We encourage you to periodically review our Privacy Policy
            for the latest information on how we handle your data. Rest assured,
            our commitment to your privacy remains steadfast, and changes are
            made to ensure compliance with evolving regulations and to enhance
            your overall experience. If you have any questions about changes to
            the policy, please contact us for clarification
          </p>
        </div>

        <div className="">
          <h3 className="heading-3 py-6">Contact information</h3>
          <p className=" text-bodyText">
            If you have any questions or concerns regarding our Privacy Policy
            or the handling of your personal information, please contact us at
            <span className="text-p1">accupay@gmail.com</span>
          </p>
        </div>
      </section>

      <CTASectiont />
    </main>
  );
}

export default PrivacyPolicy;
