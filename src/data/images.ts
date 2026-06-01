// Image data file
// Maps image filenames to Wix CDN URLs (used as src until local images are provided)
// To use local images: place files in public/images/ and update the src field

export interface SiteImage {
  id: string;
  filename: string;
  alt: string;
  src: string;           // Wix CDN URL (fallback) or path like /images/filename.jpg
  localPath: string;     // Intended local path once images are downloaded
}


export const siteImages: Record<string, SiteImage> = {
  portrait: {
    id: 'portrait',
    filename: 'sardar-mohan-singh-portrait.jpg',
    alt: 'Sardar Mohan Singh — Portrait Photograph',
    src: '/images/sardar-mohan-singh-portrait.jpg',
    localPath: '/images/sardar-mohan-singh-portrait.jpg',
  },
  sittingChair: {
    id: 'sittingChair',
    filename: 'sardar-mohan-singh-sitting-chair.jpg',
    alt: 'Sardar Mohan Singh — Sitting on Chair',
    src: '/images/sardar-mohan-singh-sitting-chair.jpg',
    localPath: '/images/sardar-mohan-singh-sitting-chair.jpg',
  },
  smsPortrait2: {
    id: 'smsPortrait2',
    filename: 'sardar-mohan-singh-pic.jpg',
    alt: 'Sardar Mohan Singh',
    src: '/images/sardar-mohan-singh-pic.jpg',
    localPath: '/images/sardar-mohan-singh-pic.jpg',
  },
  rajMohanSingh: {
    id: 'rajMohanSingh',
    filename: 'sardarni-raj-mohan-singh.jpg',
    alt: 'Sardarni Raj Mohan Singh',
    src: '/images/sardarni-raj-mohan-singh.jpg',
    localPath: '/images/sardarni-raj-mohan-singh.jpg',
  },
  familyPhoto: {
    id: 'familyPhoto',
    filename: 'ravi-anjali-jujhar-nanki-singh.jpg',
    alt: 'Nanki Singh, Jujhar Singh, Ravi Singh, Anjali Singh',
    src: '/images/ravi-anjali-jujhar-nanki-singh.jpg',
    localPath: '/images/ravi-anjali-jujhar-nanki-singh.jpg',
  },
  maharajaOfPatiala: {
    id: 'maharajaOfPatiala',
    filename: 'sardar-mohan-singh-with-maharaja-patiala.jpg',
    alt: 'Sardar Mohan Singh with the Maharaja and Maharani of Patiala',
    src: '/images/sardar-mohan-singh-with-maharaja-patiala.jpg',
    localPath: '/images/sardar-mohan-singh-with-maharaja-patiala.jpg',
  },
  bankOfPatiala: {
    id: 'bankOfPatiala',
    filename: 'sardar-mohan-singh-bank-of-patiala.jpg',
    alt: 'Sardar Mohan Singh — Bank of Patiala',
    src: '/images/sardar-mohan-singh-bank-of-patiala.jpg',
    localPath: '/images/sardar-mohan-singh-bank-of-patiala.jpg',
  },
  mrsRajAtBank: {
    id: 'mrsRajAtBank',
    filename: 'sardarni-raj-mohan-singh-bank.jpg',
    alt: 'Sardarni Raj Mohan Singh',
    src: '/images/sardarni-raj-mohan-singh-bank.jpg',
    localPath: '/images/sardarni-raj-mohan-singh-bank.jpg',
  },
  mobileBanking: {
    id: 'mobileBanking',
    filename: 'bank-of-patiala-mobile-banking.jpg',
    alt: "One of the Bank of Patiala's mobile banking units — a pioneering initiative of Sardar Mohan Singh which took banking to rural areas",
    src: '/images/bank-of-patiala-mobile-banking.jpg',
    localPath: '/images/bank-of-patiala-mobile-banking.jpg',
  },
  modernSchoolFacade: {
    id: 'modernSchoolFacade',
    filename: 'modern-senior-secondary-school-patiala-facade.jpg',
    alt: "Sardar Mohan Singh founded Patiala's first private school in 1948",
    src: '/images/modern-senior-secondary-school-patiala-facade.jpg',
    localPath: '/images/modern-senior-secondary-school-patiala-facade.jpg',
  },
  modernSchoolStudents: {
    id: 'modernSchoolStudents',
    filename: 'sardar-mohan-singh-teacher-students.jpg',
    alt: 'Mrs. Jai Chopra, first Principal of Modern Senior Secondary School, Patiala (sitting extreme left), Sardar Mohan Singh (sitting extreme right)',
    src: '/images/sardar-mohan-singh-teacher-students.jpg',
    localPath: '/images/sardar-mohan-singh-teacher-students.jpg',
  },
  schoolSportsDay: {
    id: 'schoolSportsDay',
    filename: 'modern-senior-secondary-school-sports-day.jpg',
    alt: 'Sports programme at Modern Senior Secondary School, Patiala',
    src: '/images/modern-senior-secondary-school-sports-day.jpg',
    localPath: '/images/modern-senior-secondary-school-sports-day.jpg',
  },
  withShastri: {
    id: 'withShastri',
    filename: 'sardar-mohan-singh-with-pm-lal-bahadur-shastri.jpg',
    alt: 'Sardar Mohan Singh with Prime Minister Lal Bahadur Shastri (extreme right) and others',
    src: '/images/sardar-mohan-singh-with-pm-lal-bahadur-shastri.jpg',
    localPath: '/images/sardar-mohan-singh-with-pm-lal-bahadur-shastri.jpg',
  },
  trainStation: {
    id: 'trainStation',
    filename: 'sardar-mohan-singh-being-received-train-station.jpg',
    alt: 'Sardar Mohan Singh being received at a train station',
    src: '/images/sardar-mohan-singh-being-received-train-station.jpg',
    localPath: '/images/sardar-mohan-singh-being-received-train-station.jpg',
  },
};

// Helper: get image src (prefers local if available, falls back to Wix CDN)
export function getImageSrc(key: keyof typeof siteImages): string {
  return siteImages[key]?.src ?? '';
}
