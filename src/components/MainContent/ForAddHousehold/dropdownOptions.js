// For Household Data
// const optionsAge = [
//   { label: 'under 18', value: 1, name: 'ageGroup' },
//   { label: '19 - 29', value: 2, name: 'ageGroup' },
//   { label: '30 - 39', value: 3, name: 'ageGroup' },
//   { label: '40 - 49', value: 4, name: 'ageGroup' },
//   { label: '50 - 59', value: 5, name: 'ageGroup' },
//   { label: 'Above 60', value: 6, name: 'ageGroup' }
// ];

const optionGen = [
  { label: 'Male', value: 'Male', name: 'gender' },
  { label: 'Female', value: 'Female', name: 'gender' },
  { label: 'Other', value: 'Other', name: 'gender' }
];

const ownerStatusOptions = [
  { value: '1', label: 'Female’s leadership', name: 'ownerStatus' },
  { value: '2', label: 'Senior Citizen’s leadership', name: 'ownerStatus' },
  { value: '3', label: 'Children’s leadership', name: 'ownerStatus' },
  { value: '4', label: 'Single woman’s leadership', name: 'ownerStatus' },
  { value: '5', label: 'Disabled member’s leadership', name: 'ownerStatus' },
  { value: '6', label: 'Other', name: 'ownerStatus' }
];

const casteOptions = [
  { value: 'Brahmin', label: 'Brahmin', name: 'caste' },
  { value: 'Chhetri', label: 'Chhetri', name: 'caste' },
  { value: 'Terai Janajati', label: 'Terai Janajati', name: 'caste' },
  { value: 'Pahadi Janajati', label: 'Pahadi Janajati', name: 'caste' },
  { value: 'Terai Dalit', label: 'Terai Dalit', name: 'caste' },
  { value: 'Pahadi Dalit', label: 'Pahadi Dalit', name: 'caste' },
  { value: 'Newar', label: 'Newar', name: 'caste' },
  { value: 'Muslim', label: 'Muslim', name: 'caste' },
  { value: 'Other', label: 'Other', name: 'caste' }
];

const religionOptions = [
  { value: 'Hindu', label: 'Hindu', name: 'religion' },
  { value: 'Buddhist', label: 'Buddhist', name: 'religion' },
  { value: 'Christian', label: 'Christian', name: 'religion' },
  { value: 'Muslim', label: 'Muslim', name: 'religion' },
  { value: 'Other', label: 'Other', name: 'religion' }
];
const mtOptions = [
  { value: 'Nepali', label: 'Nepali', name: 'motherTongue' },
  { value: 'Newari', label: 'Newari', name: 'motherTongue' },
  { value: 'Tamang', label: 'Tamang', name: 'motherTongue' },
  { value: 'Gurung', label: 'Gurung', name: 'motherTongue' },
  { value: 'Maithili', label: 'Maithili', name: 'motherTongue' },
  { value: 'Limbu', label: 'Limbu', name: 'motherTongue' },
  { value: 'Tharu', label: 'Tharu', name: 'motherTongue' },
  { value: 'Rajbanshi', label: 'Rajbanshi', name: 'motherTongue' },
  { value: 'Bhojpuri', label: 'Bhojpuri', name: 'motherTongue' },
  { value: 'Aawadi', label: 'Aawadi', name: 'motherTongue' },
  { value: 'Kiranti', label: 'Kiranti', name: 'motherTongue' },
  { value: 'Other', label: 'Other', name: 'motherTongue' }
];

// For Individual data
const ageOptions = [
  { label: 'under 18', value: 1, name: 'ageGroup' },
  { label: '19 - 29', value: 2, name: 'ageGroup' },
  { label: '30 - 39', value: 3, name: 'ageGroup' },
  { label: '40 - 49', value: 4, name: 'ageGroup' },
  { label: '50 - 59', value: 5, name: 'ageGroup' },
  { label: 'Above 60', value: 6, name: 'ageGroup' }
];

const genderOptions = [
  { label: 'Male', value: 1, name: 'gender' },
  { label: 'Female', value: 2, name: 'gender' },
  { label: 'Other', value: 3, name: 'gender' }
];

const educationOptions = [
  { value: 'Literate', label: 'Literate', name: 'educationLevel' },
  {
    value: 'Primary level (1-8)',
    label: 'Primary level (1-8)',
    name: 'educationLevel'
  },
  {
    value: 'Secondary level (9-12)',
    label: 'Secondary level (9-12)',
    name: 'educationLevel'
  },
  {
    value: 'Bachelor degree',
    label: 'Bachelor degree',
    name: 'educationLevel'
  },
  {
    value: 'Master’s degree',
    label: 'Master’s degree',
    name: 'educationLevel'
  },
  { value: 'P.hd', label: 'P.hd', name: 'educationLevel' },
  { value: 'Illiterate', label: 'Illiterate', name: 'educationLevel' }
];

const occupationOptions = [
  { value: 'Agriculture', label: 'Agriculture', name: 'occupation' },
  {
    value: 'Agricultural wages',
    label: 'Agricultural wages',
    name: 'occupation'
  },
  { value: 'Daily wages', label: 'Daily wages', name: 'occupation' },
  {
    value: 'Government service',
    label: 'Government service',
    name: 'occupation'
  },
  {
    value: 'Non-government service',
    label: 'Non-government service',
    name: 'occupation'
  },
  {
    value: 'Foreign employment',
    label: 'Foreign employment',
    name: 'occupation'
  },
  { value: 'Entrepreneur', label: 'Entrepreneur', name: 'occupation' },
  { value: 'Business', label: 'Business', name: 'occupation' },
  {
    value: 'Seasonal labor, India',
    label: 'Seasonal labor, India',
    name: 'occupation'
  },
  {
    value: 'Seasonal labor, Nepal',
    label: 'Seasonal labor, Nepal',
    name: 'occupation'
  },
  { value: 'Student', label: 'Student', name: 'occupation' },
  { value: 'Other', label: 'Other', name: 'occupation' }
];

const workstatusOptions = [
  { value: 'Active', label: 'Active', name: 'workingStatus' },
  { value: 'Passive', label: 'Passive', name: 'workingStatus' }
];

const ssCriteriaOptions = [
  {
    value: 'Senior citizen of 70 years',
    label: 'Senior citizen of 70 years',
    name: 'socialSecurityCriteria'
  },
  {
    value: 'Dalit, Senior Citizen of 60 years',
    label: 'Dalit, Senior Citizen of 60 years',
    name: 'socialSecurityCriteria'
  },
  {
    value: 'Unmarried 60 years old woman',
    label: 'Unmarried 60 years old woman',
    name: 'socialSecurityCriteria'
  },
  {
    value: '60 years old single woman',
    label: '60 years old single woman',
    name: 'socialSecurityCriteria'
  },
  { value: 'Widow of any age', label: 'Widow of any age', name: 'ss_criteria' },
  {
    value: 'People with disability of any age',
    label: 'People with disability of any age',
    name: 'socialSecurityCriteria'
  },
  {
    value: 'Endangered tribes of any age',
    label: 'Endangered tribes of any age',
    name: 'socialSecurityCriteria'
  },
  {
    value: 'Children under 5 years of age',
    label: 'Children under 5 years of age',
    name: 'socialSecurityCriteria'
  },
  { value: 'No', label: 'No', name: 'socialSecurityCriteria' }
];

const ssReceivedOptions = [
  { value: 'Yes', label: 'Yes', name: 'socialSecurityReceived' },
  { value: 'No', label: 'No', name: 'socialSecurityReceived' },
  { value: "Don't know", label: "Don't know", name: 'socialSecurityReceived' }
];
const ssReasonOptions = [
  {
    value: 'No citizenship',
    label: 'No citizenship',
    name: 'socialSecurityReason'
  },
  {
    value: 'Lack of information',
    label: 'Lack of information',
    name: 'socialSecurityReason'
  },
  {
    value:
      'Didn’t receive recommendation letter from municipality/related body',
    label:
      'Didn’t receive recommendation letter from municipality/related body',
    name: 'socialSecurityReason'
  },
  {
    value: 'Not eligible to get the facility',
    label: 'Not eligible to get the facility',
    name: 'socialSecurityReason'
  },
  {
    value: 'Not registered',
    label: 'Not registered',
    name: 'socialSecurityReason'
  },
  {
    value: 'People with disability',
    label: 'People with disability',
    name: 'socialSecurityReason'
  }
];
const statusOptions = [
  { value: 'Pregnant', label: 'Pregnant', name: 'status' },
  {
    value: 'Breast feeding woman',
    label: 'Breast feeding woman',
    name: 'status'
  },
  { value: 'Single Woman', label: 'Single Woman', name: 'status' },
  { value: 'Senior Citizen', label: 'Senior Citizen', name: 'status' },
  { value: 'Milk feeding baby', label: 'Milk feeding baby', name: 'status' },
  {
    value: 'People with disability',
    label: 'People with disability',
    name: 'status'
  },
  { value: 'Chronic illness', label: 'Chronic illness', name: 'status' },
  { value: 'Other', label: 'Other', name: 'status' }
];
const disabilityOptions = [
  {
    value: 'Mental/psychological disability',
    label: 'Mental/psychological disability',
    name: 'disabilityType'
  },
  {
    value: 'Intellectual disability',
    label: 'Intellectual disability',
    name: 'disabilityType'
  },
  {
    value: 'Multiple disability',
    label: 'Multiple disability',
    name: 'disabilityType'
  },
  {
    value: 'Difficulties with communicating',
    label: 'Difficulties with communicating',
    name: 'disabilityType'
  },
  {
    value: 'Difficulties with seeing',
    label: 'Difficulties with seeing',
    name: 'disabilityType'
  },
  {
    value: 'Difficulties with hearing',
    label: 'Difficulties with hearing',
    name: 'disabilityType'
  },
  {
    value: 'Difficulties with both hearing and seeing',
    label: 'Difficulties with both hearing and seeing',
    name: 'disabilityType'
  },
  {
    value: 'Difficulties with self-care like; washing, bathing, etc.',
    label: 'Difficulties with self-care like; washing, bathing, etc.',
    name: 'disabilityType'
  },
  {
    value: 'Difficulties with remembering',
    label: 'Difficulties with remembering',
    name: 'disabilityType'
  },
  {
    value: 'Difficulties with walking or climbing steps',
    label: 'Difficulties with walking or climbing steps',
    name: 'disabilityType'
  },
  { value: 'Other', label: 'Other', name: 'disabilityType' },
  { value: 'None', label: 'None', name: 'disabilityType' }
];
const chronicIllnessOptions = [
  { value: 'Diabetes', label: 'Diabetes', name: 'chronicIllness' },
  { value: 'Asthma', label: 'Asthma', name: 'chronicIllness' },
  { value: 'Heart disease', label: 'Heart disease', name: 'chronicIllness' },
  {
    value: 'Kidney’s disease',
    label: 'Kidney’s disease',
    name: 'chronicIllness'
  },
  { value: 'Cancer', label: 'Cancer', name: 'chronicIllness' },
  { value: 'Leprosy', label: 'Leprosy', name: 'chronicIllness' },
  { value: 'HIV/AIDS', label: 'HIV/AIDS', name: 'chronicIllness' },
  { value: 'Alzheimer', label: 'Alzheimer', name: 'chronicIllness' },
  { value: 'Other', label: 'Other', name: 'chronicIllness' },
  { value: 'None', label: 'None', name: 'chronicIllness' }
];

// For Animal Data
const animalOptions = [
  { value: 'Cow', label: 'Cow', name: 'animalType' },
  { value: 'Buffaloes', label: 'Buffaloes', name: 'animalType' },
  { value: 'Cattle', label: 'Cattle', name: 'animalType' },
  { value: 'Boar', label: 'Boar', name: 'animalType' },
  { value: 'Hens/Ducks', label: 'Hens/Ducks', name: 'animalType' },
  { value: 'Fish', label: 'Fish', name: 'animalType' },
  { value: 'Other', label: 'Other', name: 'animalType' }
];
const commercialOptions = [
  { value: 'Yes', label: 'Yes', name: 'commercialPurpose' },
  { value: 'No', label: 'No', name: 'commercialPurpose' }
];

export {
  // optionsAge,
  optionGen,
  ownerStatusOptions,
  casteOptions,
  religionOptions,
  mtOptions,
  // educationOptions,

  ageOptions,
  genderOptions,
  educationOptions,
  occupationOptions,
  workstatusOptions,
  ssCriteriaOptions,
  ssReceivedOptions,
  ssReasonOptions,
  statusOptions,
  disabilityOptions,
  chronicIllnessOptions,
  animalOptions,
  commercialOptions
};
