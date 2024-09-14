"use client"
import AddInventoryForm from '@/components/dashboard/AddInventoryForm'
import FormHeader from '@/components/dashboard/FormHeader'
import TransferInventoryForm from '@/components/dashboard/TransferInventoryForm'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

const NewAdjustment = () => {
  const [activeForm, setActiveForm] = useState("add")
  const tabs = [
    {
      title: 'Add Stocks',
      icon: Plus,
      form: 'add'
    },
    {
      title: 'Transfer Stocks',
      icon: Minus,
      form: 'transfer'
    },

  ]
  return (
    <div>
      <FormHeader title='Transfer the Stocks' href='/inventory/inventory' />

      <div className="border-b border-gray-200 w-full max-w-4xl px-4 py-2 my-4 bg-white mx-auto">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {
            tabs.map((tab, index) => {
              const Icon = tab.icon
              return (
                <li className="me-2" key={index}>
                  <button onClick={()=>setActiveForm(tab.form)} className={`${activeForm===tab.form ? 
                    "inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                    : 
                    "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    }`}>
                    <Icon className={`w-4 h-4 mr-2 ${activeForm===tab.form ? "text-blue-600 group-hover:text-blue-400": "text-gray-400 group-hover:text-gray-500"}`} />{tab.title}
                  </button>
                </li>
              )

            })
          }
        </ul>
      </div>
      {
        activeForm === 'add' ? <AddInventoryForm /> : <TransferInventoryForm />
      }

    </div>
  )
}

export default NewAdjustment