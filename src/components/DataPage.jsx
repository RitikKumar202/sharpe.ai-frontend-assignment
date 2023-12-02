import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie } from "recharts";

const DataPage = () => {
  const [posts, setPosts] = useState([]); // State variable to store the fetched posts
  const [filteredPosts, setFilteredPosts] = useState([]); // State variable to store the filtered posts (posts with user ID 1)

  // UseEffect hook to fetch data from the JSONPlaceholder API
  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // UseEffect hook to filter posts based on user ID
  useEffect(() => {
    // Filter posts with user ID 1
    setFilteredPosts(posts.filter((post) => post.userId === 1));
  }, [posts]);

  // Calculating data for the pie chart
  const totalPosts = posts.length;
  const userId1Posts = filteredPosts.length;
  const pieChartData = [
    {
      name: "User ID 1 Posts",
      value: userId1Posts,
      fill: "#3e7cb9",
    },
    {
      name: "Other Users Posts",
      value: totalPosts - userId1Posts,
      fill: "#c02942",
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-28 mb-28">
      <h1 className="text-3xl font-semibold mb-4">
        All Posts written by User ID-1
      </h1>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Body</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td className="border border-gray-300 p-2">{post.id}</td>
              <td className="border border-gray-300 p-2">{post.title}</td>
              <td className="border border-gray-300 p-2">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pie Chart */}
      <div className="mt-8 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-1">
          Pie Chart representation of posts written by User ID-1 out of total
          posts.
        </h2>
        <PieChart width={320} height={320}>
          <Pie
            data={pieChartData}
            label={{
              show: true,
            }}
          />
        </PieChart>
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-row items-center">
            <div className="px-5 py-1 bg-[#3e7cb9] mr-1"></div>
            <span>User ID-1 Posts</span>
          </div>
          <div className="flex flex-row items-center ml-4">
            <div className="px-5 py-1 bg-[#c02942] mr-1"></div>
            <span>Other Users Posts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
