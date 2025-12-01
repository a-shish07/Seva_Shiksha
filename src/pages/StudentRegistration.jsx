import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import toast, { Toaster } from 'react-hot-toast';
import { GraduationCap, Users, Award, Target, Star, BookOpen, CreditCard, MapPin, Phone, Mail, Calendar, User, FileText } from 'lucide-react';
import "react-datepicker/dist/react-datepicker.css";

const StudentRegistration = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, control, formState: { errors }, watch } = useForm();

  // Watch fields for conditional rendering
  const watchedQualification = watch('currentEducation');
  const watchedProgram = watch('program');

  // Static data matching the original website
  const stateOptions = [
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'West Bengal', label: 'West Bengal' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Delhi', label: 'NCR / New Delhi' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Chandigarh', label: 'Chandigarh' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Others', label: 'Others State' },
  ];

  const programOptions = [
    { value: '10th', label: '10th/Matric' },
    { value: '12th', label: 'Intermediate/10+2' },
    { value: 'graduation', label: 'Graduation/B.Tech' },
  ];

  const coursesAfter10th = [
    { value: 'polytechnic', label: 'Polytechnic Engineering' },
    { value: 'paramedical', label: 'Para-Medical Programs' },
    { value: 'iti', label: 'Industrial Training Institute (ITI)' },
    { value: 'diploma', label: 'Professional Diplomas' },
  ];

  const coursesAfter12th = [
    { value: 'btech', label: 'B.Tech/Engineering' },
    { value: 'medical', label: 'Medical/MBBS' },
    { value: 'paramedical', label: 'Para-Medical Degree Programs' },
    { value: 'bsc', label: 'B.Sc Programs' },
    { value: 'bcom', label: 'B.Com/BBA Programs' },
    { value: 'bca', label: 'BCA/Computer Applications' },
    { value: 'law', label: 'Law/LLB Programs' },
    { value: 'agriculture', label: 'Agriculture Programs' },
    { value: 'pharmacy', label: 'B.Pharmacy' },
    { value: 'nursing', label: 'B.Sc Nursing' },
    { value: 'education', label: 'D.Ed/Education Programs' },
    { value: 'fashion', label: 'Fashion Designing' },
  ];

  const coursesAfterGraduation = [
    { value: 'mtech', label: 'M.Tech/ME' },
    { value: 'mba', label: 'MBA/Management' },
    { value: 'mca', label: 'MCA' },
    { value: 'msc', label: 'M.Sc Programs' },
    { value: 'llm', label: 'LLM/Law Masters' },
    { value: 'research', label: 'Research Programs' },
  ];

  const getCurrentCourses = () => {
    switch (watchedProgram?.value) {
      case '10th':
        return coursesAfter10th;
      case '12th':
        return coursesAfter12th;
      case 'graduation':
        return coursesAfterGraduation;
      default:
        return [];
    }
  };

  const qualificationOptions = [
    { value: '10th', label: '10th/Matric' },
    { value: '12th', label: 'Intermediate/10+2' },
    { value: 'graduation', label: 'Graduation/B.Tech' },
  ];

  const categoryOptions = [
    { value: 'General', label: 'General' },
    { value: 'OBC', label: 'OBC' },
    { value: 'SC', label: 'SC/ST' },
    { value: 'Minority', label: 'Minority' },
  ];

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  const registrationTypeOptions = [
    { value: 'member', label: 'Member' },
    { value: 'coordinator', label: 'Coordinator' },
  ];

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log('Form Data:', data);

      // Redirect to payment page with form data
      navigate('/payment', {
        state: {
          formData: data,
          amount: 999,
          formType: 'Student Registration'
        }
      });
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 mt-10">
      <Toaster position="top-right" />
      
      {/* Header Section */}
      <div className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/20 to-amber-400/20"></div>
        <div className="relative container mx-auto px-3 sm:px-4 text-center mt-12 sm:mt-36">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Student Registration
                </span>
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-2">
              Complete your scholarship form and unlock access to quality higher education opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-3 sm:px-4 pb-12 sm:pb-16 max-w-4xl mt-8 sm:mt-10">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 sm:p-6 text-white">
            <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Scholarship Application Form</h2>
            <p className="opacity-90 text-xs sm:text-base">Fill out this form to apply for educational opportunities</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
            {/* Program Selection */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span>Program Selection</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Registration Type <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="registrationType"
                    control={control}
                    rules={{ required: 'Registration type is required' }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={registrationTypeOptions}
                        placeholder="Select Registration Type"
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    )}
                  />
                  {errors.registrationType && <p className="text-red-500 text-sm mt-1">{errors.registrationType.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Program
                  </label>
                  <Controller
                    name="program"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={programOptions}
                        placeholder="Select Program"
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    )}
                  />
                  {errors.program && <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('course', { required: 'Course is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your desired course"
                  />
                  {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-3 sm:gap-6 mt-3 sm:mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select State
                  </label>
                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={stateOptions}
                        placeholder="Select State"
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    )}
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span>Personal Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('mobile', {
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Please enter a valid mobile number'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter mobile number"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    {...register('whatsapp')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter WhatsApp number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email ID
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aadhaar Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('aadhaar', {
                      required: 'Aadhaar number is required',
                      pattern: {
                        value: /^\d{12}$/,
                        message: 'Please enter a valid 12-digit Aadhaar number'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter Aadhaar number"
                  />
                  {errors.aadhaar && <p className="text-red-500 text-sm mt-1">{errors.aadhaar.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Education Qualification
                  </label>
                  <Controller
                    name="currentEducation"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={qualificationOptions}
                        placeholder="Select Qualification"
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    )}
                  />
                  {errors.currentEducation && <p className="text-red-500 text-sm mt-1">{errors.currentEducation.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={categoryOptions}
                        placeholder="Select Category"
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    )}
                  />
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality
                  </label>
                  <input
                    {...register('nationality')}
                    defaultValue="Indian"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter nationality"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={genderOptions}
                        placeholder="Select Gender"
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <Controller
                    name="dateOfBirth"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={field.onChange}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        yearDropdownItemNumber={50}
                        scrollableYearDropdown
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholderText="Select date of birth"
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Family Information */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                <span>Family Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father's/Guardian Name
                  </label>
                  <input
                    {...register('fatherName')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter father's/guardian name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mother's Name
                  </label>
                  <input
                    {...register('motherName')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter mother's name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father's Mobile Number
                  </label>
                  <input
                    {...register('fatherMobile', {
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Please enter a valid mobile number'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter father's mobile number"
                  />
                  {errors.fatherMobile && <p className="text-red-500 text-sm mt-1">{errors.fatherMobile.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent's Occupation
                  </label>
                  <input
                    {...register('parentOccupation')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter parent's occupation"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent's Annual Income
                  </label>
                  <input
                    {...register('parentIncome')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter annual income"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                <span>Address Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address
                  </label>
                  <textarea
                    {...register('address')}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter complete address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    District
                  </label>
                  <input
                    {...register('district')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter district"
                  />
                  {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <Controller
                    name="addressState"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={stateOptions}
                        placeholder="Select State"
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    )}
                  />
                  {errors.addressState && <p className="text-red-500 text-sm mt-1">{errors.addressState.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Block
                  </label>
                  <input
                    {...register('block')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter block"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pin/Zip Code
                  </label>
                  <input
                    {...register('pinCode', {
                      pattern: {
                        value: /^\d{6}$/,
                        message: 'Please enter a valid 6-digit PIN code'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter PIN code"
                  />
                  {errors.pinCode && <p className="text-red-500 text-sm mt-1">{errors.pinCode.message}</p>}
                </div>
              </div>
            </div>

            {/* State Preferences */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                <span className="line-clamp-2">State Preferences (Choose any five states only)</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
                {[
                  'NCR / New Delhi', 'Tamil Nadu', 'Chandigarh', 'Rajasthan',
                  'Uttar Pradesh', 'Karnataka', 'Telangana', 'Punjab',
                  'Uttarakhand', 'Madhya Pradesh', 'Haryana', 'Chhattisgarh',
                  'Others State'
                ].map((state) => (
                  <div key={state} className="flex items-center">
                    <input
                      type="checkbox"
                      id={state}
                      {...register('preferredStates')}
                      value={state}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={state} className="ml-2 text-sm text-gray-700">
                      {state}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 rounded-xl">
              <div className="flex items-start gap-2 sm:gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  {...register('acceptTerms')}
                  className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1 flex-shrink-0"
                />
                <label htmlFor="terms" className="text-xs sm:text-sm text-gray-700">
                  I confirm all the details are correct to the best of my knowledge
                </label>
              </div>
              {errors.acceptTerms && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.acceptTerms.message}</p>}
            </div>



            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 md:py-4 px-6 sm:px-10 md:px-12 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {isLoading ? 'Submitting...' : 'SUBMIT & PAY'}
              </button>
            </div>
          </form>
        </div>



        {/* Features Section */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-2xl shadow-lg">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">Quality Education</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">Access to top universities and quality educational programs across India</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-2xl shadow-lg">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">Career Guidance</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">Expert counseling to help you choose the right career path</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-2xl shadow-lg">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">Scholarship Support</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">Assistance in finding and applying for various scholarship opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;