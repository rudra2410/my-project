import React from "react";

const DynamicForm = () => {
  return (
    <div>
      <body className="flex items-center justify-center min-h-screen image">
        <div className="bg-gray-50 p-8 rounded-md shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label
                for="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                for="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                for="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="mb-4">
              <label
                for="confirm-password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Confirm-Password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-2"
                />
                <label for="remember" className="text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </body>
    </div>
  );
};

export default DynamicForm;
