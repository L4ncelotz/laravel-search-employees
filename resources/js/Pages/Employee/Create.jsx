import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Create({ departments }) {
    const { data, setData, post, errors } = useForm({
        first_name: '',
        last_name: '',
        birth_date: '',
        hire_date: '',
        dept_no: '',
        gender: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/employee'); // ส่งข้อมูลไปยัง EmployeeController/store
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
            <div className="mb-4">
                <label className="block text-sm font-medium">First Name:</label>
                <input
                    type="text"
                    value={data.first_name}
                    onChange={(e) => setData('first_name', e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                />
                {errors.first_name && <span className="text-red-500 text-sm">{errors.first_name}</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Last Name:</label>
                <input
                    type="text"
                    value={data.last_name}
                    onChange={(e) => setData('last_name', e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                />
                {errors.last_name && <span className="text-red-500 text-sm">{errors.last_name}</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Birth Date:</label>
                <input
                    type="date"
                    value={data.birth_date}
                    onChange={(e) => setData('birth_date', e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                />
                {errors.birth_date && <span className="text-red-500 text-sm">{errors.birth_date}</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Hire Date:</label>
                <input
                    type="date"
                    value={data.hire_date}
                    onChange={(e) => setData('hire_date', e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                />
                {errors.hire_date && <span className="text-red-500 text-sm">{errors.hire_date}</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Department:</label>
                <select
                    value={data.dept_no}
                    onChange={(e) => setData('dept_no', e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                >
                    <option value="">Select a Department</option>
                    {departments.map((dept) => (
                        <option key={dept.dept_no} value={dept.dept_no}>
                            {dept.dept_name}
                        </option>
                    ))}
                </select>
                {errors.dept_no && <span className="text-red-500 text-sm">{errors.dept_no}</span>}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Gender:</label>
                <select
                    value={data.gender}
                    onChange={(e) => setData('gender', e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
}
