import { Helmet } from 'react-helmet-async'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ImageSection from '../../components/ImageSection/ImageSection'
import ReferenceSection from '../../components/ReferenceSection/ReferenceSection'
import { siteImages } from '../../data/images'
import styles from './HomePage.module.css'

// Helper for superscript reference numbers
function Ref({ nums }: { nums: number[] }) {
  return (
    <>
      {nums.map((n) => (
        <a
          key={n}
          href="#references"
          className={styles.refNum}
          title={`Reference ${n}`}
          aria-label={`See reference ${n}`}
        >
          [{n}]
        </a>
      ))}
    </>
  )
}

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Sardar Mohan Singh — Banker, Educationist, Philanthropist</title>
        <meta
          name="description"
          content="Sardar Mohan Singh (1903–1968) was a distinguished Indian banker, educationist and philanthropist. Managing Director of Bank of Patiala, founder of Modern Senior Secondary School Patiala, co-founder of Guru Harkrishan Public Schools New Delhi, and Economic Advisor to the Maharaja of Patiala."
        />
        <meta
          name="keywords"
          content="Sardar Mohan Singh, Sardar Mohan Singh Patiala, Sardar Mohan Singh Banker, Bank of Patiala, State Bank of Patiala, Punjab National Bank, Maharaja of Patiala, Modern School Patiala, Modern Senior Secondary School Patiala, Guru Harkrishan Public School, Raj Mohan Singh, Ravi Singh, Rai Bahadur Sohan Lal, Anjali Singh, Anjali Singh Chinmaya Mission, Nanki Singh, Jujhar Singh, Jujhar Singh Journalist, Jujhar Singh Media, Jujhar Singh TV Anchor, Jujhar Singh Television Anchor, Jujhar Singh Newstrack, Jujhar Singh Headlines Today, Jujhar Singh NewsX, Jujhar Singh India Ahead, Jujhar Singh Chidanjali Creations, Ramona Singh, Angad Singh, Gobind Singh"
        />
        <meta property="og:title" content="Sardar Mohan Singh — Banker, Educationist, Philanthropist" />
        <meta
          property="og:description"
          content="Honouring the legacy of Sardar Mohan Singh (1903–1968): Managing Director of Bank of Patiala, founder of Modern Senior Secondary School Patiala, and distinguished Indian banker, educationist and philanthropist."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sardarmohansigh.com" />
        <meta property="og:site_name" content="Sardar Mohan Singh" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sardar Mohan Singh — Banker, Educationist, Philanthropist" />
        <meta
          name="twitter:description"
          content="Honouring the legacy of Sardar Mohan Singh (1903–1968): Managing Director of Bank of Patiala, founder of Modern Senior Secondary School Patiala."
        />
        <link rel="canonical" href="https://sardarmohansigh.com" />
      </Helmet>

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className={styles.main}>

        {/* =========================================
            HERO / BANNER
            ========================================= */}
        <div className={styles.hero} id="top">
          <div className={styles.hero__inner}>
            <p className={styles.hero__eyebrow}>Honouring the legacy of</p>
            <h1 className={styles.hero__title}>SARDAR MOHAN SINGH</h1>
            <p className={styles.hero__subtitle}>SARDARMOHANSIGH.COM</p>
          </div>
        </div>

        {/* =========================================
            INTRO / BIOGRAPHY OVERVIEW
            ========================================= */}
        <section className={styles.intro} aria-label="Biography overview">
          <div className={styles.intro__inner}>

            {/* Portrait column */}
            <aside className={styles.intro__portrait}>
              <ImageSection
                src={siteImages.portrait.src}
                alt={siteImages.portrait.alt}
                caption="Sardar Mohan Singh"
              />
            </aside>

            {/* Bio body column */}
            <div className={styles.intro__body}>
              <p className={styles.intro__lead}>
                Sardar Mohan Singh (born 8 January 1903) was a distinguished Indian banker, educationist
                and philanthropist.{' '}
                <Ref nums={[1]} />
              </p>
              <p className={styles.intro__lead}>
                He was Managing Director of Bank of Patiala (later State Bank of Patiala), Economic
                Advisor to H.H. Maharaja of Patiala, Founder and Managing Director of Patiala Insurance
                Corporation, Founder and Managing Director of Patiala Construction Company Ltd., Convenor
                of the Sikh Research Academy, Patiala, Founder of Modern Senior Secondary School, Patiala
                (Patiala's first private school), Co-founder of Guru Harkrishan Public Schools, New Delhi,
                and several other educational and cultural institutions across Punjab and New Delhi.{' '}
                <Ref nums={[1, 2, 3, 4, 5, 6, 7, 8]} />
              </p>
              <p className={styles.intro__refNote}>
                (For references, scroll to the bottom.)
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            QUOTE BANNER — Business Week
            ========================================= */}
        <blockquote className={styles.quoteBanner}>
          <div className={styles.quoteBanner__inner}>
            <p className={styles.quoteBanner__text}>
              "Business Week noted that the career of Sardar Mohan Singh 'shows the Sikh genius for
              organization, team work and enterprise' finding 'fruitful expression in industry, banking
              and commerce'."
            </p>
            <cite className={styles.quoteBanner__cite}>
              — Business Week, 1949 &nbsp;<Ref nums={[4]} />
            </cite>
          </div>
        </blockquote>

        <hr className={styles.sectionDivider} />

        {/* =========================================
            EARLY LIFE, EDUCATION AND FAMILY
            — text full-width, then 2 images in a row, then family photo
            ========================================= */}
        <section className={styles.section} id="early-life" aria-labelledby="early-life-heading">
          <div className={styles.section__inner}>
            <h2 className={styles.section__heading} id="early-life-heading">
              Early life, education and family
            </h2>

            {/* Full-width text block */}
            <div className={styles.body}>
              <p>
                Singh was the son of Sardar Ram Singh.{' '}
                <Ref nums={[9]} />
                He obtained a B.Sc (Hons.) from Khalsa College, Amritsar, in 1924, standing first
                in Punjab University to which the college was then affiliated. He was also President
                of the Student Organization of the University.{' '}
                <Ref nums={[4, 10]} />
                He also obtained an F.I.B. (London).{' '}
                <Ref nums={[11, 7]} />
              </p>
              <p>
                Singh was married to Raj,{' '}
                <Ref nums={[12, 7]} />
                the eldest daughter of the Rais of Fatehabad and decorated Inspector-General of
                Police, Sardar Bahadur Sardar Kishan Singh. Raj's sister, Padma, was married to
                Raja Padamjit Singh of Kapurthala.{' '}
                <Ref nums={[13]} />
                Singh and Raj had four children – Madhuri Singh, Ravi Singh, Kamaljit Singh and
                Vippanjit Singh.{' '}
                <Ref nums={[1]} />
              </p>
              <p>
                Singh's eldest son, Ravi, was married to spiritual writer &amp; photographer,
                Anjali Singh, daughter of Rai Bahadur Sohan Lal and Indira Sohan Lal.{' '}
                <Ref nums={[14, 15, 7]} />
                Singh's grandchildren (from the marriage of Ravi and Anjali Singh) are award-winning
                television anchor &amp; journalist, Jujhar Singh{' '}
                <Ref nums={[2, 16, 17, 18]} />
                and organic foods entrepreneur, Nanki Singh.{' '}
                <Ref nums={[19, 20, 7]} />
                Singh's grandson, Jujhar Singh, is married to clothes designer, Ramona Singh, and
                they have two children, Angad Singh and Gobind Singh.
              </p>

              <div className={styles.infoBox}>
                Sardar Mohan Singh's daughter-in-law, Mrs. Anjali Singh, gives a glimpse of her
                father-in-law, in a short video created for Modern Senior Secondary School, Patiala
                in 2023.{' '}
                <br />
                (Link:{' '}
                <a
                  href="https://www.youtube.com/watch?v=slBBLqHM6ew"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.youtube.com/watch?v=slBBLqHM6ew
                </a>
                )
              </div>
            </div>

            {/* 2 images in a row */}
            <div className={styles.imageRow2}>
              <ImageSection
                src={siteImages.sittingChair.src}
                alt={siteImages.sittingChair.alt}
                caption="Sardar Mohan Singh"
              />
              <ImageSection
                src={siteImages.rajMohanSingh.src}
                alt={siteImages.rajMohanSingh.alt}
                caption="Sardarni Raj Mohan Singh"
              />
            </div>

            {/* Family photo — full width below the 2-image row */}
            <div className={styles.imageRowFull}>
              <ImageSection
                src={siteImages.familyPhoto.src}
                alt={siteImages.familyPhoto.alt}
                caption="Nanki Singh, Jujhar Singh, Ravi Singh, Anjali Singh"
              />
            </div>
          </div>
        </section>

        <hr className={styles.sectionDivider} />

        {/* =========================================
            BANKING AND BUSINESS CAREER
            — text full-width, then 4 images in a row
            ========================================= */}
        <section
          className={`${styles.section} ${styles.sectionAlt}`}
          id="banking"
          aria-labelledby="banking-heading"
        >
          <div className={styles.section__inner}>
            <h2 className={styles.section__heading} id="banking-heading">
              Banking and business career
            </h2>

            {/* Full-width text block */}
            <div className={styles.body}>
              <p>
                Singh started his career in 1926 by joining the Imperial Bank of India (now State
                Bank of India), one of the first Indians to do so.{' '}
                <Ref nums={[1, 21, 10]} />
                He rose to the position of General Manager{' '}
                <Ref nums={[22]} />
                and held charge of some of the most important branches of the bank.{' '}
                <Ref nums={[10]} />
                However, in early 1944, he resigned from the bank on both principle and policy over
                the discrimination of Indians in the bank's senior appointments.{' '}
                <Ref nums={[1, 7]} />
              </p>
              <p>
                From 1944 to 1953, Singh was Managing Director of Patiala State Bank (which during
                his tenure in 1948, was renamed as Bank of Patiala, and which later was rechristened
                as State Bank of Patiala, and then merged with State Bank of India in 2017).{' '}
                <Ref nums={[1, 2, 23]} />
              </p>
              <p>
                During his nine years at the helm of the bank, he led it to a blazing period of
                growth. From 30 September 1944 to 31 March 1952, the bank's deposits rose from
                Rs. 2,21,00,000 to Rs. 6,40,86,000, the bank's reserves from Rs. 19,70,000 to
                Rs. 66,35,000 and the bank's offices nearly doubled from 24 to 47.{' '}
                <Ref nums={[24, 25]} />
              </p>
              <p>
                Under Singh's leadership, the bank became the first in India to introduce a mobile
                banking service, 'The Bank on Wheels', carrying banking facilities to the very door
                of the villager. The Bank on Wheels became very popular in the rural areas of the
                then PEPSU state. The first Governor of the Reserve Bank of India, Sir C.D.
                Deshmukh, described the initiative of Sardar Mohan Singh as a "unique and
                epoch-making experiment in the history of banking".{' '}
                <Ref nums={[1, 26]} />
                Singh was also responsible for the bank becoming the first bank in the country to
                introduce a compulsory insurance policy scheme for its employees.{' '}
                <Ref nums={[1]} />
                In May 1945, Singh was honoured with Fellowship of the Institute of Bankers,
                London.{' '}
                <Ref nums={[27]} />
              </p>
              <p>
                Simultaneously, from 1944 to 1948, Singh was also (till the post was abolished
                following amalgamation of Princely States into the Union of India), Economic Advisor
                to the Maharaja of Patiala.{' '}
                <Ref nums={[2, 3, 28]} />
                In this role, he successfully organised co-operative associations in all market
                towns of Patiala State, and federalized them at the top into a syndicate, for
                handling the export and import of grains, cloth, sugar and other controlled
                commodities. He also introduced a system of permits to these co-operative bodies,
                which resulted in the elimination of corruption in the department which had otherwise
                been notorious for corrupt practices. Singh also introduced several radical agrarian
                reforms, which were widely appreciated by the peasantry.{' '}
                <Ref nums={[7]} />
              </p>
              <p>
                Singh was also Secretary, Relief &amp; Rehabilitation Committee, set up in Patiala
                during the Partition of India in 1947. During this difficult time in the Punjab, he
                organized all the refugee camps and was responsible for settling thousands of
                refugees from Pakistan into useful vocations.{' '}
                <Ref nums={[1, 28, 10]} />
              </p>
              <p>
                In 1948, Singh founded and also served as Managing Director of Patiala Insurance
                Corporation as a state-owned enterprise. Thereafter, he also founded and was
                Managing Director of Patiala Construction Company Ltd.{' '}
                <Ref nums={[1, 4, 10, 25, 29]} />
              </p>
              <p>
                By the end of 1953, Singh handed over his multiple roles in Patiala. From 1954 to
                1955, he became Special Advisor to New India Insurance Company in Bombay.{' '}
                <Ref nums={[10, 7]} />
                Thereafter, in 1956, he became Deputy General Manager of Punjab National Bank Ltd.
                which, at that time, was the no. 2 position in the bank. From the headquarters of
                the bank in Parliament Street, New Delhi, he played a major role in the financing
                and growth of several of India's largest companies.{' '}
                <Ref nums={[1, 21, 30, 31]} />
              </p>
              <p>
                In his later years, Singh started and was President of the firm of Industrial and
                Financial Consultants Pvt. Ltd., New Delhi, to advise and assist business
                enterprises in the country.{' '}
                <Ref nums={[32, 33]} />
              </p>
              <p>
                Singh was also Chairman of the Panipat Woollen and General Mills Co. Ltd. and was
                on the Board of Directors of several other large companies including Mohan Meakin
                Breweries Ltd., National Buildings Construction Corporation Ltd., Bharat Steel Tubes
                Ltd. and Prestolite of India Ltd. He was also on the Board of Directors of the
                Institute of Home Economics, New Delhi.{' '}
                <Ref nums={[7, 33, 34]} />
              </p>
            </div>

            {/* 4 images in a row */}
            <div className={styles.imageRow4}>
              <ImageSection
                src={siteImages.maharajaOfPatiala.src}
                alt={siteImages.maharajaOfPatiala.alt}
                caption="Sardar Mohan Singh with the Maharaja and Maharani of Patiala"
              />
              <ImageSection
                src={siteImages.bankOfPatiala.src}
                alt={siteImages.bankOfPatiala.alt}
                caption="Sardar Mohan Singh (Right)"
              />
              <ImageSection
                src={siteImages.mobileBanking.src}
                alt={siteImages.mobileBanking.alt}
                caption="One of the Bank of Patiala's mobile banking units, a pioneering initiative of Sardar Mohan Singh which took banking to rural areas"
              />
              <ImageSection
                src={siteImages.mrsRajAtBank.src}
                alt={siteImages.mrsRajAtBank.alt}
                caption="Sardarni Raj Mohan Singh"
              />
            </div>
          </div>
        </section>

        <hr className={styles.sectionDivider} />

        {/* =========================================
            PATRON OF EDUCATION
            — text full-width, then 3 images in a row
            ========================================= */}
        <section className={styles.section} id="education" aria-labelledby="education-heading">
          <div className={styles.section__inner}>
            <h2 className={styles.section__heading} id="education-heading">
              Patron of education
            </h2>

            {/* Full-width text block */}
            <div className={styles.body}>
              <p>
                Singh founded the co-educational Modern High School (later renamed as Modern Senior
                Secondary School), Patiala, on 8 January 1948 as the first private school of
                Patiala.{' '}
                <Ref nums={[2, 3, 7, 16, 20, 35, 36, 37]} />
                The school is counted as one of Patiala's top educational institutions, which has
                produced several highly successful and well-known alumni.{' '}
                <Ref nums={[3]} />
                Singh also established Saraswati Vidyak Trust, New Delhi, to control the
                institution.{' '}
                <Ref nums={[38, 12, 10]} />
              </p>
              <p>
                Singh's grandson, Jujhar Singh, is the current President of Modern Senior Secondary
                School, along with its sister school, Modern Nursery School, Patiala, and is also
                Chairman of the Board of Trustees of Saraswati Vidyak Trust.{' '}
                <Ref nums={[2, 39]} />
                His sister, and Singh's granddaughter, Nanki Singh, is the Vice President of the
                schools and a Trustee of the trust.{' '}
                <Ref nums={[19, 20, 40]} />
              </p>
              <p>
                Notably, Singh also co-founded the well-known Guru Harkrishan Public Schools, New
                Delhi, and was a founding member of the Guru Harkrishan Public Schools Society.{' '}
                <Ref nums={[1, 2, 41]} />
              </p>
              <p>
                Earlier, Singh also founded Khalsa Girls Middle School, Jalandhar, in 1938; New
                High School, Ludhiana, in 1940; Khalsa Girls High School, Ludhiana, in 1941; and
                Mohindra Kanya Maha Vidyalaya, Patiala, in 1949. He was also one of the two Founder
                Trustees of Patiala Education Trust, and Founder of Guru Nanak Vidyak Society,
                Patiala.{' '}
                <Ref nums={[2, 42, 43]} />
              </p>
              <p>
                Singh helped start other educational institutions as well, including Gurmat College,
                Patiala. He was also Vice President of Guru Nanak Engineering College, Ludhiana,
                Vice President for Life of Malwa Educational Society, Ludhiana, Member of the
                Managing Committee of Khalsa College, Amritsar, and Member of the Executive
                Committee of S.S. Khalsa Senior Secondary School, New Delhi.{' '}
                <Ref nums={[10, 7]} />
              </p>

              <div className={styles.infoBox}>
                Link to website of Modern Senior Secondary School &amp; Modern Nursery School,
                Patiala:{' '}
                <a
                  href="https://modernschoolpatiala.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://modernschoolpatiala.org/
                </a>
              </div>
            </div>

            {/* 3 images in a row */}
            <div className={styles.imageRow3}>
              <ImageSection
                src={siteImages.modernSchoolFacade.src}
                alt={siteImages.modernSchoolFacade.alt}
                caption="Sardar Mohan Singh founded Patiala's first private school in 1948"
              />
              <ImageSection
                src={siteImages.modernSchoolStudents.src}
                alt={siteImages.modernSchoolStudents.alt}
                caption="Mrs. Jai Chopra, first Principal of Modern Senior Secondary School, Patiala (sitting extreme left), Sardar Mohan Singh (sitting extreme right)"
              />
              <ImageSection
                src={siteImages.schoolSportsDay.src}
                alt={siteImages.schoolSportsDay.alt}
                caption="Sports programme at Modern Senior Secondary School, Patiala"
              />
            </div>
          </div>
        </section>

        <hr className={styles.sectionDivider} />

        {/* =========================================
            PATRON OF RELIGION AND CULTURE
            — text full-width, then 2 images in a row
            ========================================= */}
        <section
          className={`${styles.section} ${styles.sectionAlt}`}
          id="religion-culture"
          aria-labelledby="religion-heading"
        >
          <div className={styles.section__inner}>
            <h2 className={styles.section__heading} id="religion-heading">
              Patron of religion and culture
            </h2>

            {/* Full-width text block */}
            <div className={styles.body}>
              <p>
                Singh was Convenor of the Sikh Research Academy, Patiala.{' '}
                <Ref nums={[5]} />
              </p>
              <p>
                He served as Governor of Rotary International (District 52) in 1952–53.{' '}
                <Ref nums={[44, 45, 46, 47]} />
              </p>
              <p>
                He was also Treasurer of the Guru Nanak Foundation, New Delhi, of which the
                Maharaja of Patiala was the Chairman.{' '}
                <Ref nums={[48, 21, 49, 50, 51, 1]} />
              </p>
              <p>
                Singh was also Treasurer of the Guru Gobind Singh Foundation, New Delhi, of which
                the President of India, Dr. Sarvapalli Radhakrishnan, was the Chief Patron.{' '}
                <Ref nums={[52, 53]} />
              </p>
              <p>
                There are several old records and communications which show his active role in the
                advancement of Sikh religion and culture. The Governor of Rajasthan, Sardar Hukum
                Singh, described him as "a valuable asset to the (Sikh) community in the country".{' '}
                <Ref nums={[54]} />
              </p>
            </div>

            {/* 2 images in a row */}
            <div className={styles.imageRow2}>
              <ImageSection
                src={siteImages.withShastri.src}
                alt={siteImages.withShastri.alt}
                caption="Sardar Mohan Singh with Prime Minister Lal Bahadur Shastri (extreme right) and others"
              />
              <ImageSection
                src={siteImages.trainStation.src}
                alt={siteImages.trainStation.alt}
                caption="Sardar Mohan Singh being received at a train station"
              />
            </div>
          </div>
        </section>

      </main>

      {/* =========================================
          REFERENCES SECTION
          ========================================= */}
      <ReferenceSection />

      <Footer />
    </>
  )
}
