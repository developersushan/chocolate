import { Link } from "react-router-dom";
import { IoAddOutline,IoPencil,IoCloseSharp } from "react-icons/io5";

const Home = () => {
    return (
        <div className="mt-20">
            <div className="bg-gray-100 p-10">
                <h1 className="mb-5 bg-orange-500 p-5 text-2xl font-semibold text-white rounded">Chocolate Management Systems</h1>
                <div className="text-left">
                    <div className="ms-6 mt-5 border w-48 py-3 px-4 shadow-lg hover:shadow-xl">
                        <Link to='/addChocolate' className="flex items-center"><span><IoAddOutline /></span> New Chocolate</Link>
                    </div>
                </div>
                <div className="category mt-10">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-orange-300 p-3 rounded text-white text-lg">
                                <tr>

                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Country/Factory</th>
                                    <th>Category</th>
                                    <th> Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask  w-12 h-12">
                                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
    
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon

                                    </td>
                                    <td>Purple</td>
                                    <td>Purple</td>
                               
                                    <th>
                                        <button className="btn btn-ghost btn-md"><span className="text-xl"><IoPencil/></span></button>
                                        <button className="btn btn-ghost btn-md"><span className="text-xl"><IoCloseSharp/></span></button>
                                    </th>
                                </tr>
                               

                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;