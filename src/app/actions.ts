'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export type LeadFormState = {
  success: boolean
  message: string
}

const initialState: LeadFormState = {
  success: false,
  message: '',
}

function readField(formData: FormData, field: string): string {
  const value = formData.get(field)
  return typeof value === 'string' ? value.trim() : ''
}

export async function submitLeadForm(
  _previousState: LeadFormState = initialState,
  formData: FormData,
): Promise<LeadFormState> {
  void _previousState

  const name = readField(formData, 'name')
  const company = readField(formData, 'company')
  const email = readField(formData, 'email').toLowerCase()
  const rawPhone = readField(formData, 'phone')
  const message = readField(formData, 'message')

  const phone = rawPhone.startsWith('+') ? rawPhone : `+91 ${rawPhone}`

  if (!name || !company || !email || !rawPhone || !message) {
    return { success: false, message: 'Please complete all required fields.' }
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { success: false, message: 'Please provide a valid work email address.' }
  }

  if (message.length < 15) {
    return {
      success: false,
      message: 'Please provide more details on your project (minimum 15 characters).',
    }
  }

  try {
    await db.lead.create({
      data: { name, company, email, phone, message },
    })

    revalidatePath('/')

    return {
      success: true,
      message:
        'Thank you. Your project inquiry has been received. We will respond within 24 hours.',
    }
  } catch {
    return {
      success: false,
      message:
        'Unable to submit at this time. Please try again or email us directly at hello@perfectwebcraft.com.',
    }
  }
}
