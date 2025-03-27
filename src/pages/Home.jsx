import React from 'react';
import bg from '../image/bg.png'; 
import NavBar from '../component/NavBar';
import Header from '../component/Header';
import Content from '../component/Content';
import Button from '../component/Button';

function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <NavBar />
      <Header />
      <Content />
      <div className="flex justify-evenly sm:justify-evenly mt-10 space-x-4 flex-col sm:flex-row gap-4 sm:gap-0">
        <Button
          content="Project Management Tool Design"
          translateClass="translate-y-14"
          boxShadow="inset 0 0 50px 5px rgb(138, 43, 226), inset 0 0 105px 0 rgb(255, 20, 147)" 
        />
        <Button
          content="The Leading Customer Data Platform"
          translateClass="translate-y-4"
          boxShadow="inset 0 0 20px 5px rgb(20, 130, 75), inset 0 0 105px 0 rgb(255, 20, 147)" 
        />
        <Button
          content="Food Delivery Mobile App"
          translateClass="translate-y-14"
          boxShadow="inset 0 0 50px 5px rgb(204, 43, 0), inset 0 0 105px 0 rgb(255, 20, 0)" 
        />
        <Button
          content="Business Management dashboard"
          translateClass="translate-y-4"
          boxShadow="inset 0 0 50px 5px rgb(204, 153, 0), inset 0 0 105px 0 rgb(255, 140, 0)" 
        />
      </div>
    </div>
  );
}

export default Home;
