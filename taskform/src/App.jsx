import React from "react";
import { Form } from "./Components";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Form</h2>
        </div>
        <div className="bg-white shadow rounded-lg">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
