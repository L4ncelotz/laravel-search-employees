import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ employees, query }) {
    const [search, setSearch] = useState(query || '');

        // func search bt
    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/employee', { search });
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">

                        {/* main page */}
            <h1 className="text-2xl font-bold mb-6">Employee List</h1>

            <form onSubmit={handleSearch} className="mb-6">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search employees..."
                    className="px-3 py-2 border rounded mr-2"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </form>
            {/* not found emp */}
            {employees.data.length === 0 ? (
                <p className="text-gray-500">ไม่พบข้อมูลที่ค้นหา</p>
            ) : (
                <table className="w-full border-collapse">
                    <thead>
                            {/* top table */}
                        <tr className="bg-gray-100">
                            <th className="p-3 text-left border">ID</th>
                            <th className="p-3 text-left border">Name</th>
                            <th className="p-3 text-left border">Last Name</th>
                            <th className="p-3 text-left border">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.data.map((employee, index) => (
                            <tr key={index} className="border hover:bg-gray-50">
                                <td className="p-3 border">{employee.emp_no}</td>
                                <td className="p-3 border">{employee.first_name}</td>
                                <td className="p-3 border">{employee.last_name}</td>
                                <td className="p-3 border">{employee.birth_date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <div className="mt-4 flex gap-2">
                {employees.prev_page_url && (
                    <a
                        href={employees.prev_page_url}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Previous
                    </a>
                )}
                {employees.next_page_url && (
                    <a
                        href={employees.next_page_url}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Next
                    </a>
                )}
            </div>
        </div>
    );
}