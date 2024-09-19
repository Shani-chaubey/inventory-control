import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";

const DataTable = ({ data = [], columns = [], pathname = "" }) => {
    return (
        <div>
            <div className="relative overflow-x-auto rounded-lg shadow-md">
                {data.length > 0 ? (
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

                                            {columns.map((columnName, i) => (
                                                <td key={i} className="px-6 py-4">
                                                    {columnName.includes(".") ? (
                                                        // If the column name contains a dot, it's a nested object
                                                        // Access the nested key using reduce
                                                        columnName.split(".").reduce((obj, key) => obj[key], item)
                                                    ) : columnName === "createdAt" ||
                                                        columnName === "updatedAt" ? (
                                                        // Convert date columns to a more readable format
                                                        new Date(item[columnName]).toLocaleDateString()
                                                    ) : columnName === "imageUrl" ? (
                                                        // Special handling for imageUrl to render an image
                                                        <img
                                                            src={item[columnName]}
                                                            alt={item.title}
                                                            className="object-cover w-10 h-10 rounded-full"
                                                        />
                                                    ) : (
                                                        // Otherwise, display the value as is
                                                        item[columnName]
                                                    )}
                                                </td>
                                            ))}
                                            <td className="flex items-center px-6 py-4 space-x-4">
                                            {
                                                pathname.includes("adjustments") ? "" :
                                                <Link href={`/inventory/inventory/${pathname}/${item.id}`} className="flex items-center space-x-1 font-medium text-blue-600">
                                                    <span>Edit</span><Pencil className="w-4 h-4" />
                                                </Link>
                                            }
                                                <DeleteBtn pathname={pathname} id={item.id} />
                                            </td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                ) : (
                    <div className="flex items-center justify-center h-40">
                        <div className="text-2xl font-bold text-gray-500">No Data Found</div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default DataTable