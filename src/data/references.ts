// References data file
// Each reference has a title, display text, and optional imageFile for JPEG references
// imageFile: filename of the corresponding JPEG (to be placed in public/references/)
// externalUrl: for references that link to live web pages instead of JPEG files

export interface Reference {
  id: number;
  title: string;
  imageFile?: string;          // JPEG filename in public/references/ — provided via WeTransfer
  externalUrl?: string;        // For references that link to external websites
}

export const references: Reference[] = [
  {
    id: 1,
    title: '"Kirya of eminent banker", The Indian Express, 19 November 1968.',
    imageFile: 'ref-01-indian-express-kirya-1968.jpg',
  },
  {
    id: 2,
    title: '"Modern Senior Secondary School celebrates vision, values and achievement over 78 years", Punjab Kesari, 7 December 2025.',
    imageFile: 'ref-02-punjab-kesari-msssp-2025.jpg',
  },
  {
    id: 3,
    title: '"Modern School, Patiala, organizes Sardar Mohan Singh Inter-School Debate", Royal Patiala, 7 October 2023.',
    imageFile: 'ref-03-royal-patiala-debate-2023.jpg',
  },
  {
    id: 4,
    title: 'Business Week, 1949.',
    imageFile: 'ref-04-business-week-1949.jpg',
  },
  {
    id: 5,
    title: 'The Sikh Research Academy Patiala.',
    imageFile: 'ref-05-sikh-research-academy.jpg',
  },
  {
    id: 6,
    title: '"Old will always be gold for them", The Tribune, 26 March 2017.',
    imageFile: 'ref-06-tribune-old-gold-2017.jpg',
  },
  {
    id: 7,
    title: 'Modern Senior Secondary School website.',
    externalUrl: 'https://modernschoolpatiala.org/home/founder',
  },
  {
    id: 8,
    title: 'High Court of Punjab and Haryana at Chandigarh, Judgement in S. Mohan Singh Vs Patiala and East Punjab States Union, 22 February 1954.',
    externalUrl: 'https://www.courtkutchehry.com/judgements/135031/s-mohan-singh-vs-patiala-and-east-punjab-states-union/',
  },
  {
    id: 9,
    title: 'Death Certificate of Sardar Mohan Singh.',
    imageFile: 'ref-09-death-certificate.jpg',
  },
  {
    id: 10,
    title: "'The Times of India Directory & Year Book, 1956-57'.",
    imageFile: 'ref-10-times-of-india-directory-1956.jpg',
  },
  {
    id: 11,
    title: 'The Bank of Patiala, Balance Sheet, 30 September 1951.',
    imageFile: 'ref-11-bank-of-patiala-balance-sheet-1951.jpg',
  },
  {
    id: 12,
    title: '"Modern School Patiala celebrating 70 glorious years", Royal Patiala, 2017.',
    imageFile: 'ref-12-royal-patiala-70-years-2017.jpg',
  },
  {
    id: 13,
    title: "'Kapurthala Genealogy'.",
    externalUrl: 'https://www.royalark.net/India/kapurth2.htm',
  },
  {
    id: 14,
    title: "'Miss Sohan Lal and Rai Bahadur Sohan Lal', Illustrated Weekly of Pakistan, 1 April 1962.",
    imageFile: 'ref-14-illustrated-weekly-pakistan-1962.jpg',
  },
  {
    id: 15,
    title: 'Wedding invitation of Anjali and Ravi Singh, 15 January 1966.',
    imageFile: 'ref-15-wedding-invitation-anjali-ravi-1966.jpg',
  },
  {
    id: 16,
    title: '"Founder\'s Day celebrated", 16 December 2025, The Tribune.',
    imageFile: 'ref-16-tribune-founders-day-2025.jpg',
  },
  {
    id: 17,
    title: '"Jujhar Singh of NewsX wins prestigious Red Ink Award for Journalism", Daily Motion, 28 February 2019.',
    externalUrl: 'https://www.dailymotion.com/video/x737jqy',
  },
  {
    id: 18,
    title: '"NewsX\'s Jujhar Singh likely to join India Ahead", Adgully, 30 August 2018.',
    imageFile: 'ref-18-adgully-jujhar-india-ahead-2018.jpg',
  },
  {
    id: 19,
    title: '"Annual Sports Meet", The Tribune, 29 October 2017.',
    imageFile: 'ref-19-tribune-sports-meet-2017.jpg',
  },
  {
    id: 20,
    title: '"Modern School Hoists National Flag on Campus", Royal Patiala, 28 February 2018.',
    imageFile: 'ref-20-royal-patiala-national-flag-2018.jpg',
  },
  {
    id: 21,
    title: '"Sardar Mohan Singh Passes Away", The Spokesman Weekly, 2 November 1968.',
    imageFile: 'ref-21-spokesman-weekly-passes-away-1968.jpg',
  },
  {
    id: 22,
    title: 'Letter from Prime Minister of Patiala State to Sardar Mohan Singh, General Manager, Imperial Bank of India Ltd., 28 October 1944.',
    imageFile: 'ref-22-letter-pm-patiala-1944.jpg',
  },
  {
    id: 23,
    title: 'Wikipedia page of State Bank of India.',
    externalUrl: 'https://en.wikipedia.org/wiki/State_Bank_of_Patiala',
  },
  {
    id: 24,
    title: 'Bank of Patiala, Annual Report for year ended 31 March 1952.',
    imageFile: 'ref-24-bank-of-patiala-annual-report-1952.jpg',
  },
  {
    id: 25,
    title: "Bank of Patiala, Speech delivered by Sardar Mohan Singh, Managing Director on the occasion of the visit of His Highness The Rajpramukh of Patiala, 23 January 1950.",
    imageFile: 'ref-25-bank-of-patiala-speech-1950.jpg',
  },
  {
    id: 26,
    title: "'Around Connaught Circus', The Indian Spectator, 15 December 1952.",
    imageFile: 'ref-26-indian-spectator-1952.jpg',
  },
  {
    id: 27,
    title: 'Certificate of The Institute of Bankers, 16 May 1945.',
    imageFile: 'ref-27-institute-of-bankers-certificate-1945.jpg',
  },
  {
    id: 28,
    title: 'Report on the working of the Relief and Rehabilitation Committee, Patiala, from 8 April 1947 to 25 February 1948.',
    imageFile: 'ref-28-relief-rehabilitation-committee-1947.jpg',
  },
  {
    id: 29,
    title: 'Patiala Insurance Corporation, Report and Accounts, for year ending 31 December 1951.',
    imageFile: 'ref-29-patiala-insurance-corporation-1951.jpg',
  },
  {
    id: 30,
    title: 'Letter from Ram Kishan, Chief Minister, Punjab, to Sardar Mohan Singh, Deputy General Manager, Punjab National Bank.',
    imageFile: 'ref-30-letter-ram-kishan-cm-punjab.jpg',
  },
  {
    id: 31,
    title: 'Letter from Jawaharlal Nehru, Prime Minister, India, to Sardar Mohan Singh, Deputy General Manager, Punjab National Bank Ltd., 15 July 1962.',
    imageFile: 'ref-31-letter-nehru-1962.jpg',
  },
  {
    id: 32,
    title: "Letter by Sardar Mohan Singh, on letterhead of Industrial & Financial Consultants Pvt. Ltd., 11 May 1967.",
    imageFile: 'ref-32-letter-industrial-financial-1967.jpg',
  },
  {
    id: 33,
    title: 'Mohan Meakin Monthly Newsletter, December 1968.',
    imageFile: 'ref-33-mohan-meakin-newsletter-1968.jpg',
  },
  {
    id: 34,
    title: 'High Court of Punjab and Haryana at Chandigarh, Judgement in The Panipat Woollen And General Mills Company Ltd. and Another vs R.L. Kaushik and Others.',
    externalUrl: 'https://highcourtchd.gov.in/landmark_judgments/HC/English/CR_545_1968.pdf',
  },
  {
    id: 35,
    title: '"Kamana and Vanshika conferred with Vijay Rattan", Dainik Jagran, 8 December 2025.',
    imageFile: 'ref-35-dainik-jagran-vijay-rattan-2025.jpg',
  },
  {
    id: 36,
    title: '"Patiala\'s first private school alumni joined as PPSC member", 6 May 2021.',
    imageFile: 'ref-36-ppsc-member-2021.jpg',
  },
  {
    id: 37,
    title: '"75th Founder\'s Day of Patiala\'s first private co-ed school celebrated with enthusiasm", 21 January 2023.',
    imageFile: 'ref-37-founders-day-75th-2023.jpg',
  },
  {
    id: 38,
    title: '"Modern Senior Secondary School announced student leadership 2019-20", 30 April 2019.',
    imageFile: 'ref-38-student-leadership-2019.jpg',
  },
  {
    id: 39,
    title: '"78 years of vision, values and achievement celebrated", Dainik Bhaskar, 8 December 2025.',
    imageFile: 'ref-39-dainik-bhaskar-78-years-2025.jpg',
  },
  {
    id: 40,
    title: 'Management page of Modern Senior Secondary School and Modern Nursery School, Patiala.',
    externalUrl: 'https://modernschoolpatiala.org/home/management',
  },
  {
    id: 41,
    title: '"Modern Senior Secondary School Patiala celebrates 78th year of founding", Ajit Newspaper, 8 December 2025.',
    imageFile: 'ref-41-ajit-newspaper-78th-2025.jpg',
  },
  {
    id: 42,
    title: '"Modern School Patiala\'s 78 years", Jagbani, 7 December 2025.',
    imageFile: 'ref-42-jagbani-78-years-2025.jpg',
  },
  {
    id: 43,
    title: '"Modern School celebrates 78th year of foundation", Charhdikala, 7 December 2025.',
    imageFile: 'ref-43-charhdikala-78th-2025.jpg',
  },
  {
    id: 44,
    title: '"What Rotary Stands For", The Tribune, 26 January 1953.',
    imageFile: 'ref-44-tribune-rotary-1953.jpg',
  },
  {
    id: 45,
    title: '"Goodwill Mission Back in Patiala", The Spokesman Weekly, 30 April 1952.',
    imageFile: 'ref-45-spokesman-goodwill-1952.jpg',
  },
  {
    id: 46,
    title: '"Rotary chief in Delhi", The Statesman, 14 December 1952.',
    imageFile: 'ref-46-statesman-rotary-1952.jpg',
  },
  {
    id: 47,
    title: 'Rotary District 3011, Roll of Honour.',
    imageFile: 'ref-47-rotary-roll-of-honour.jpg',
  },
  {
    id: 48,
    title: 'Letter from Sardar Mohan Singh to Chief Minister of Punjab, Sardar Lachhman Singh Gill, 19 December 1967.',
    imageFile: 'ref-48-letter-to-cm-punjab-1967.jpg',
  },
  {
    id: 49,
    title: 'Letter from Governor of Madras, Sardar Bahadur Sardar Ujjal Singh, to Sardar Mohan Singh, 17 July 1968.',
    imageFile: 'ref-49-letter-governor-madras-1968.jpg',
  },
  {
    id: 50,
    title: '"Plan for 500th Nanak birthday", The Sunday Standard, 14 July 1968.',
    imageFile: 'ref-50-sunday-standard-nanak-1968.jpg',
  },
  {
    id: 51,
    title: 'Minutes of Meeting of Guru Nanak Foundation, 8 May 1968.',
    imageFile: 'ref-51-guru-nanak-foundation-minutes-1968.jpg',
  },
  {
    id: 52,
    title: 'Letter from Vice Chancellor, Punjab University, Suraj Bhan, to Sardar Mohan Singh, 16 October 1967.',
    imageFile: 'ref-52-letter-vc-punjab-university-1967.jpg',
  },
  {
    id: 53,
    title: 'Letter from Sardar Mohan Singh to Governor of Madras, Sardar Bahadur Sardar Ujjal Singh, 12 July 1967.',
    imageFile: 'ref-53-letter-to-governor-madras-1967.jpg',
  },
  {
    id: 54,
    title: 'Letter from Governor of Rajasthan, Sardar Hukum Singh, to Sardar Mohan Singh, 10 July 1967.',
    imageFile: 'ref-54-letter-governor-rajasthan-1967.jpg',
  },
];
