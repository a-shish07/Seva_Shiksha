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
        toast.error('Photo size should be less than 2MB');
        return;
      }
      setUploadedPhoto(file);
      toast.success('Photo uploaded successfully!');
    }
  };

  const deleteUploadedPhoto = () => {
    setUploadedPhoto(null);
    document.getElementById('photoUpload').value = '';
    toast.success('Photo removed successfully!');
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log('Membership Form Data:', data);
      console.log('Uploaded Photo:', uploadedPhoto);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Membership registration submitted successfully! You will receive a confirmation email shortly.');
    } catch (error) {
      toast.error('Failed to submit membership registration. Please try again.');
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
                  Membership Registration
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join our community of educators and professionals dedicated to quality education for all
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 pb-16 max-w-4xl mt-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Membership Application Form</h2>
            <p className="opacity-90">Become a part of the Seva Shiksha community</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-8">
            {/* Personal Information */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-green-600" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Aadhaar No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('aadhaar', {
                      required: 'Aadhaar number is required',
                      pattern: {
                        value: /^\d{12}$/,
                        message: 'Please enter a valid 12-digit Aadhaar number'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter 12-digit Aadhaar number"
                    maxLength={12}
                  />
                  {errors.aadhaar && <p className="text-red-500 text-sm mt-1">{errors.aadhaar.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Please enter a valid mobile number'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Address Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    {...register('streetAddress')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter street address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apartment/Suite
                  </label>
                  <input
                    {...register('apartment')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Apartment, suite, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    {...register('city')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP / Postal Code
                  </label>
                  <input
                    {...register('zipCode', {
                      pattern: {
                        value: /^\d{6}$/,
                        message: 'Please enter a valid 6-digit PIN code'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter PIN code"
                    maxLength={6}
                  />
                  {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <Controller
                    name="country"
                    control={control}
                    defaultValue={countryOptions[0]}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={countryOptions}
                        placeholder="Select Country"
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Photo Upload */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-purple-600" />
                Upload Your Photo
              </h3>
              
              <div className="space-y-4">
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
                <p className="text-xs text-gray-500">
                  Upload a clear passport-size photograph (Max size: 2MB, Formats: JPG, PNG)
                </p>
              </div>
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
                    Send Message
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
              <h3 className="text-xl font-semibold text-gray-800">Membership Benefits</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Access to exclusive educational resources</li>
              <li>• Priority support for course enrollment</li>
              <li>• Networking opportunities with educators</li>
              <li>• Regular updates on new programs</li>
              <li>• Special discounts on courses and events</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make free quality higher education accessible to everyone. 
              Join us in this noble cause and be part of the educational revolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipRegistration;