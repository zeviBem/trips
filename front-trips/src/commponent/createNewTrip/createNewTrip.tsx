import { trpc } from "../../trpcClaient/trpcClaient";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";



const AddNewTrip: React.FC = () => {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [newData, setNewData] = useState({
        title: '',
        city: '',
        land: '',
        street: '',
        coordinatesx: '',
        coordinatesy: '',
        imageurl: '',
        imagealt: '',
        description: '',
        price: '',
        activitytime: '',
        category: ""
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Handle image upload called"); 
        const files = event.target.files;
        if (files && files.length > 0) {
          const imageUrl = URL.createObjectURL(files[0]);
          setNewData((prevData) => ({
            ...prevData,
            imageurl: imageUrl,
          }));
        }
      };
      
      

    const handleAddTrips = async (e: FormEvent<HTMLFormElement>) => {
        try {
            setIsSubmitting(true)
            const res = await trpc.createNewTrip.mutate(newData);
            setTimeout(() => {
              navigate("/getAllTrips");
            }, 3000);
            return res;
        } catch (err) {
            console.error('Error adding car:', err);
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
<div
className="min-h-screen flex items-center justify-center"
style={{ backgroundImage: 'url("https://img.mako.co.il/2019/09/19/49Places_To_See_Israel_Part2_7_i.jpg")', backgroundSize: 'cover' }}
>
    <section className="max-w-4xl p-6 rounded-md shadow-md bg-emerald-800 bg-opacity-60">
        <h1 className="text-xl font-bold text-black capitalize dark:text-white">Add New Trip</h1>
        <form onSubmit={handleAddTrips}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="title">Title</label>
                    <input name="title"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.title}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="city">city</label>
                    <input name="city"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.city}
                        onChange={handleInputChange}
                        />
                </div>

                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="land">Landa</label>
                    <input name="land"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.land}
                        onChange={handleInputChange}
                        />
                </div>

                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="street">Street</label>
                    <input name="street"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.street}
                        onChange={handleInputChange}
                        />
                </div>

                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="coordinatesx">coordinates X</label>
                    <input name="coordinatesx"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.coordinatesx}
                        onChange={handleInputChange}
                        />
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="coordinatesy">coordinates Y</label>
                    <input name="coordinatesy"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.coordinatesy}
                        onChange={handleInputChange}
                        />
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="description">Description</label>
                    <input name="description"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.description}
                        onChange={handleInputChange}
                        />
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="price">Price</label>
                    <input name="price"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.price}
                        onChange={handleInputChange}
                        />
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="activitytime">Activity Time</label>
                    <input name="activitytime"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.activitytime}
                        onChange={handleInputChange}
                        />
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="category">Category</label>
                    <input name="category"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.category}
                        onChange={handleInputChange}
                        />
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" htmlFor="imagealt">imagealt</label>
                    <input name="imagealt"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        value={newData.imagealt}
                        onChange={handleInputChange}
                        />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">
                    Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                    <label htmlFor="imageurl" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span className="">Upload a file</span>
                        <input id="imageurl" name="imageurl" type="file" className="sr-only"  onChange={handleImageUpload} />
                    </label>

                        <p className="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p className="text-xs text-white">
                        PNG, JPG, GIF up to 10MB
                    </p>
                    </div>
                </div>
                {newData.imageurl && <img src={newData.imageurl} alt={newData.imagealt} className="mt-4 mx-auto" />}
                </div>
            </div>

            <div className="flex justify-end mt-6">
                        <button
                            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                            type="submit"
                            disabled={isSubmitting} // Disable the button when submitting
                        >
                            {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-red-400 border-double rounded-full animate-spin"></div>
                            ) : (
                                'Add Trip'
                            )}
                        </button>
                    </div>
        </form>
    </section>
</div>
    )
}

export default AddNewTrip

