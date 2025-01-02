import React, { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import { useForm } from 'react-hook-form';
import { useAddBookMutation } from '../../../redux/features/books/booksApi';
import Swal from 'sweetalert2';

const AddBook = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setimageFile] = useState(null);
    const [addBook, { isLoading, isError }] = useAddBookMutation();
    const [imageFileName, setimageFileName] = useState('');

    const onSubmit = async (data) => {
        const newBookData = {
            ...data,
            coverImage: imageFileName
        };
        try {
            await addBook(newBookData).unwrap();
            Swal.fire({
                title: "Book added",
                text: "Your book is uploaded successfully!",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#28a745",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, It's Okay!"
            });
            reset();
            setimageFileName('');
            setimageFile(null);
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Error",
                text: "Failed to add book. Please try again.",
                icon: "error"
            });
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setimageFile(file);
            setimageFileName(file.name);
        }
    };

    return (
        <div className="max-w-lg mx-auto md:p-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add New Book</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Title Field */}
                <InputField
                    label="Title"
                    name="title"
                    placeholder="Enter book title"
                    register={register}
                    errors={errors}
                />

                {/* Description Field */}
                <InputField
                    label="Description"
                    name="description"
                    placeholder="Enter book description"
                    type="textarea"
                    register={register}
                    errors={errors}
                />

                {/* Category Dropdown */}
                <SelectField
                    label="Category"
                    name="category"
                    options={[
                        { value: '', label: 'Choose A Category' },
                        { value: 'business', label: 'Business' },
                        { value: 'technology', label: 'Technology' },
                        { value: 'fiction', label: 'Fiction' },
                        { value: 'horror', label: 'Horror' },
                        { value: 'adventure', label: 'Adventure' }
                    ]}
                    register={register}
                    errors={errors}
                />

                {/* Trending Checkbox */}
                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        {...register('trending')}
                        className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
                    />
                    <label className="text-gray-700 font-semibold">Trending</label>
                </div>

                {/* Old Price */}
                <InputField
                    label="Old Price"
                    name="oldPrice"
                    type="number"
                    placeholder="Old Price"
                    register={register}
                    errors={errors}
                />

                {/* New Price */}
                <InputField
                    label="New Price"
                    name="newPrice"
                    type="number"
                    placeholder="New Price"
                    register={register}
                    errors={errors}
                />

                {/* Cover Image Upload */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-400"
                    />
                    {imageFileName && (
                        <p className="mt-2 text-sm text-gray-600">Selected: {imageFileName}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300"
                >
                    {isLoading ? 'Adding...' : 'Add Book'}
                </button>
            </form>
        </div>
    );
};

export default AddBook;
