'use client'

import { useActionState, useEffect, useRef } from 'react'
import { submitLeadForm, type LeadFormState } from '@/app/actions'

const initialState: LeadFormState = {
  success: false,
  message: '',
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      id="lead-form-submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 hover:bg-red-700 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/25 transition disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
    >
      {pending ? 'Submitting Inquiry…' : 'Submit Project Brief & Request Estimate →'}
    </button>
  )
}

export function LeadForm() {
  const [state, formAction, pending] = useActionState(submitLeadForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl backdrop-blur-sm sm:p-9">
      <form ref={formRef} id="lead-form" action={formAction} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="lead-name"
              className="block text-xs font-semibold uppercase tracking-wider text-black"
            >
              Full Name <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Alex Wright"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-black placeholder:text-slate-400 transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="lead-company"
              className="block text-xs font-semibold uppercase tracking-wider text-black"
            >
              Company / Brand <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-company"
              type="text"
              name="company"
              required
              autoComplete="organization"
              placeholder="Acme Studio"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-black placeholder:text-slate-400 transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="lead-email"
              className="block text-xs font-semibold uppercase tracking-wider text-black"
            >
              Work Email <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="alex@acme.com"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-black placeholder:text-slate-400 transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="lead-phone"
              className="block text-xs font-semibold uppercase tracking-wider text-black"
            >
              Phone Number (India) <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <div className="relative mt-2 flex rounded-xl border border-slate-300 bg-slate-50 transition focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600">
              <div className="flex items-center gap-1.5 border-r border-slate-300 bg-slate-100 px-3.5 py-3 text-xs font-semibold text-black select-none rounded-l-xl">
                <span className="text-sm">🇮🇳</span>
                <span className="text-xs">+91</span>
              </div>
              <input
                id="lead-phone"
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                placeholder="98765 43210"
                className="w-full bg-transparent px-4 py-3 text-sm text-black placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="lead-message"
            className="block text-xs font-semibold uppercase tracking-wider text-black"
          >
            Project Scope &amp; Goals <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <textarea
            id="lead-message"
            name="message"
            required
            minLength={15}
            rows={4}
            placeholder="Tell us about your brand goals, project scope, target launch timeline, and key design requirements…"
            className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-black placeholder:text-slate-400 transition focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
          />
        </div>

        <div className="pt-2">
          <SubmitButton pending={pending} />
        </div>

        {state.message && (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-xl border p-4 text-xs font-medium ${
              state.success
                ? 'border-emerald-600/40 bg-emerald-50 text-emerald-800'
                : 'border-rose-600/40 bg-rose-50 text-rose-800'
            }`}
          >
            {state.message}
          </div>
        )}

        <div className="flex items-center justify-between pt-1 font-['Space_Grotesk',sans-serif] text-[11px] text-slate-500">
          <span>Direct Studio Intake</span>
          <span>Response Guaranteed &lt; 24 Hours</span>
        </div>
      </form>
    </div>
  )
}

export default LeadForm
