import { Pencil, Trash2 } from "lucide-react"
import Link from "next/link"

const DataTable = ({ data=[], columns=[] }) => {
    return (
        <div>
            <div className="relative overflow-x-auto rounded-lg shadow-md">
                <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="bg-blue-300">
                            {
                                columns.map(item => {
                                    return (
                                        <th scope="col" className="px-6 py-3">
                                            {item}
                                        </th>
                                    )
                                })
                            }
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                    <tr key={index} className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">

                                        {
                                            columns.map((col, index) => {
                                                return (
                                                    <td key={index} className="px-6 py-4">
                                                        {item[col]}
                                                    </td>
                                                )
                                            })
                                        }
                                        <td className="flex items-center px-6 py-4 space-x-4">
                                            <Link href="#" className="flex items-center space-x-1 font-medium text-blue-600">
                                                <span>Edit</span><Pencil className="w-4 h-4" />
                                            </Link>
                                            <button className="flex items-center space-x-1 font-medium text-red-600">
                                                <span>Delete</span><Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataTable