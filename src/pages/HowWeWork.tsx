import React from 'react';
import { FaClipboardCheck, FaUserCheck, FaPlaneDeparture } from 'react-icons/fa';

const HowWeWork = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-[80%] mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Bagaimana Kami Bekerja</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          <div className="flex flex-col items-center">
            <FaClipboardCheck className="text-6xl text-green-500 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">Perencanaan</h3>
            <p className="text-gray-600">Melakukan pengecekan dokumen</p>
          </div>

          <div className="flex flex-col items-center">
            <FaUserCheck className="text-6xl text-yellow-500 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">Wawancara</h3>
            <p className="text-gray-600">Melakukan wawancara dan menjelaskan jobdesk sesuai dengan pengalaman</p>
          </div>

          <div className="flex flex-col items-center">
            <FaPlaneDeparture className="text-6xl text-blue-500 mb-2" />
            <h3 className="text-xl font-semibold text-gray-800">Pemberangkatan</h3>
            <p className="text-gray-600">Memberangkatkan kru yang sudah sesuai dengan ketentuan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
