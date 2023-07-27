"use client";

import { useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Link from "next/link";

const page = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <Header showMenu={showMenu} setshowMenu={setShowMenu} />
            <div className="mt-[61px] pt-10 2md:pt-14 px-6 2md:px-14 text-gray-800">
                <h1 className="text-3xl 2md:text-5xl xl:text-7xl font-medium">Terms of Use</h1>
            </div>
            <div className="grid 2md:grid-cols-3 2md:px-10">
                <div className="hidden 2md:block px-12 mt-12">
                    <ul className="list-decimal flex flex-col gap-6 text-gray-600 text-lg ">
                        <li>Using our site</li>
                        <li>Consent to Doing Business Electronically</li>
                        <li>Leaving www.MinalifeLife.com</li>
                        <li>
                            Minalife only sells insurance in states where we are
                            licensed to sell.
                        </li>
                        <li>Our quote is not the final price</li>
                        <li>Minalife protects its brand and assets</li>
                        <li>Your Minalife Account</li>
                        <li>Disclaimer of Warranties</li>
                        <li>Limitation of liability</li>
                        <li>
                            Our Terms will change as Minalife evolves and grows
                        </li>
                        <li>Insurance Products</li>
                        <li>The Referral Program</li>
                        <li>Anti-Money Laundering (AML)</li>
                        <li>Effective date</li>
                    </ul>
                </div>
                <div className="px-6 text-gray-800 mt-12 text-lg 2md:col-span-2">
                    <h2 className="font-semibold" id="using-site">
                        Using our site
                    </h2>
                    <p className="mt-4 text-base">
                        Minalife Technologies Inc. and its subsidiaries and
                        affiliates (collectively, “Minalife”) make life insurance
                        simpler for people to buy online. These Terms of Use
                        (the “Terms”) outline the rules and expectations that
                        protect both you and Minalife. Our goal is to keep them
                        simple and easy to understand. If there's something
                        you're not sure about, please reach out to us.
                        <br /> <br /> We use the term "Services" to refer to any
                        of the products and services we sell online, any site
                        information or Services provided on www.MinalifeLife.com or
                        our affiliated sites (collectively, the “Site”), and the
                        growing community of people who use our platform. We use
                        the term your "Minalife Account" to mean where you can find
                        data about your insurance policies, your contact
                        information, and any additional data you choose to add
                        such as videos, photos, and property listings. When we
                        write "we", "our", "us", or "Minalife", we mean Minalife
                        Technologies Inc. (dba in CA and NY as Minalife Life
                        Insurance Services). And, any time we write "you" or
                        "your", we mean the person who is using our Services
                        (and reading these Terms).
                        <br /> <br /> Remember: if you buy insurance using
                        Minalife, there are important laws, rules, conditions,
                        exceptions, and requirements that apply to you and your
                        insurance carrier for your issued insurance policy. Your
                        rights and responsibilities are explained in your
                        insurance policy, which will be digitally provided to
                        you after you sign and remit your first payment. It will
                        also be available in your Minalife Account.
                        <br /> <br />
                        These Terms apply to you. You agree, as long as you
                        continue to use our Services, to accept and follow these
                        Terms, and to only use our Services as permitted. You
                        understand that Minalife sells insurance and should only be
                        used by those who can legally buy an insurance contract
                        where they live. Our Services are not available to
                        minors. Specifically, by using or applying for Services,
                        (i) you must be the person being insured on the policy;
                        (ii) you must be the person that owns and pays for the
                        policy; (iii) the primary purpose of the policy must be
                        to protect your family; and at the time of submitting
                        your application, (iv) you do not have any agreements in
                        place to assign/sell the policy for which you are
                        applying.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Consent to Doing Business Electronically
                    </h2>
                    <p className="mt-4 text-base">
                        By using our Services, you agree that all communications
                        from us relating to products and Services, including
                        insurance products, offered through the Site may be
                        provided or made available to you electronically by
                        e-mail, SMS text message, or at the Site. You further
                        agree that we may accept an electronic signature from
                        you, and that this electronic signature will have the
                        same binding effect as a physical wet signature and will
                        appear on all records related to the provision of any
                        such products and services.
                        <br /> <br /> You agree that you have the ability to
                        access, view, store, download, and print communications,
                        documents, and hyperlinks we deliver or make available
                        to you electronically through your computer or on your
                        mobile device. You can find apps that support printing
                        and saving electronic communications using your mobile
                        device’s app store. If your mobile device does not have
                        this functionality, you must access the Site through
                        alternate means that provide you with the capability to
                        print and save communications.
                    </p>
                    <h2 className="font-semibold mt-10">Leaving Minalife</h2>
                    <p className="mt-4 text-base">
                        Sometimes we may link to other companies or services,
                        like an article, reference, referral, social media
                        content, or promotion. We cannot guarantee these links
                        as we don't manage content which is not on our Site, and
                        links can change after they're posted. Minalife isn't
                        responsible for the practices of the sites or services
                        to whom we link, including any of the content they show
                        you. And, those sites are not acting or ruled by the
                        Site policies of Minalife. The information you may share
                        with any third parties, like the sites and services we
                        may link to, are controlled by them and their site
                        policies and terms. You understand and agree that we
                        don't have control of those sites and we are not
                        responsible if you give any third-party access to your
                        data. You own any risk yourself for sharing information
                        or viewing content on other sites. <br /> <br /> This
                        does not apply to sites we require you to visit in order
                        to use our Services, such as third-party services for
                        filing claims which may be hosted separately from our
                        main domain. Also, if any of the Services provided to
                        you contain an open-source license, there may be
                        provisions in those licenses that expressly conflict
                        with the Terms, in which case, the open source
                        provisions will apply.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Minalife only sells insurance in states where we are
                        licensed to sell.
                    </h2>
                    <p className="mt-4 text-base">
                        Our Services are offered through our licensed insurance
                        producer entity, Minalife Technologies Inc. (dba in CA and
                        NY as Minalife Life Insurance Services). Minalife is not an
                        insurance carrier. Instead we provide the products and
                        services of our admitted insurance carrier partners
                        licensed to sell insurance in your state. Not all
                        products are available in all states. Minalife is paid
                        commissions and may receive other performance-based
                        compensation for its services.
                        <br /> <br /> The products we offer are only for people
                        who live in the United States. We don't and don't intend
                        to sell insurance products outside the United States, or
                        anywhere Minalife isn't licensed.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Our quote is not the final price
                    </h2>
                    <p className="mt-4 text-base">
                        Minalife generates quotes for life insurance products.
                        These prices change based on your answers to our
                        questions and information collected during your
                        application, your choices for different products, or due
                        to changes of insurance pricing guides. For example, if
                        you apply for life insurance just before your birthday,
                        but don't pay for it that day, it can cost more a few
                        days later --- as it's after your birthday and your
                        price may go up as you get older. Whenever you leave
                        your application before you pay, your price may change.
                        Your price isn't final and set until you sign your
                        insurance contract with our insurance carrier and pay
                        your initial premium.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Minalife protects its brand and assets
                    </h2>
                    <p className="mt-4 text-base">
                        © 2020 Minalife Technologies Inc. All rights reserved.
                        Minalife and all of our logos and designs are trademarks
                        and/or service marks of Minalife Technologies Inc., a
                        Delaware corporation. You may not use our images or
                        logos without first getting the okay from us in writing.
                        <br /> <br />
                        Everyone who uses our Services and visits our Site
                        should respect intellectual property laws and the rights
                        of Minalife. If something does not look right on our Site
                        or if you have any concerns, you may send us questions.
                        We will work quickly to look into your question and will
                        remove material from our Site if we determine third
                        party copyrighted material is displayed without Minalife
                        holding a license to do so. Your notice must follow the
                        requirements of U.S. Copyright Act 17 U.S.C. 512(c)(3)
                        and all regulations promulgated, each as amended (Notice
                        Requirements), and/or the specific requirements of the
                        Digital Millennium Copyright Act of 1998 (DMCA),
                        whichever applies. If you inappropriately report a
                        violation, infringement, or ownership of a copyright,
                        you may be liable for damages (including reasonable
                        costs and attorneys' fees).
                        <br /> <br /> Minalife’ name, logos, designs, business
                        processes, and everything else that's part of our
                        Services are protected by intellectual property rights
                        including copyright, trademark, trade secret, and other
                        laws of the United States. Our Terms don't give you any
                        license to use any of our intellectual property, other
                        than as necessary to use our Services and to assist you
                        in purchasing insurance products we make available to
                        you.
                        <br /> <br /> You agree to honor Minalife' ownership rights
                        related to our Services and the rights of the other
                        parties whose intellectual property is included in the
                        Services. You will not misuse Services or any third
                        party intellectual property used along with the
                        Services. You may not copy or reproduce any of the
                        Services in any form or by any means; you may not rent,
                        sell, lease, grant, modify, distribute, or create
                        derivative works based on the Services. You will not
                        trespass, bypass, interfere with, disrupt any host or
                        network systems, burden the network capacity, overload,
                        flood, spam, mail-bomb, infect, or install or send a
                        virus, spyware, or any other malware or Trojan horse of
                        any kind, or in any other way disrupt the proper
                        operation of the Services.
                        <br /> <br /> We are not granting you any right, title,
                        license, or interest in the Services.
                    </p>
                    <h2 className="font-semibold mt-10">Your Minalife Account</h2>
                    <p className="mt-4 text-base">
                        Your Minalife account keeps your relevant content and
                        documents related to the Services, such as copies of
                        your policy documents. We strive to keep your
                        information safe. The most sensitive part of data
                        security is your password. We need to be able to assume
                        that anyone using your Minalife Account, by using your
                        password and credentials, is you. We'll never ask you to
                        email us your password. Don't share it with anyone.
                        Always use a unique, hard-to-guess password. Quickly ask
                        to reset your password if you ever suspect that your
                        password and credentials are ever at risk. <br /> <br />
                        Also, by creating your Minalife Account, you agree that the
                        information you share is true and accurate, and that you
                        will keep your information up-to-date, complete, and
                        accurate. This is important for both managing your
                        insurance products and offering you exceptional service.
                        For example, if you move to a new place, your policy may
                        have to be updated as each state has different rules for
                        insurance products.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Disclaimer of Warranties
                    </h2>
                    <p className="mt-4 text-base">
                        WE DO NOT PROVIDE ANY WARRANTIES WITH RESPECT TO THE USE
                        OF THE SERVICES, INCLUDING ANY AND ALL SOFTWARE INCLUDED
                        THEREIN, WHICH IS PROVIDED "AS-IS". YOU USE OUR SERVICES
                        WITHOUT ANY EXPRESS OR IMPLIED WARRANTY OR CONDITION OF
                        ANY KIND, AT YOUR OWN RISK. Minalife DISCLAIMS ANY AND ALL
                        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                        PURPOSE, OR NON-INFRINGEMENT. We do not take on or
                        assume any responsibility for any harm, loss, or
                        corruption to you, your computer, or your data (or any
                        third party data or computer) from your use of our
                        Services. Some states don't allow for these limitations
                        of liability. If you live in one of these states, then
                        these warranties will be limited and the limitation on
                        liability will be $100.00 in the aggregate for any and
                        all claims.
                        <br /> <br /> The Services include information to help
                        you think through what insurance is best for you. We
                        aren't a replacement for your lawyer, financial advisor,
                        or tax planning specialist. We simply provide useful
                        information to help you think through your insurance
                        decisions.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Limitation of liability
                    </h2>
                    <p className="mt-4 text-base">
                        IN NO EVENT SHALL (I) Minalife BE LIABLE TO YOU OR ANY
                        THIRD PARTY FOR SPECIAL, INDIRECT, PUNITIVE, EXEMPLARY,
                        OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS,
                        REVENUES OR SAVINGS, EVEN IF WE HAVE BEEN ADVISED OF THE
                        POSSIBILITY OF SUCH DAMAGES IN ADVANCE, AND (II) OUR
                        LIABILITY FOR DAMAGES TO YOU OR ANY THIRD PARTIES
                        EXCEED, IN THE AGGREGATE, THE FEES PAID BY YOU TO US
                        DURING THE LAST YEAR PRIOR TO THE DATE SUCH CAUSE OF
                        ACTION ARISES.
                        <br /> <br /> YOU ACKNOWLEDGE THAT (I) THE LIMITATIONS
                        ON LIABILITY IN THIS SECTION ARE REASONABLE AND THAT THE
                        PROVISIONS OF THIS SECTION ALLOCATE THE RISKS UNDER THIS
                        AGREEMENT BETWEEN YOU AND US (AND OUR AFFILIATES), AND
                        (II) WE AND YOU HAVE RELIED UPON THE LIMITATIONS SET
                        FORTH HEREIN IN DETERMINING WHETHER TO AUTHORIZE YOU TO
                        USE THE SERVICES. THE REMEDIES PROVIDED TO YOU IN THE
                        TERMS ARE EXCLUSIVE. Some states do not allow for these
                        limitations of liability. If you live in one of these
                        states, these limits don't apply to you, and the maximum
                        liability for any of these violations will be $100.00 in
                        the aggregate for any and all claims.
                        <br /> <br /> THE TERMS AND YOUR USE OF THE SERVICES
                        WILL BE GOVERNED BY CALIFORNIA LAW EXCEPT FOR ITS
                        CONFLICTS OF LAWS PRINCIPLES. ALL CLAIMS ARISING OUT OF
                        OR RELATING TO THE TERMS OR ANY USE OF THE SERVICES WILL
                        BE LITIGATED EXCLUSIVELY IN THE FEDERAL OR STATE COURTS
                        RESIDING IN SAN FRANCISCO, CALIFORNIA. WE AND YOU EACH
                        CONSENT TO VENUE AND PERSONAL JURISDICTION IN SAN
                        FRANCISCO, CALIFORNIA.
                        <br /> <br /> You agree that these are the Terms for
                        your use of the Services, and you have not entered into
                        any other agreement related to your use of the Services.
                        We haven't and don't create any third party beneficiary
                        rights by the Terms. If we waive or fail to enforce any
                        of the Terms, it doesn't waive our right to enforce the
                        Terms against you or someone else in the future. You may
                        not assign any rights granted by the Terms to any third
                        party, and any attempt to do so will be null and void.
                        Minalife may assign the Terms to any affiliate, subsidiary,
                        or any acquirer of substantially all of the assets or
                        capital securities of Minalife. If a provision of the Terms
                        is found unenforceable, the remaining provisions of the
                        Terms will remain in full effect, and we will substitute
                        a replacement enforceable term reflecting our intent as
                        closely as possible.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Our Terms will change as Minalife evolves and grows
                    </h2>
                    <p className="mt-4 text-base">
                        We will change the Terms as Minalife and the insurance
                        industry evolves and grows over time. Your continued use
                        of the Services, after a change to the Terms, means you
                        agree to the Terms, including any changes. If you no
                        longer agree with the Terms, please stop using the
                        Services.
                    </p>
                    <h2 className="font-semibold mt-10">Insurance Products</h2>
                    <p className="mt-4 text-base">
                        Our insurance products are issued by Legal & General
                        America, Ameritas Life Insurance Corp., TruStage, and
                        Principal. Insurance products are only available to
                        people in those jurisdictions in which they may be
                        legally sold. By applying for insurance products through
                        the Site, you are agreeing to (1) designate us as your
                        agent of record, (2) authorize us to communicate such
                        designation to any insurance carrier, your prior
                        insurance producer, and any other person or entity we
                        determine should be advised, and (3) permit us to
                        receive any compensation that any insurance carrier
                        agrees to pay to us in connection with your purchase of
                        insurance products. With respect to any insurance
                        product, if any term or condition of these Terms differ
                        from the terms and conditions of the policy, the
                        policy’s provisions will control.
                        <br /> <br /> Minalife does not provide any legal,
                        regulatory, accounting, or tax advice, and you must rely
                        upon your own advisors before making any financial
                        decision.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Legal & General America
                    </h2>
                    <p className="mt-4 text-base">
                        Legal & General America life insurance products are
                        issued by Banner Life Insurance Company, Urbana, MD and
                        by William Penn Life Insurance Company of New York,
                        Valley Stream, NY. Banner products are available in 49
                        states and in DC but are not available in New York.
                        William Penn products are available exclusively in New
                        York. The Legal & General America companies are part of
                        the worldwide Legal & General Group.
                        <br /> <br /> The Renewable Individual Term Life
                        Insurance premiums quoted on the Site are based on the
                        information provided for your quote. The premium quoted
                        is only an estimate and the actual premium and rate
                        class will be determined after the underwriting and
                        approval process is completed. Approval and actual
                        premiums will be based upon the entire underwriting
                        process, including but not limited to, information
                        provided by you on the application, exam results and
                        specific underwriting requirements and criteria. Premium
                        rates may vary by gender (in states where permitted),
                        underwriting class, coverage amount and duration.
                        Premiums quoted include the current $70 annual policy
                        fee, which is subject to change prior to policy issue.
                        Once issued, your annual policy fee will not increase or
                        decrease. Premiums are guaranteed to stay level for the
                        initial term period. The coverage amount has a one-time
                        decrease occurring in the first year immediately
                        following the initial term period. The premium in the
                        first year immediately following the initial term period
                        may increase or decrease, but subsequent premiums will
                        increase annually to age 95. Policies can be returned
                        without obligation within 30 days of receipt in most
                        states. Rates are as of 08.20.19.
                        <br /> <br /> The Renewable Individual Term Life
                        Insurance is policy form #ICC18-DT (and state
                        variations). Policy form numbers, product features and
                        availability may vary by state. An Accelerated Death
                        Benefit Rider, policy form # ICC10 ADB and state
                        variations, is included with all policies in states
                        where approved. The product may not be available in all
                        states.
                        <br /> <br /> Two year contestability and suicide
                        provisions apply. Policy descriptions provided here are
                        not a statement of contract. Please refer to the policy
                        forms for full disclosure of all benefits and
                        limitations.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Ameritas Life Insurance Corp.
                    </h2>
                    <p className="mt-4 text-base">
                        Ameritas Life Insurance Corp. offers simplified term
                        life insurance. Applicants will need to answer some
                        health-related questions, but will not need to have a
                        medical exam.
                    </p>
                    <h2 className="font-semibold mt-10">TruStage</h2>
                    <p className="mt-4 text-base">
                        TruStage offers term and whole life insurance products
                        issued by CMFG Life Insurance Company.
                    </p>
                    <h2 className="font-semibold mt-10">Principal</h2>
                    <p className="mt-4 text-base">
                        Principal offers term life insurance products issued by
                        Principal Life Insurance Co. and Principal National Life
                        Insurance Co.
                    </p>
                    <h2 className="font-semibold mt-10">
                        The Referral Program
                    </h2>
                    <p className="mt-4 text-base">
                        Minalife may at times offer you the opportunity to refer
                        friends via our referral program (“Program”). Using your
                        unique personal referral link (“Personal Link”), you can
                        refer friends, family members or colleagues whom you
                        personally know (collectively, “Friends”). Referred
                        Friends must submit a life insurance application with
                        Minalife as described in the referral message.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Referral Program Restrictions
                    </h2>
                    <p className="mt-4 text-base">
                        This Program only applies to Legal & General
                        America/Banner Life, and Ameritas Life Insurance Corp.
                        Referrers cannot refer themselves, pay a Friend to apply
                        to Minalife for coverage, create multiple or fake accounts
                        with Minalife, or refer a person more than once. You may
                        not use the Program to violate any law, infringe or
                        violate the rights of any third party, or otherwise act
                        in a manner that is deemed harassing, harmful, illegal,
                        hateful, obscene or outside the spirit and intent of the
                        Program. In addition, you may not (i) tamper with the
                        Program, (ii) act in an unfair or disruptive manner, or
                        (iii) use any system, bot or other device or artifice to
                        participate or receive any benefit in the Program. This
                        includes but is not limited to a general prohibition on
                        posting of the referral codes on any Site which offers
                        the referral code to anyone other than Friends, i.e.
                        individuals to whom you personally know. No purchase
                        necessary, and you need not be an existing Minalife
                        customer to participate. The Program may be subject to
                        additional restrictions in some states to comply with
                        applicable law. When referring a Friend, you can tell
                        them about Minalife and that we offer a great term life
                        insurance product, but you should not discuss any
                        details of the policies, coverage amounts, or rates. You
                        also cannot pay a friend to apply for coverage.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Referral Program Rewards
                    </h2>
                    <p className="mt-4 text-base">
                        By making a Valid Referral (defined below), you will
                        receive a reward subject to the restrictions set forth
                        below. In order to qualify as a “Valid Referral”, your
                        Friend must not be an existing Minalife customer and must
                        be a first-time applicant for a policy as a result of
                        your referral. These rewards will be in the form of an
                        Amazon Gift Card (or as otherwise determined by Minalife),
                        which may be subject to the gift card issuer’s terms and
                        conditions. Rewards will not exceed $100 per fiscal
                        year. Rewards are subject to verification. Minalife may
                        delay a reward for the purposes of investigation. Minalife
                        may also refuse to verify and process any transaction
                        for any reason.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Referral Program Liability
                    </h2>
                    <p className="mt-4 text-base">
                        YOU UNDERSTAND AND AGREE THAT THE INDEMNIFIED PARTIES
                        (DEFINED BELOW) SHALL NOT BE LIABLE TO YOU FOR ANY
                        DIRECT, INDIRECT, INCIDENTAL, ACTUAL, CONSEQUENTIAL,
                        ECONOMIC, SPECIAL OR EXEMPLARY DAMAGES (INCLUDING BUT
                        NOT LIMITED TO LOST PROFITS OR LOSS OF GOODWILL) ARISING
                        UNDER, RELATED TO, AND/OR IN CONNECTION WITH THE
                        PROGRAM, EVEN IF ADVISED OF THE POSSIBILITY OF THE SAME.
                        By participating in the Program, you agree to indemnify,
                        defend, and hold harmless Minalife and its subsidiaries,
                        affiliates, and its and their respective attorneys,
                        officers, directors, employees, insurers, independent
                        contractors, agents, successors and assigns (the
                        “Indemnified Parties”) from and against any and all
                        liabilities incurred in connection with (i) your breach
                        or violation of this Agreement; and/or (ii) your
                        violation of any law, or the rights of any third party;
                        and (iii) your use of software robots, spiders,
                        crawlers, or similar data gathering and extraction
                        tools, or any other action you take that imposes an
                        unreasonable burden on our infrastructure. Minalife
                        reserves the right, in its own sole discretion, to
                        assume the exclusive defense and control at its own
                        expense of any matter otherwise subject to your
                        indemnification. You will not, in any event, settle any
                        claim or matter without the prior written consent of
                        Minalife. TO THE FULLEST EXTENT POSSIBLE BY LAW, THE
                        INDEMNIFIED PARTIES’ MAXIMUM LIABILITY ARISING OUT OF OR
                        IN CONNECTION WITH THE PROGRAM, REGARDLESS OF THE CAUSE
                        OF ACTION (WHETHER IN CONTRACT, TORT, BREACH OF
                        WARRANTY, OR OTHERWISE), SHALL BE $100.00.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Referral Program Bulk Distribution ("Spam")
                    </h2>
                    <p className="mt-4 text-base">
                        Each Referrer is the actual sender of the emails and
                        must comply with applicable law. Referrals must be
                        created and distributed in a personal manner that is
                        appropriate and customary for communications with
                        friends, colleagues and family members. Bulk Personal
                        Link distribution, distribution to strangers, or any
                        other use of the services described herein in a manner
                        that is not promoted is expressly prohibited and may be
                        grounds for further legal action. The Company has no
                        obligation to monitor the Program or any communications
                        you send to third parties; however, the Company may
                        choose to do so and prohibit any use of the Program.
                        Referrers who do not comply with the law, including
                        anti-spam laws, are obligated to indemnify the Company
                        against any liabilities, costs and expenses it incurs as
                        a result of such spam.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Referral Program Right to Cancel, Modify or Terminate.
                    </h2>
                    <p className="mt-4 text-base">
                        We reserve the right to cancel, modify or terminate the
                        Program at any time for any reason with or without
                        notice. We reserve the right to investigate all referral
                        activities and suspend accounts or not pay fees if we
                        notice any activity that we believe is abusive,
                        fraudulent, or in violation of the Program terms or
                        these Terms. We reserve the right to disqualify any User
                        at any time from participation in the Program if we have
                        a good faith belief that he/she has violated any of
                        these Terms.
                    </p>
                    <h2 className="font-semibold mt-10">
                        Anti-Money Laundering (AML)
                    </h2>
                    <p className="mt-4 text-base">
                        Minalife strives to monitor, detect, and prevent
                        transactions that may involve fraud, money laundering,
                        terrorist financing, or other illegal activity and to
                        report applicable situations as may be required by law.
                        Minalife reserves the right to deny Service to anyone where
                        we have a reasonable suspicion of violations of any
                        applicable law.
                    </p>
                    <h2 className="font-semibold mt-10">Effective date</h2>
                    <p className="mt-4 text-base">November 19, 2020</p>
                </div>
            </div>
            <Footer p1="" p2="" />
        </>
    );
};

export default page;
