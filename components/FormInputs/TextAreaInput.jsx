import React from 'react'

const TextAreaInput = ({}) => {
    return (
        <div className="sm:col-span-2">
            <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Category Description
            </label>
            <div className="mt-2">
                <textarea
                    {...register("description", { required: true })}
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                />
                {errors.title && (
                    <span className="text-sm text-red-600 ">
                        Category description is required
                    </span>
                )}
            </div>
        </div>
    )
}

export default TextAreaInput