import React from 'react'

function LabeledInput() {
  return (
    <>
    <label htmlFor="email" className="block text-sm mb-2">
                Email address
              </label>
              <input
                type="email"
                className="py-3 pl-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
                placeholder="hello@example.com"
                name="email"
                id="email"
              />
              </>
  )
}

export default LabeledInput