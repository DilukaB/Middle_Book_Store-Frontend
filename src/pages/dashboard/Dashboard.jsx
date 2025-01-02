import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import getBaseUrl from '../../utils/baseURL';
import { MdIncompleteCircle } from 'react-icons/md';
import RevenueChart from './RevenueChart';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${getBaseUrl()}/api/admin`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        });

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/login'); // Redirect to login if session expired or token invalid
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-center h-16 w-16 bg-purple-800 rounded-full">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div className="mt-4">
            <span className="block text-2xl font-bold">{data?.totalBooks}</span>
            <span className="block text-gray-300">Products</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-center h-16 w-16 bg-green-800 rounded-full">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div className="mt-4">
            <span className="block text-2xl font-bold">${data?.totalSales}</span>
            <span className="block text-gray-300">Total Sales</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-center h-16 w-16 bg-red-800 rounded-full">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>
          </div>
          <div className="mt-4">
            <span className="inline-block text-2xl font-bold">{data?.trendingBooks}</span>
            <span className="inline-block text-xl text-gray-300 font-semibold">(13%)</span>
            <span className="block text-gray-300">Trending Books this Month</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="p-8 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-center h-16 w-16 bg-blue-800 rounded-full">
            <MdIncompleteCircle className="h-6 w-6 text-white" />
          </div>
          <div className="mt-4">
            <span className="block text-2xl font-bold">{data?.totalOrders}</span>
            <span className="block text-gray-300">Total Orders</span>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
        {/* Large Card */}
        <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all">
          <div className="bg-gray-100 p-6 font-semibold border-b border-gray-100 text-gray-900">
            The number of orders per month
          </div>
          <div className="p-4">
            <RevenueChart />
          </div>
        </div>

        {/* More Cards */}
        <div className="p-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-center h-16 w-16 bg-yellow-800 rounded-full">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>
          <div className="mt-4">
            <span className="block text-2xl font-bold">02</span>
            <span className="block text-gray-300">Orders Left</span>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-center h-16 w-16 bg-teal-800 rounded-full">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="mt-4">
            <span className="block text-2xl font-bold">139</span>
            <span className="block text-gray-300">Website Visits (Last Day)</span>
          </div>
        </div>

        {/* User List */}
        <div className="row-span-3 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all">
          <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100 text-gray-900">
            <span>Users by Average Order</span>
            <button
              type="button"
              className="flex items-center text-gray-500 hover:text-gray-600"
            >
              Descending
              <svg
                className="ml-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '24rem' }}>
            <ul className="p-6 space-y-6">
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/women/72.jpg"
                    alt="Annette Watson profile"
                  />
                </div>
                <span className="text-gray-600">Annette Watson</span>
                <span className="ml-auto font-semibold">9.3</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/8.jpg"
                    alt="Calvin Steward profile"
                  />
                </div>
                <span className="text-gray-600">Calvin Steward</span>
                <span className="ml-auto font-semibold">8.9</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Ralph Richards profile"
                  />
                </div>
                <span className="text-gray-600">Ralph Richards</span>
                <span className="ml-auto font-semibold">8.7</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/women/76.jpg"
                    alt="Eleanor Pena profile"
                  />
                </div>
                <span className="text-gray-600">Eleanor Pena</span>
                <span className="ml-auto font-semibold">8.3</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/41.jpg"
                    alt="Brandon Gould profile"
                  />
                </div>
                <span className="text-gray-600">Brandon Gould</span>
                <span className="ml-auto font-semibold">8.1</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
