import React from 'react';

const Blogs = () => {
  return (
    <div>
      Ans1 = ptimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.Keeping component state local where necessary
      Memoizing React components to prevent unnecessary re-renders
      Code-splitting in React using dynamic import()




      Ans2 =The Four Kinds of React State to Manage like 
      (a) Local (UI) state – Local state is data we manage in one or another component.
      Local state is most often managed in React using the useState hook
      (b)=Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.




      A common example of global state is authenticated user state.
      (c)=Server state – Data that comes from an external server that must be integrated with our UI state.
      Server state is a simple concept, but can be hard to manage alongside all of 
      (d)= URL state – Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.



      
      Ans3 =JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
      Sharing amid objects makes for easy inheritance of structure (data fields), behavior     (functions / methods), and state (data values).




      Ans4 = Mutating state directly can lead to odd bugs, and components that are hard to optimize.As you may already know, a common way to tune a React component for performance is to make itwhich causes it to only re-render when its props change (instead of every time its parent re-renders).So there you go: that’s why you shouldn’t mutate state, even if you immediately call setState. Optimized components might not re-render



      Ans5 = A common task will be searching the array to find if it contains a value (or values) that satisfies certain search criteria. Depending on the task at hand, you may be interested in a boolean value for confirmation. we can find   products.name.includes("thick scales").
      it is very easy to find the product name .

      
      
      Ans 6 =UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness.
    </div>
  );
};

export default Blogs;