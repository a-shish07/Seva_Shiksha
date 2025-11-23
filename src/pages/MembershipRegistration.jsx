import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import toast, { Toaster } from 'react-hot-toast';
import { Users, User, Mail, Phone, MapPin, Camera, FileText, Award, Target } from 'lucide-react';

const MembershipRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  const { register, handleSubmit, control, formState: { errors } } = useForm();

  // Indian states options
  const stateOptions = [
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Manipur', label: 'Manipur' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Mizoram', label: 'Mizoram' },
    { value: 'Nagaland', label: 'Nagaland' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Sikkim', label: 'Sikkim' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Tripura', label: 'Tripura' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'West Bengal', label: 'West Bengal' },
  ];

  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'United States' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'France', label: 'France' },
    { value: 'Other', label: 'Other' },
  ];

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        toast.error('फोटो का आकार 2MB से कम होना चाहिए');
        return;
      }
      setUploadedPhoto(file);
      toast.success('फोटो सफलतापूर्वक अपलोड हुई!');
    }
  };

  const deleteUploadedPhoto = () => {
    setUploadedPhoto(null);
    document.getElementById('photoUpload').value = '';
    toast.success('फोटो सफलतापूर्वक हटा दी गई!');
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log('Membership Form Data:', data);
      console.log('Uploaded Photo:', uploadedPhoto);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('सदस्यता पंजीकरण सफलतापूर्वक जमा हुआ! आपको जल्द ही पुष्टिकरण ईमेल प्राप्त होगा।');
    } catch (error) {
      toast.error('सदस्यता पंजीकरण जमा करने में विफल। कृपया पुनः प्रयास करें।');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 mt-10">
      <Toaster position="top-right" />
      
      {/* Header Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-400/20 to-amber-400/20"></div>
        <div className="relative container mx-auto px-4 text-center mt-36">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-12 h-12 text-orange-500" />
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  सेवा शिक्षा सदस्यता
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              सेवा शिक्षा सदस्यता एक ऐसा सामाजिक सदस्यता कार्यक्रम है जिसमें जुड़कर न केवल समाज सेवा का हिस्सा बनते हैं, बल्कि शिक्षा, कौशल विकास और रोजगार के माध्यम से आत्मनिर्भर भी बनते हैं।
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 pb-16 max-w-4xl mt-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">SEVA SHIKSHA TRUST MEMBERSHIP FORM</h2>
            <p className="opacity-90">Join the Seva Shiksha Community</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
            {/* Personal Information */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-green-600" />
                1) Personal Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('fullName', { required: 'Please enter your full name' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father/Husband Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('fatherHusbandName', { required: 'Please enter father/husband name' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter father/husband name"
                  />
                  {errors.fatherHusbandName && <p className="text-red-500 text-sm mt-1">{errors.fatherHusbandName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register('dateOfBirth', { required: 'Please select date of birth' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    {...register('age', {
                      required: 'Please enter your age',
                      min: { value: 18, message: 'Age must be at least 18' },
                      max: { value: 80, message: 'Age must be less than 80' }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your age"
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alternate Mobile Number
                  </label>
                  <input
                    {...register('alternateMobile', {
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Please enter a valid mobile number'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter alternate mobile number"
                  />
                  {errors.alternateMobile && <p className="text-red-500 text-sm mt-1">{errors.alternateMobile.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Complete Address
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    District <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('district', { required: 'Please enter district' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter district"
                  />
                  {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="state"
                    control={control}
                    rules={{ required: 'Please select state' }}
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PIN <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('pinCode', {
                      required: 'Please enter PIN code',
                      pattern: {
                        value: /^\d{6}$/,
                        message: 'Please enter 6-digit PIN code'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter PIN code"
                    maxLength={6}
                  />
                  {errors.pinCode && <p className="text-red-500 text-sm mt-1">{errors.pinCode.message}</p>}
                </div>
              </div>
            </div>

            {/* Education Details */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-orange-600" />
                2) Education Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="highestQualification"
                    control={control}
                    rules={{ required: 'Please select highest qualification' }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { value: '10th', label: '10th' },
                          { value: '12th', label: '12th' },
                          { value: 'graduation', label: 'Graduation' },
                          { value: 'postGraduation', label: 'Post Graduation' },
                          { value: 'other', label: 'Other' }
                        ]}
                        placeholder="Select highest qualification"
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    )}
                  />
                  {errors.highestQualification && <p className="text-red-500 text-sm mt-1">{errors.highestQualification.message}</p>}
                </div>
              </div>
            </div>

            {/* Work Status */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" />
                3) Work Status
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Work
                  </label>
                  <input
                    {...register('currentWork')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter your current work/occupation"
                  />
                </div>
              </div>
            </div>

            {/* ID Proof */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                4) ID Proof
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aadhar Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('aadhaar', {
                      required: 'Aadhar number is required',
                      pattern: {
                        value: /^\d{12}$/,
                        message: 'Please enter 12-digit Aadhar number'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter 12-digit Aadhar number"
                    maxLength={12}
                  />
                  {errors.aadhaar && <p className="text-red-500 text-sm mt-1">{errors.aadhaar.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload photo(s)
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      id="photoUpload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="photoUpload"
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer transition-colors flex items-center gap-2"
                    >
                      <Camera className="w-4 h-4" />
                      Choose File
                    </label>
                    {uploadedPhoto && (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{uploadedPhoto.name}</span>
                        <button
                          type="button"
                          onClick={deleteUploadedPhoto}
                          className="text-red-600 hover:text-red-800 text-sm underline"
                        >
                          Delete uploaded file
                        </button>
                      </div>
                    )}
                    {!uploadedPhoto && (
                      <span className="text-sm text-gray-500">No file chosen</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Upload clear passport size photo (Max size: 2MB, Format: JPG, PNG)
                  </p>
                </div>
              </div>
            </div>

            {/* Membership Type */}
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-600" />
                5) Membership Type
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Membership Type <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="active-member"
                        {...register('membershipType', { required: 'Please select membership type' })}
                        value="active-member"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <label htmlFor="active-member" className="ml-3 text-sm text-gray-700">
                        Active Member
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="general-member"
                        {...register('membershipType', { required: 'Please select membership type' })}
                        value="general-member"
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <label htmlFor="general-member" className="ml-3 text-sm text-gray-700">
                        General Member/Coordinator
                      </label>
                    </div>
                  </div>
                  {errors.membershipType && <p className="text-red-500 text-sm mt-1">{errors.membershipType.message}</p>}
                </div>
              </div>
            </div>

            {/* Declaration */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Declaration</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  I declare that the information provided is completely true. I will abide by the rules and policies of the Seva Shiksha Trust and will actively participate in social service.
                </p>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="declaration-checkbox"
                    {...register('acceptDeclaration', { required: 'Please accept the declaration' })}
                    className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                  />
                  <label htmlFor="declaration-checkbox" className="text-sm text-gray-700">
                    <span className="text-red-500">*</span> I confirm that all information provided is true and accurate.
                  </label>
                </div>
                {errors.acceptDeclaration && <p className="text-red-500 text-sm mt-1">{errors.acceptDeclaration.message}</p>}
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Terms & Conditions</h3>
              <div className="space-y-3 text-sm text-gray-700 mb-4">
                <p>1. The information provided must be true and correct.</p>
                <p>2. Membership fees are non-refundable.</p>
                <p>3. Members will act in accordance with the rules of the Seva Shiksha Trust.</p>
                <p>4. Membership may be cancelled for any inappropriate behavior.</p>
                <p>5. Training and work opportunities will be available in accordance with the organization's policies.</p>
                <p>6. Income is opportunity-based, not guaranteed.</p>
                <p>7. The organization may change/terminate membership if necessary.</p>
                <p>8. Members will contribute to social and educational development work.</p>
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  {...register('acceptTerms', { required: 'Please accept the terms and conditions' })}
                  className="h-5 w-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="terms-checkbox" className="text-sm text-gray-700">
                  <span className="text-red-500">*</span> I accept the terms and conditions.
                </label>
              </div>
              {errors.acceptTerms && <p className="text-red-500 text-sm mt-1">{errors.acceptTerms.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5" />
                    Apply for Membership
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800">सदस्यता के लाभ</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Training & Skill Development – फ़ोन/मार्केटिंग/डिजिटल वर्क का प्रशिक्षण</li>
              <li>• Employment Opportunities – घर या फील्ड में काम के अवसर</li>
              <li>• Social Service Participation – शिक्षा व महिला सशक्तिकरण के अभियानों से जुड़ने का अवसर</li>
              <li>• Growth Platform – king member बनने का अवसर</li>
              <li>• Certification – ट्रस्ट द्वारा प्रमाणपत्र</li>
              <li>• Networking – देशभर के सदस्यों से जुड़ने का अवसर</li>
              <li>• Low-Cost Participation – कम शुल्क में बड़ा अवसर</li>
              <li>• Respect & Identity – समाज में पहचान और सम्मान</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">हमारा लक्ष्य</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              हमारा लक्ष्य समाज सेवा, शिक्षा, कौशल विकास और रोजगार के माध्यम से लोगों को आत्मनिर्भर बनाना है।
              इस महान कार्य में हमारे साथ जुड़ें और सामाजिक परिवर्तन का हिस्सा बनें।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipRegistration;