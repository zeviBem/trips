import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGetTripByCategory from "../Jotai/globalGetByCategory";

const GetByCategory = () => {
    const params = useParams<{ categoryName: string }>();

    const { dataByCategory, getTripByCategoryGlobal } = useGetTripByCategory()

      useEffect(() => {
        if (params.categoryName) {
          getTripByCategoryGlobal(params.categoryName)
          console.log(params.categoryName)
        }
      },[])

    return (
        <div>
            {dataByCategory.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {dataByCategory.map((trip) => (
                    <Link to={`/getById/${trip.id}`} key={trip.id}>
                    <div
                        className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden"
                        key={trip.id}
                    >
                        <img
                        className="h-56 lg:h-60 w-full object-cover"
                        src={trip.imageurl}
                        alt={trip.imagealt}
                        />
                        <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white">
                        {trip.title}
                        </p>
                    </div>
                    </Link>
                ))}
                </div>
            )}
        </div>
    )
    
}

export default GetByCategory;