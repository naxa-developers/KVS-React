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
  { label: 'Male', value: 1, name: 'gender' },
  { label: 'Female', value: 2, name: 'gender' },
  { label: 'Other', value: 3, name: 'gender' }
];

const ownerStatusOptions = [
  { value: '1', label: 'Female’s leadership', name: 'owner_status' },
  { value: '2', label: 'Senior Citizen’s leadership', name: 'owner_status' },
  { value: '3', label: 'Children’s leadership', name: 'owner_status' },
  { value: '4', label: 'Single woman’s leadership', name: 'owner_status' },
  { value: '5', label: 'Disabled member’s leadership', name: 'owner_status' },
  { value: '6', label: 'Other', name: 'owner_status' }
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
  { value: 'Others', label: 'Others', name: 'religion' }
];
const mtOptions = [
  { value: 'Nepali', label: 'Nepali', name: 'mother_tongue' },
  { value: 'Newari', label: 'Newari', name: 'mother_tongue' },
  { value: 'Tamang', label: 'Tamang', name: 'mother_tongue' },
  { value: 'Gurung', label: 'Gurung', name: 'mother_tongue' },
  { value: 'Maithili', label: 'Maithili', name: 'mother_tongue' },
  { value: 'Limbu', label: 'Limbu', name: 'mother_tongue' },
  { value: 'Tharu', label: 'Tharu', name: 'mother_tongue' },
  { value: 'Rajbanshi', label: 'Rajbanshi', name: 'mother_tongue' },
  { value: 'Bhojpuri', label: 'Bhojpuri', name: 'mother_tongue' },
  { value: 'Aawadi', label: 'Aawadi', name: 'mother_tongue' },
  { value: 'Kiranti', label: 'Kiranti', name: 'mother_tongue' },
  { value: 'Others', label: 'Others', name: 'mother_tongue' }
];
// const educationOptions = [
//   {
//     value: 'Literate / ordinary',
//     label: 'Literate / ordinary',
//     name: 'education_level'
//   },
//   {
//     value: 'Primary level (1-8)',
//     label: 'Primary level (1-8)',
//     name: 'education_level'
//   },
//   {
//     value: 'Secondary level (9-12)',
//     label: 'Secondary level (9-12)',
//     name: 'education_level'
//   },
//   {
//     value: 'Bachelor degree',
//     label: 'Bachelor degree',
//     name: 'education_level'
//   },
//   {
//     value: 'Master’s degree',
//     label: 'Master’s degree',
//     name: 'education_level'
//   },
//   { value: 'P.hd', label: 'P.hd', name: 'education_level' },
//   { value: 'Illiterate', label: 'Illiterate', name: 'education_level' }
// ];

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
  { value: 'Literate', label: 'Literate', name: 'education_level' },
  {
    value: 'Primary level (1-8)',
    label: 'Primary level (1-8)',
    name: 'education_level'
  },
  {
    value: 'Secondary level (9-12)',
    label: 'Secondary level (9-12)',
    name: 'education_level'
  },
  {
    value: 'Bachelor degree',
    label: 'Bachelor degree',
    name: 'education_level'
  },
  {
    value: 'Master’s degree',
    label: 'Master’s degree',
    name: 'education_level'
  },
  { value: 'P.hd', label: 'P.hd', name: 'education_level' },
  { value: 'Illiterate', label: 'Illiterate', name: 'education_level' }
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
  { value: 'Active', label: 'Active', name: 'work_status' },
  { value: 'Passive', label: 'Passive', name: 'work_status' }
];

const ssCriteriaOptions = [
  {
    value: 'Senior citizen of 70 years',
    label: 'Senior citizen of 70 years',
    name: 'ss_criteria'
  },
  {
    value: 'Dalit, Senior Citizen of 60 years',
    label: 'Dalit, Senior Citizen of 60 years',
    name: 'ss_criteria'
  },
  {
    value: 'Unmarried 60 years old woman',
    label: 'Unmarried 60 years old woman',
    name: 'ss_criteria'
  },
  {
    value: '60 years old single woman',
    label: '60 years old single woman',
    name: 'ss_criteria'
  },
  { value: 'Widow of any age', label: 'Widow of any age', name: 'ss_criteria' },
  {
    value: 'People with disability of any age',
    label: 'People with disability of any age',
    name: 'ss_criteria'
  },
  {
    value: 'Endangered tribes of any age',
    label: 'Endangered tribes of any age',
    name: 'ss_criteria'
  },
  {
    value: 'Children under 5 years of age',
    label: 'Children under 5 years of age',
    name: 'ss_criteria'
  },
  { value: 'No', label: 'No', name: 'ss_criteria' }
];

const ssReceivedOptions = [
  { value: 'Yes', label: 'Yes', name: 'ss_received' },
  { value: 'No', label: 'No', name: 'ss_received' },
  { value: "Don't know", label: "Don't know", name: 'ss_received' }
];
const ssReasonOptions = [
  { value: 'No citizenship', label: 'No citizenship', name: 'ss_reason' },
  {
    value: 'Lack of information',
    label: 'Lack of information',
    name: 'ss_reason'
  },
  {
    value:
      'Didn’t receive recommendation letter from municipality/related body',
    label:
      'Didn’t receive recommendation letter from municipality/related body',
    name: 'ss_reason'
  },
  {
    value: 'Not eligible to get the facility',
    label: 'Not eligible to get the facility',
    name: 'ss_reason'
  },
  { value: 'Not registered', label: 'Not registered', name: 'ss_reason' },
  {
    value: 'People with disability',
    label: 'People with disability',
    name: 'ss_reason'
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
  { value: 'Others', label: 'Others', name: 'status' }
];
const disabilityOptions = [
  {
    value: 'Mental/psychological disability',
    label: 'Mental/psychological disability',
    name: 'disability'
  },
  {
    value: 'Intellectual disability',
    label: 'Intellectual disability',
    name: 'disability'
  },
  {
    value: 'Multiple disability',
    label: 'Multiple disability',
    name: 'disability'
  },
  {
    value: 'Difficulties with communicating',
    label: 'Difficulties with communicating',
    name: 'disability'
  },
  {
    value: 'Difficulties with seeing',
    label: 'Difficulties with seeing',
    name: 'disability'
  },
  {
    value: 'Difficulties with hearing',
    label: 'Difficulties with hearing',
    name: 'disability'
  },
  {
    value: 'Difficulties with both hearing and seeing',
    label: 'Difficulties with both hearing and seeing',
    name: 'disability'
  },
  {
    value: 'Difficulties with self-care like; washing, bathing, etc.',
    label: 'Difficulties with self-care like; washing, bathing, etc.',
    name: 'disability'
  },
  {
    value: 'Difficulties with remembering',
    label: 'Difficulties with remembering',
    name: 'disability'
  },
  {
    value: 'Difficulties with walking or climbing steps',
    label: 'Difficulties with walking or climbing steps',
    name: 'disability'
  },
  { value: 'Other', label: 'Other', name: 'disability' },
  { value: 'None', label: 'None', name: 'disability' }
];
const chronicIllnessOptions = [
  { value: 'Diabetes', label: 'Diabetes', name: 'chronic_illness' },
  { value: 'Asthma', label: 'Asthma', name: 'chronic_illness' },
  { value: 'Heart disease', label: 'Heart disease', name: 'chronic_illness' },
  {
    value: 'Kidney’s disease',
    label: 'Kidney’s disease',
    name: 'chronic_illness'
  },
  { value: 'Cancer', label: 'Cancer', name: 'chronic_illness' },
  { value: 'Leprosy', label: 'Leprosy', name: 'chronic_illness' },
  { value: 'HIV/AIDS', label: 'HIV/AIDS', name: 'chronic_illness' },
  { value: 'Alzheimer', label: 'Alzheimer', name: 'chronic_illness' },
  { value: 'Other', label: 'Other', name: 'chronic_illness' },
  { value: 'None', label: 'None', name: 'chronic_illness' }
];

// For Animal Data
const animalOptions = [
  { value: 'Cow', label: 'Cow', name: 'animal_type' },
  { value: 'Buffaloes', label: 'Buffaloes', name: 'animal_type' },
  { value: 'Cattle', label: 'Cattle', name: 'animal_type' },
  { value: 'Boar', label: 'Boar', name: 'animal_type' },
  { value: 'Hens/Ducks', label: 'Hens/Ducks', name: 'animal_type' },
  { value: 'Fish', label: 'Fish', name: 'animal_type' },
  { value: 'Other', label: 'Other', name: 'animal_type' }
];
const commercialOptions = [
  { value: 'Yes', label: 'Yes', name: 'commercial' },
  { value: 'No', label: 'No', name: 'commercial' }
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
