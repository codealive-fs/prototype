"use client"
import axios from "axios";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState({
    name: '',
    address: '',
    email: '',
    company: '',
  });

  const [profilePicture, setProfilePicture] = useState(null)

  const [job, setJob] = useState({
    title: '',
    type: 'Permanent',
    education: 'Master',
    industry: 'Business',
    salary: '',
  });

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Redirect to login if not authenticated
    }
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });

  };

  const handleProfilePicChange = (e) => {
    const { files } = e.target;
    if (files?.[0]) {
      setProfilePicture(files[0]);
    }
    else {
      setProfilePicture(null);
    }
  };

  const handleJobChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const submitProfile = async (e) => {
    e.preventDefault();

    let profilePictureUrl;

    if(profilePicture){
    let headersListFile = {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }

    let formdataFile = new FormData();
    formdataFile.append("files", profilePicture);

    let bodyContentFile = formdataFile;

    let reqOptionsFile = {
      url: "http://localhost:1337/api/upload",
      method: "POST",
      headers: headersListFile,
      data: bodyContentFile,
      validateStatus: () => true,
    }

    let responseFile = await axios.request(reqOptionsFile);
    console.log(responseFile.data);

    if(responseFile.data?.[0]?.hash)
    profilePictureUrl = responseFile.data[0].hash + responseFile.data[0].ext
  }

    const formData = new FormData();
    for (const key in profile) {
      if (profile[key])
        formData.append(key, profile[key]);
    }

    if (profilePictureUrl) {
      console.log("adding profile to formdata")
      formData.append("profile", profilePictureUrl);
    }

    console.log(Object.fromEntries(formData))

    let headersList = {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify(Object.fromEntries(formData));

    const user = JSON.parse(localStorage.getItem('user'))

    let reqOptions = {
      url: `http://localhost:1337/api/users/${user.id}`,
      method: "PUT",
      headers: headersList,
      data: bodyContent,
    }

    let response = await axios.request(reqOptions);
    console.log(response.data);


    //   const res1 = await axios({
    //     method: 'PUT',
    //     url: "http://localhost:1337/api/users/1",
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem('token')}`,
    //     },
    //     data: formData,
    //   });
    //   console.log(res1.body);

  };

  //////////////////////////


  const submitJob = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:1337/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(job),
    });
    console.log(res);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/'); // Redirect to login page after logout
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <button onClick={handleLogout} className="bg-red-500 text-white p-2">Logout</button>
      </div>

      <div className="flex justify-between">
        {/* User Profile Form */}
        <form onSubmit={submitProfile} className="w-1/2 mr-4">
          <h2 className="text-2xl mb-4">Update Profile</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={profile.name}
            onChange={handleProfileChange}
            className="w-full p-2 mb-4 border"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={profile.address}
            onChange={handleProfileChange}
            className="w-full p-2 mb-4 border"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            onChange={handleProfileChange}
            className="w-full p-2 mb-4 border"
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={profile.company}
            onChange={handleProfileChange}
            className="w-full p-2 mb-4 border"
          />
          <input
            type="file"
            name="profilePicture"
            onChange={handleProfilePicChange}
            className="w-full p-2 mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white p-2">Update Profile</button>
        </form>

        {/* Job Entry Form */}
        <form onSubmit={submitJob} className="w-1/2">
          <h2 className="text-2xl mb-4">Post a Job</h2>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={job.title}
            onChange={handleJobChange}
            className="w-full p-2 mb-4 border"
          />
          <select
            name="type"
            value={job.type}
            onChange={handleJobChange}
            className="w-full p-2 mb-4 border"
          >
            <option value="Permanent">Permanent</option>
            <option value="Contract">Contract</option>
          </select>
          <select
            name="education"
            value={job.education}
            onChange={handleJobChange}
            className="w-full p-2 mb-4 border"
          >
            <option value="Master">Master</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Intermediate">Intermediate</option>
          </select>
          <select
            name="industry"
            value={job.industry}
            onChange={handleJobChange}
            className="w-full p-2 mb-4 border"
          >
            <option value="Business">Business</option>
            <option value="Banking">Banking</option>
            <option value="Education">Education</option>
            <option value="Telecommunication">Telecommunication</option>
            <option value="Others">Others</option>
          </select>
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={job.salary}
            onChange={handleJobChange}
            className="w-full p-2 mb-4 border"
          />
          <button type="submit" className="bg-green-500 text-white p-2">Submit Job</button>
        </form>
      </div>
    </div>
  );
}
