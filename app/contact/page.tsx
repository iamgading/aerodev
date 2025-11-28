'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, MessageCircle, AlertCircle, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'
import { Spinner } from '@/components/ui/spinner'
import { validateEmail } from '@/lib/utils'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const MAX_MESSAGE_LENGTH = 500

  // Real-time validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!validateEmail(value)) return 'Please enter a valid email'
        return ''
      case 'projectType':
        if (!value) return 'Please select a project type'
        return ''
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        if (value.length > MAX_MESSAGE_LENGTH) return `Message must be less than ${MAX_MESSAGE_LENGTH} characters`
        return ''
      default:
        return ''
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) newErrors[key] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    try {
      // Format message for WhatsApp
      const whatsappMessage = `Hi! I'm interested in working with you.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Project Type:* ${formData.projectType}

*Message:*
${formData.message}`

      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 500))

      // Encode and open WhatsApp
      const whatsappNumber = '62896540617718'
      const encodedMessage = encodeURIComponent(whatsappMessage)
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')

      toast.success('Redirecting to WhatsApp...', {
        description: 'Your message has been prepared successfully!'
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: ''
      })
      setTouched({})
      setErrors({})
    } catch (error) {
      toast.error('Something went wrong', {
        description: 'Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, formData[name as keyof typeof formData])
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <section className="py-24 md:py-32 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            LET'S <span className="text-gray-500">WORK TOGETHER</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-black p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    className={`w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-900 border ${
                      errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-800'
                    } rounded-xl focus:outline-none focus:ring-2 ${
                      errors.name ? 'focus:ring-red-500' : 'focus:ring-gray-900 dark:focus:ring-white'
                    } focus:border-transparent text-gray-900 dark:text-white transition-all`}
                    placeholder="John Doe"
                    aria-required="true"
                    aria-label="Your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    className={`w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-900 border ${
                      errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-800'
                    } rounded-xl focus:outline-none focus:ring-2 ${
                      errors.email ? 'focus:ring-red-500' : 'focus:ring-gray-900 dark:focus:ring-white'
                    } focus:border-transparent text-gray-900 dark:text-white transition-all`}
                    placeholder="john@example.com"
                    aria-required="true"
                    aria-label="Your email address"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Project Type *
                </label>
                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    onBlur={() => handleBlur('projectType')}
                    className={`w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-900 border ${
                      errors.projectType ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-800'
                    } rounded-xl focus:outline-none focus:ring-2 ${
                      errors.projectType ? 'focus:ring-red-500' : 'focus:ring-gray-900 dark:focus:ring-white'
                    } focus:border-transparent text-gray-900 dark:text-white transition-all`}
                    aria-required="true"
                    aria-label="Select project type"
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                  >
                    <option value="">Select a project type</option>
                    <option value="Web Application">Web Application</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {errors.projectType && (
                  <p id="projectType-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.projectType}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white">
                    Project Details *
                  </label>
                  <span className={`text-xs ${
                    formData.message.length > MAX_MESSAGE_LENGTH 
                      ? 'text-red-600 dark:text-red-400 font-semibold' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {formData.message.length}/{MAX_MESSAGE_LENGTH}
                  </span>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    rows={6}
                    className={`w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-900 border ${
                      errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-800'
                    } rounded-xl focus:outline-none focus:ring-2 ${
                      errors.message ? 'focus:ring-red-500' : 'focus:ring-gray-900 dark:focus:ring-white'
                    } focus:border-transparent text-gray-900 dark:text-white resize-none transition-all`}
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    aria-required="true"
                    aria-label="Project details and requirements"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                </div>
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button - Match Hero Style */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-2.5 text-sm font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                    : 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Spinner size="sm" />
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                This will open WhatsApp with your message pre-filled. I'll respond within 24 hours.
              </p>
            </form>

            {/* Alternative Contact */}
            <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-center mb-8">Or reach me directly</h3>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  href="mailto:hello@aerodev.id"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  hello@aerodev.id
                </Link>
                <Link
                  href="https://wa.me/62896540617718"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-2xl hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
