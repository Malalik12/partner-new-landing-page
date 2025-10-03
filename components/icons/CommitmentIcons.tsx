import React from 'react';

// NOTE: This icon is no longer used in the Commitment component, it was replaced with an image tag.
export const CommitmentIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L12.75 8.25M12.75 8.25L11.25 9.75M12.75 8.25V18.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 15.75L9.75 14.25M9.75 14.25L8.25 15.75M9.75 14.25V5.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h-.75a3 3 0 00-3 3v.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.75h.75a3 3 0 013 3v.75" />
    <path strokeLinecap="round" strokeLinejoin="round"d="M15.75 14.25h.75a3 3 0 003-3v-.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 14.25H7.5a3 3 0 01-3-3v-.75" />
  </svg>
);

export const CheckmarkIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#F28B2E" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);