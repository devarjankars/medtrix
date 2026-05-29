export const metadata = {
  title: "Terms & Conditions | Medtrix Healthcare",
  description: "Terms and conditions for use of Medtrix Healthcare website.",
};

export default function TermsConditions() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="w-[90%] md:w-[80%] mx-auto py-20 max-w-4xl">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[3px] text-white/60 mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-zinc-500 text-sm">Last updated: May 2, 2021</p>
        </div>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 text-base leading-relaxed">

          <p>
            <strong className="text-white">Welcome to MedTrix Healthcare Pvt Ltd.!</strong>
          </p>

          <p>
            These terms and conditions outline the rules and regulations for the use of MedTrix Healthcare Pvt Ltd.'s Website.
          </p>

          <p>
            MedTrix Healthcare Pvt Ltd. is located at:<br />
            1st Floor, 574/A, 1st Main,<br />
            Sector 6, HSR Layout,<br />
            Bangalore 560 102.
          </p>

          <p>
            By accessing this website we assume you accept these terms and conditions in full. Do not continue to use MedTrix Healthcare Pvt Ltd.'s website if you do not accept all of the terms and conditions stated on this page.
          </p>

          <p>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing law of India.
          </p>

          <Divider />

          <Section title="Cookies">
            <p>
              We employ the use of cookies. By using{" "}
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-[#E1251B] hover:underline">
                MedTrix Healthcare Pvt Ltd.'s
              </a>{" "}
              website you consent to the use of cookies in accordance with MedTrix Healthcare Pvt Ltd.'s privacy policy.
            </p>
            <p>
              Most modern interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate/advertising partners may also use cookies.
            </p>
          </Section>

          <Divider />

          <Section title="License">
            <p>
              Unless otherwise stated, MedTrix Healthcare Pvt Ltd. and/or its licensors own the intellectual property rights for all material on MedTrix Healthcare Pvt Ltd. All intellectual property rights are reserved. You may view and/or print pages from{" "}
              <a href="https://www.medtrixhealthcare.com/" target="_blank" rel="noopener noreferrer" className="text-[#E1251B] hover:underline">
                https://www.medtrixhealthcare.com/
              </a>{" "}
              for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p className="font-semibold text-white">You must not:</p>
            <ul className="list-none space-y-2 pl-0">
              {[
                "Republish material from https://www.medtrixhealthcare.com/",
                "Sell, rent or sub-license material from https://www.medtrixhealthcare.com/",
                "Reproduce, duplicate or copy material from https://www.medtrixhealthcare.com/",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E1251B] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p>Redistribute content from MedTrix Healthcare Pvt Ltd. (unless content is specifically made for redistribution).</p>
          </Section>

          <Divider />

          <Section title="User Comments">
            <ol className="list-decimal pl-5 space-y-4">
              <li>This Agreement shall begin on the date hereof.</li>
              <li>Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. MedTrix Healthcare Pvt Ltd. does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of MedTrix Healthcare Pvt Ltd., its agents or affiliates.</li>
              <li>MedTrix Healthcare Pvt Ltd. reserves the right to monitor all Comments and to remove any Comments which it considers in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions.</li>
              <li>
                You warrant and represent that:
                <ol className="list-decimal pl-5 mt-2 space-y-2">
                  <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so.</li>
                  <li>The Comments do not infringe any intellectual property right, including without limitation copyright, patent or trademark, or other proprietary right of any third party.</li>
                  <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material or material which is an invasion of privacy.</li>
                  <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                </ol>
              </li>
              <li>You hereby grant to MedTrix Healthcare Pvt Ltd. a non-exclusive royalty-free license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</li>
            </ol>
          </Section>

          <Divider />

          <Section title="Hyperlinking to our Content">
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                The following organizations may link to our Web site without prior written approval:
                <ul className="list-none pl-4 mt-2 space-y-1">
                  {["Government agencies", "Search engines", "News organizations", "Online directory distributors", "Systemwide Accredited Businesses"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-2 w-1 h-1 rounded-full bg-zinc-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
              <li>These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</li>
              <li>
                We may consider and approve in our sole discretion other link requests from the following types of organizations:
                <ul className="list-none pl-4 mt-2 space-y-1">
                  {["Commonly-known consumer and/or business information sources", "dot.com community sites", "Associations or other groups representing charities", "Online directory distributors", "Internet portals", "Accounting, law and consulting firms", "Educational institutions and trade associations"].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-2 w-1 h-1 rounded-full bg-zinc-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </ol>
            <p>
              If you are interested in linking to our website, you must notify us by sending an e-mail to{" "}
              <a href="mailto:info@medtrixhealthcare.com" className="text-[#E1251B] hover:underline">
                info@medtrixhealthcare.com
              </a>.
            </p>
          </Section>

          <Divider />

          <Section title="Iframes">
            <p>Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site.</p>
          </Section>

          <Divider />

          <Section title="Content Liability">
            <p>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
          </Section>

          <Divider />

          <Section title="Reservation of Rights">
            <p>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time.</p>
          </Section>

          <Divider />

          <Section title="Removal of links from our website">
            <p>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.</p>
            <p>Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.</p>
          </Section>

          <Divider />

          <Section title="Disclaimer">
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ol>
          </Section>

          <Divider />

          {/* Contact */}
          <div className="bg-[#0f0f0f] border border-white/8 rounded-2xl p-8 mt-10">
            <h3 className="text-white font-semibold text-lg mb-4">Contacting Us</h3>
            <p className="text-zinc-400 text-sm mb-3">If there are any questions regarding these terms and conditions you may contact us:</p>
            <p className="text-zinc-300 text-sm">
              <a href="https://www.medtrixhealthcare.com" target="_blank" rel="noopener noreferrer" className="text-[#E1251B] hover:underline">
                medtrixhealthcare.com
              </a>
              <br />
              1st Floor, 574/A, 1st Main,<br />
              Sector 6, HSR Layout,<br />
              Bangalore 560 102.
              <br /><br />
              <a href="mailto:info@medtrixhealthcare.com" className="text-[#E1251B] hover:underline">
                info@medtrixhealthcare.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <div className="space-y-4">
      <h2 className="text-white text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="border-t border-white/6 my-2" />;
}
