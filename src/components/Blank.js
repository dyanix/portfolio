import React from 'react';

const Blank = () => {
  return (
    <div className="container">
      <h1>Hi <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" alt="Wave hand gesture"  height="30px" /></h1>

      <img src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif" alt="Wave hand gesture" height="250px" style={{ borderRadius: "50%" }} />

      <p>This application is only optimized for desktop view. Please view on a larger screen for optimal experience.</p>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1rem;
        }

        h1 {
          font-size: 2rem;
          margin-top: 2rem;
        }

        img {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }

        p {
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .container {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            text-align: left;
            padding: 2rem;
          }

          h1 {
            font-size: 3rem;
            margin-top: 0;
          }

          img {
            margin-top: 0;
            margin-bottom: 0;
            margin-right: 2rem;
          }

          p {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Blank;
