import React from 'react';
import { connect } from 'react-redux';
import StyleLink from '../general/StyleLink';

const PrivacyText = () => (
    <div className="privacyText">
        <div className="content-container">
            <div className="privacyText__content">
                <div className="privacyText__content__text">
                    <div className="privacyText__content__text__chapter">
                        <h2>1.  Introduction</h2>
                        <p>
                            Seedbright Sp. Z.o.o Sp. K. understands that your privacy is important to you and that you care about how your
                            personal data is used. We respect and value the privacy of all those that we deal with and will only collect and use
                            personal data in ways that are described here, and in a way that is consistent with our obligations and your rights
                            under the law.
                        </p>

                        <p>
                            This Privacy Statement will explain:
                        </p>

                        <ul>
                            <li>What personal data we will collect</li>
                            <li>How we will collect, use, and process personal data</li>
                            <li>The lawful basis for processing personal data</li>
                            <li>How we comply with our legal obligations</li>
                            <li>Who we will share your personal data with</li>
                            <li>How we safeguard your data</li>
                            <li>How long we keep your data</li>
                            <li>Your rights under the law relating to your personal data</li>
                        </ul>

                        <p>
                            Any questions relating to our Data Processing activities should be sent by email to hello@seedbright.com, or in writing
                            to Seedbright Sp. Z.o.o Sp. K., ul Marszalkowska 18/29 00-590, Warsaw. Alternatively, you can call
                            +48(0) 533 031 638.
                        </p>
                        <br/>
                    </div>

                    <div className="privacyText__content__text__chapter">
                        <h2>2.  What is Personal Data?</h2>
                        <p>
                            Personal data is defined by the General Data Protection Regulation (EU Regulation 2016/679) (the ‘GDPR’) as ‘any
                            information relating to an identifiable person who can be directly or indirectly identified in particular by reference to an
                            identifier’.
                        </p>

                        <p>
                            Personal data is, in simpler terms, any information about you that enables you to be identified. Personal data covers
                            obvious information such as your name and contact details, but it also covers less obvious information such as
                            identification numbers, electronic location data, and other online identifiers.
                        </p>

                        <p>
                            The personal data that we use is set out in this Privacy Statement.
                        </p>
                        <br/>
                    </div>


                    <div className="privacyText__content__text__chapter">
                        <h2>3.  What personal data do we collect?</h2>
                        <p>
                            We may collect some or all of the following personal data (this will vary according to your relationship with us):
                        </p>

                        <ul>
                            <li>Name</li>
                            <li>Date of birth</li>
                            <li>Address</li>
                            <li>Email address</li>
                            <li>Telephone number</li>
                            <li>Business name</li>
                            <li>Job title</li>
                            <li>Profession</li>
                            <li>Payment information, including bank details</li>
                            <li>Information about your preferences and interests</li>
                        </ul>
                        <br/>
                    </div>


                    <div className="privacyText__content__text__chapter">
                        <h2>4.  How do we use your personal data?</h2>
                        <p>
                            Under the GDPR, we must always have a lawful basis for using personal data. This may be because the data is
                            necessary for our performance of a contract with you, or because it is in our legitimate business interests to use it.
                            Your personal data may be used for one of the following purposes:
                        </p>

                        <ul>
                            <li>Supplying our services to you. Your personal details are required in order for us to enter into a contract with you</li>
                            <li>Personalising and tailoring our services for you</li>
                            <li>Communicating with you. This may include responding to emails or calls from you</li>
                            <li>Supplying you with information by email about our services</li>
                        </ul>

                        <p>
                            We will also hold customer and prospective customer data for marketing and promotional activities. As our main area
                            of work is providing construction services we will use your data as follows to help us achieve this:
                        </p>

                        <ul>
                            <li>Storing your details and updating them when necessary on our database, so that we can contact you in relation
                            to our services and information that may be of interest to you or your business</li>
                            <li>Keeping records of our conversations and meetings, so that we can provide targeted services to you</li>
                            <li>Processing your data for targeting appropriate marketing campaigns</li>
                        </ul>

                        <p>
                            We may process the data of our customers and prospective customers for these purposes if we deem this to be
                            necessary for our legitimate interests. Article 6(1)(f) of the GDPR provides that we can process your data where it "is
                            necessary for the purposes of the legitimate interests pursued by us, except where such interests are overridden by
                            the interests or fundamental rights or freedoms of you which require protection of personal data."
                        </p>

                        <p>
                            We do not believe that any of our activities prejudice individuals in any way. We genuinely believe that they help us to
                            offer businesses a tailored, efficient service. However, you do have the right to object to us processing your personal
                            data on this basis. You can do this by contacting us using the contact details provided at the start of this Privacy
                            Statement. We will seek to deal with your request without undue delay, and in any event within one month, subject to
                            any extensions to which we are lawfully entitled. Please note that we may keep a record of your communications to
                            help us resolve any issues which you raise.
                        </p>
                        <br/>
                    </div>


                    <div className="privacyText__content__text__chapter">
                        <h2>5.  How long will we keep your personal data?</h2>
                        <p>
                            We will not keep your personal data for any longer than is necessary in light of the reason(s) for which it was first
                            collected.
                        </p>

                        <p>
                            Seedbright Sp. Z.o.o Sp. K. operates a clear Retention policy and associated Retention Schedule to ensure
                            personal data is kept only for so long as is necessary for the purpose for which such information is used.
                        </p>

                        <p>
                            If any of your personal data changes, or if you have any questions about how we use data which relates to you,
                            please contact us by email at marketing@westgreen.com. We normally update your personal data within seven
                            working days of any new or updated personal data being provided to us, to ensure that the personal data we hold
                            about you is as accurate and up to date as possible.
                        </p>
                        <br/>
                    </div>

                    <div className="privacyText__content__text__chapter">
                        <h2>6.  How and where do you store or transfer my personal data?</h2>
                        <p>
                            We will only store your personal data within the European Economic Area (the ‘EEA’). The EEA consists of all EU
                            member states, plus Norway, Iceland, and Liechtenstein. This means that your personal data will be fully protected
                            under the GDPR or to equivalent standards by law.
                        </p>
                        <br/>
                    </div>

                    <div className="privacyText__content__text__chapter">
                        <h2>7.  Do you share my personal data?</h2>
                        <p>
                            We will not share any of your personal data with any third parties for any purposes, except where it is necessary for
                            the performance of a contract, such as a third party providing services on our behalf; or where we may be legally
                            required to share certain personal data, which might include yours, if we are involved in legal proceedings or
                            complying with legal obligations, a court order, or the instructions of a government authority.
                        </p>
                        <br/>
                    </div>

                    <div className="privacyText__content__text__chapter">
                        <h2>8.  What are your rights?</h2>
                        <p>
                            Under the GDPR, you have the following rights, which we will always work to uphold:
                        </p>

                        <ul>
                            <li>The right to be informed about our collection and use of your personal data. This Privacy Statement should tell
                            you everything you need to know, but you can always contact us to find out more or to ask any questions using
                            the contact details provided in this Privacy Statement</li>
                            <li>The right to access the personal data we hold about you</li>
                            <li>The right to have your personal data rectified if any of your personal data held by us is inaccurate or incomplete</li>
                            <li>The right to be forgotten, i.e. the right to ask us to delete or otherwise dispose of any of your personal data that
                            we have</li>
                            <li>The right to restrict, i.e. prevent, the processing of your personal data</li>
                            <li>The right to object to us using your personal data for a particular purpose or purposes</li>
                            <li>The right to data portability. This means that you can ask us for a copy of your personal data held by us to re-use
                            with another service or business in many cases</li>
                            <li>Rights relating to automated decision-making and profiling. We do not use your personal data in this way</li>
                        </ul>

                        <p>
                            For more information about our use of your personal data or exercising your rights as outlined above, please contact
                            us to find out more or to ask any questions using the contact details provided in this Privacy Statement.
                        </p>

                        <p>
                            Further information about your rights can also be obtained from the Information Commissioner’s Office. If you have
                            any cause for complaint about our use of your personal data, you have the right to lodge a complaint with the
                            Information Commissioner’s Office.
                       </p>
                       <br/>
                    </div>

                    <div className="privacyText__content__text__chapter">
                        <h2>9.  How can I access my personal data?</h2>
                        <p>
                            If you want to know what personal data we have about you, you can ask us for details of that personal data and for a
                            copy of it (where any such personal data is held). This is known as a ‘Subject Access Request’.
                        </p>

                        <p>
                            All subject access requests should be made in writing and sent to the email or postal addresses provided in this
                            Privacy Statement. To make this as easy as possible for you, a Subject Access Request form is available for you to
                            use. You do not have to use this form, but it is the easiest way to tell us everything we need to know to respond to
                            your request as quickly as possible.
                        </p>

                        <p>
                            There is not normally any charge for a subject access request. If your request is ‘manifestly unfounded or excessive’
                            (for example, if you make repetitive requests) a fee may be charged to cover our administrative costs in responding.
                        </p>

                        <p>
                            We will respond to your subject access request not more than one month of receiving it. Normally, we aim to provide
                            a complete response, including a copy of your personal data within that time. In some cases, however, particularly if
                            your request is more complex, more time may be required up to a maximum of three months from the date we
                            receive your request. You will be kept fully informed of our progress.
                        </p>
                        <br/>

                    </div>


                    <div className="privacyText__content__text__chapter">
                        <h2>10.  Changes to our Privacy Policy</h2>
                        <p>
                            Any changes we may make to our Privacy Statement in the future will be posted to our website.
                        </p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = () => ({

});

export default connect(undefined, mapDispatchToProps)(PrivacyText);
