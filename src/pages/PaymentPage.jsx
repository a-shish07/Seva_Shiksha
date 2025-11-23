import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CreditCard, Upload, CheckCircle, ArrowLeft, QrCode } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'

const PaymentPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [paymentScreenshot, setPaymentScreenshot] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get form data and amount from location state
  const { formData, amount, formType } = location.state || {}

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast.error('File size should be less than 5MB')
        return
      }
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload an image file')
        return
      }
      setPaymentScreenshot(file)
      toast.success('Payment screenshot uploaded successfully!')
    }
  }

  const handleSubmitPayment = async () => {
    if (!paymentScreenshot) {
      toast.error('Please upload payment screenshot')
      return
    }

    setIsSubmitting(true)
    try {
      // Prepare form data for email
      const emailData = {
        formType: formType,
        amount: amount,
        formData: formData,
        paymentScreenshot: paymentScreenshot,
        submissionDate: new Date().toISOString(),
        userAgent: navigator.userAgent,
        timestamp: Date.now()
      }

      // Create FormData for file upload
      const formDataToSend = new FormData()
      formDataToSend.append('formType', formType)
      formDataToSend.append('amount', amount.toString())
      formDataToSend.append('formData', JSON.stringify(formData))
      formDataToSend.append('paymentScreenshot', paymentScreenshot)
      formDataToSend.append('submissionDate', new Date().toISOString())
      formDataToSend.append('userAgent', navigator.userAgent)
      formDataToSend.append('timestamp', Date.now().toString())

      // Send data to backend API for email processing
      const response = await fetch('/api/send-registration-email', {
        method: 'POST',
        body: formDataToSend,
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      const result = await response.json()
      console.log('Email sent successfully:', result)

      toast.success('Payment verification submitted successfully! We will review and confirm your registration within 24 hours.')
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (error) {
      console.error('Error submitting payment:', error)
      toast.error('Failed to submit payment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!formData || !amount) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Invalid Access</h2>
          <p className="text-gray-600 mb-6">Please complete the registration form first.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-16">
      <Toaster position="top-right" />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <CreditCard className="w-8 h-8" />
              <h1 className="text-4xl md:text-5xl font-bold">Complete Your Payment</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-primary-100 max-w-2xl mx-auto"
            >
              Scan the QR code below to make payment and upload the screenshot for verification
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Form
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* QR Code Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="text-center mb-6">
                <QrCode className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Scan QR Code</h2>
                <p className="text-gray-600">Use any UPI app to scan and pay</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <img
                  src="/QR code.jpg"
                  alt="Payment QR Code"
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-700">Amount to Pay:</span>
                  <span className="text-3xl font-bold text-primary-600">₹{amount}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="mb-2"><strong>Form Type:</strong> {formType}</p>
                  <p><strong>Student:</strong> {formData?.fullName || formData?.name}</p>
                </div>
              </div>
            </motion.div>

            {/* Payment Verification Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="text-center mb-6">
                <Upload className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Payment Screenshot</h2>
                <p className="text-gray-600">Upload a clear screenshot of your payment confirmation</p>
              </div>

              {/* File Upload Area */}
              <div className="mb-6">
                <label
                  htmlFor="payment-screenshot"
                  className="block w-full p-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary-400 transition-colors cursor-pointer bg-gray-50 hover:bg-primary-50"
                >
                  <div className="text-center">
                    {paymentScreenshot ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle className="w-12 h-12 text-green-600 mb-3" />
                        <p className="text-green-600 font-semibold">Screenshot uploaded!</p>
                        <p className="text-sm text-gray-500 mt-1">{paymentScreenshot.name}</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="w-12 h-12 text-gray-400 mb-3" />
                        <p className="text-gray-600 font-semibold">Click to upload screenshot</p>
                        <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                      </div>
                    )}
                  </div>
                  <input
                    id="payment-screenshot"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold mb-2 text-blue-800">Payment Instructions:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Open any UPI app (Google Pay, PhonePe, Paytm, etc.)</li>
                  <li>• Scan the QR code shown above</li>
                  <li>• Enter the exact amount: ₹{amount}</li>
                  <li>• Complete the payment and take a screenshot</li>
                  <li>• Upload the screenshot here for verification</li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmitPayment}
                disabled={!paymentScreenshot || isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Payment Verification'}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                We will verify your payment within 24 hours and confirm your registration
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage