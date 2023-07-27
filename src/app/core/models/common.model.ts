  
  export interface MainCategory {
    _id: string;
    category_name: string;
    image_link: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  }
  
  export interface SubCategory extends MainCategory {
    main_category_id: string;
  }
  
  export interface CoursePaginationModel extends Pagination {
    docs: CourseModel[];
    main_category: string;
    sub_category: string;
    filterText: string;
    sortBy: string;
    sortByDirection: string;
  }
  
  export interface CourseModel {
    status: string;
    slug: string;
    _id: string;
    title: string;
    courseCode: string;
    course_duration_in_days: number;
    training_hours: number;
    skill_connect_code: string;
    fee: number;
    currency_code: number;
    main_category: string;
    //   main_category_id: string;
    sub_category: string;
    main_category_text: string;
    sub_category_text: string;
    pdu_technical: number;
    pdu_leadership: number;
    pdu_strategic: number;
    website_link: string;
    image_link: string;
    funding_grant: string;
    survey: string;
    certificates: number;
    course_description: string;
    banner_image_link: string;
    course_instructor: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  }
  
  export interface Pagination {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    prevPage: any;
    totalDocs: number;
    totalPages: number;
    docs: any[];
  }
  
  export interface CourseEditModel {
    course_kit: CourseKit[];
    status: string;
    slug: string;
    _id: string;
    title: string;
    courseCode: string;
    course_duration_in_days: number;
    training_hours: number;
    skill_connect_code: string;
    fee: number;
    currency_code: number;
    main_category: MainCategory;
    sub_category: SubCategory;
    main_category_text: string;
    sub_category_text: string;
    pdu_technical: number;
    pdu_leadership: number;
    pdu_strategic: number;
    website_link: string;
    image_link: string;
    certificates: number;
    course_description: string;
    course_detailed_description: string;
    banner_image_link: string;
    createdAt: string;
    updatedAt: string;
    course_instructor: Instructor;
    __v: number;
    id: string;
  }
  
  export interface Instructor {
    _id: string;
    user_id: User_id;
    linkedin: string;
    about: string;
    experience: string;
    website: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    last_name: string;
    __v: number;
    id: string;
  }
  
  export interface User_id {
    gender: string;
    slug: string;
    active: boolean;
    password_Activation: string;
    type: string;
    user_roles: any[];
    attemptCalculation: number;
    attemptBlock: boolean;
    passwordChange: boolean;
    forgetPasswordChange: boolean;
    followcount: number;
    _id: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: any[];
    studentType: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    reset_password_expires: string;
    reset_password_token: string;
    city: number;
    country: number;
    state: number;
    avatar: string;
    bannerImage: string;
    mentorFollow: any[];
    qualification: string;
    // allbannerImage: AllbannerImage[];
    // student_profile: Student_profile;
    name: string;
    status: number;
    // profile_completion: Profile_completion;
    id: string;
  }
  
  export interface ClassModel {
    status: String;
    _id: String;
    courseId: String;
    courseName: String;
    classAccessType: String;
    classDeliveryType: String;
    instructorCost: String;
    instructorCostCurrency: String;
    minimumEnrollment: String;
    maximumEnrollment: String;
    classStartDate: String;
    classEndDate: String;
    sessions: SessionClassModel[];
    attendanceSessions: SessionClassModel[];
  }
  
  export interface SessionClassModel {
    _id: String;
    sessionNumber: String;
    sessionStartDate: String;
    sessionEndDate: String;
    sessionStartTime: String;
    sessionEndTime: String;
    sessionStatus: string;
  }
  
  export interface ClassListingModel extends Pagination {
    docs: ClassModel[];
    totalDocs: number;
    limit: number;
  }
  
  export interface Pagination {
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    prevPage: any;
    totalDocs: number;
    totalPages: number;
    docs: any[];
  }
  
  export interface InstructorList {
    user_id: InstructorDetail[];
    instructor_id: String;
  }
  
  export interface InstructorDetail {
    name: String;
    last_name: String;
  }
  
  export interface StudentClass {
    status: string;
    _id: string;
    studentId: StudentId;
    classId: ClassModel;
    courseId: string;
    registeredOn: string;
    session: SessionClassModel[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  }
  
  export interface StudentId {
    _id: string;
    name: string;
    last_name: string;
    email: string;
    id: string;
  }
  
  
  export interface CourseKit {
    _id: string;
    courseId:string,
    name: string;
    shortDescription: string;
    longDescription: string;
    videoLink: string;
    documentLink: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
  }
  
  export interface Rating {
    overallRatingCourse: number;
    overallRatingInstructor: number;
    likelihoodToRecommend: number;
  }
  
  export interface AgreementLevelForCourse {
    courseObjectiveClear: string;
    courseTextbookClear: string;
    assignmentsHelpful: string;
    courseIncreasedInterest: string;
    courseMetExpectations: string;
  }
  
  export interface AgreementLevelInstructor {
    instructorKnowledgeable: string;
    instructorPreparedContent: string;
    instructorEncouragedFeedback: string;
    instructorEnthusiastic: string;
  }
  
  export interface SurveyModel {
    likelihoodToRecommend: number;
    name: string;
    courseId: string;
    instructorId: string;
    studentId: string;
    coursePurpose: string;
    courseAttendance: string;
    expectedGrade: string;
    rating: Rating;
    agreementLevelForCourse: AgreementLevelForCourse;
    agreementLevelInstructor: AgreementLevelInstructor;
    feedback: string;
  }
  