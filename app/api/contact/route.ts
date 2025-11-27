import { NextRequest, NextResponse } from 'next/server'
import { validateEmail } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()
    
    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }
    
    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      )
    }
    
    // Here you would typically:
    // 1. Send email using a service like SendGrid, Resend, or AWS SES
    // 2. Save to database
    // 3. Send notification to yourself
    
    // Example with console log (replace with actual email service):
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })
    
    // Example email sending with Resend (uncomment and configure):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: siteConfig.email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })
    */
    
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
