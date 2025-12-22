import React, { useState, useEffect } from "react";
import { MlmForm } from "../components/MlmComponents/Form/MlmForm";
import { GemForm } from "../components/MlmComponents";
import { CldFormComponent } from "../components/MlmComponents";

export default function Home() {

  return (
    <>
      <div>
        <p>Welcome to the Miller Land Management React Application!</p>
        <p>
          This application is designed to help you manage your land assets
          efficiently and effectively.
        </p>
        <p>
          Explore the various features and tools available to streamline your
          land management tasks.
        </p>
        <MlmForm />

        <br />
        <h2>Gemini Themed Form Example </h2>
        <GemForm 
          initialValues={{ name: '', email: '' }}
          fields={[
            { name: 'name', label: 'Name', placeholder: 'Enter your name' },
            { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email' }
          ]}
          onSubmit={(values) => console.log(values)}
        />
        <br />
        <h2>Claude Themed Form Example </h2>
        <CldFormComponent />
        
      </div>
  </>
  );
}
