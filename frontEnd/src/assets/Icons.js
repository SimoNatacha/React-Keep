/* eslint-disable no-unused-expressions */
import React from "react";
import {primaryColor }from '../components/ui/colors'

const Svg =({color=primaryColor ,className="",strokeWidth="0",stroke="currentColor", size=24,  viewBox="-7 -7 40 40",children,...props})=>

  (<svg className={className} fill={color} width={size} preserveAspectRatio="xMidYMid meet" x="0" y="0" height={size} viewBox ={viewBox} stroke={stroke} strokeWidth={strokeWidth} xmlns="http://www.w3.org/2000/svg"  {...props}>

  {children}

  </svg>)




export const Menu = ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0V0z" fill="none"/>
    <path xmlns="http://www.w3.org/2000/svg" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </Svg>
  );
};

export const Logout = ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </Svg>
  );
};

export const Paint = ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M7 16c.55 0 1 .45 1 1 0 1.1-.9 2-2 2-.17 0-.33-.02-.5-.05.31-.55.5-1.21.5-1.95 0-.55.45-1 1-1M18.67 3c-.26 0-.51.1-.71.29L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41l-1.34-1.34c-.2-.2-.45-.29-.7-.29zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z"/>    </Svg>
  );
};

export const Refresh= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    preserveAspectRatio="xMidYMin"
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0V0z" fill="none"/>
    <path xmlns="http://www.w3.org/2000/svg" d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
    </Svg>
  );
};
export const ListMode= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"/>
    </Svg>
  );
};
export const GridMode= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    
    >
    <g xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="24" width="24"/></g>
    <g xmlns="http://www.w3.org/2000/svg"><g><g><path d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z"/></g></g></g>
      </Svg>
  );
};
export const MultDots= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
      </Svg>
  );
};
export const Settings= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>    </Svg>
  );
};
export const Label= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
      <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z" />
    </Svg>
  );
};

export const DeleteI= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>    </Svg>
  );
};
export const Pencil= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>    </Svg>
  );
};
export const Notification= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>    </Svg>
  );
};
export const Bulb= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </Svg>
  );
};
export const Search= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M0 0h24v24H0V0z" fill="none"/>
    <path xmlns="http://www.w3.org/2000/svg" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </Svg>
  );
};
export const Archive= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"/>    </Svg>
  );
};
export const Unarchive= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
      <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z" />
    </Svg>
  );
};

export const ColorAv= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/>
    <circle xmlns="http://www.w3.org/2000/svg" cx="6.5" cy="11.5" r="1.5"/>
    <circle xmlns="http://www.w3.org/2000/svg" cx="9.5" cy="7.5" r="1.5"/>
    <circle xmlns="http://www.w3.org/2000/svg" cx="14.5" cy="7.5" r="1.5"/>
    <circle xmlns="http://www.w3.org/2000/svg" cx="17.5" cy="11.5" r="1.5"/>
    </Svg>
  );
};

export const ImageH= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/>    </Svg>
  );
};
export const PersonAdd= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
    width={size}
    height={size}
    viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"/>    </Svg>
  );
};
export const AddNotification= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zM12 6c2.76 0 5 2.24 5 5v7H7v-7c0-2.76 2.24-5 5-5zm0-4.5c-.83 0-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5zM13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z"/>
    </Svg>
  );
};
export const Pinned= ({color,className,stroke ,strokeWidth, size, viewBox}) => {
  return (
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z"/>    </Svg>
  );
};
export const Unpinned= ({color,className,stroke ,strokeWidth, size, viewBox}) => {

    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
    </Svg>

};
export const Check= ({color,className,stroke ,strokeWidth, size, viewBox}) => {

return(
  <Svg
  color={color}
  className={className}
  stroke={stroke}
  strokeWidth={strokeWidth}
    width={size}
    height={size}
    viewBox={viewBox}
  >
  <path xmlns="http://www.w3.org/2000/svg" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"/>
 </Svg>
)

};
export const CheckCircle= ({color,className,stroke ,strokeWidth, size, viewBox}) => {

  return(
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
   </Svg>
  )
  
  };
export const More= ({color,className,stroke ,strokeWidth, size, viewBox}) => {

  return(
    <Svg
    color={color}
    className={className}
    stroke={stroke}
    strokeWidth={strokeWidth}
      width={size}
      height={size}
      viewBox={viewBox}
    >
    <path xmlns="http://www.w3.org/2000/svg" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>   </Svg>
  )
  
  };
export const Cross= ({color,className,stroke ,strokeWidth, size, viewBox}) => (

  <Svg
  color={color}
  className={className}
    width={size}
    height={size}
    viewBox={viewBox}
  >
  <path xmlns="http://www.w3.org/2000/svg" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>  </Svg>

);
export const UserCircle= ({color,className,stroke ,strokeWidth, size, viewBox}) => (

  <Svg
  color={color}
  className={className}
    width={size}
    height={size}
    viewBox={viewBox}
  >
  <path xmlns="http://www.w3.org/2000/svg" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/>   </Svg>

);

export const Redo= ({color,className,stroke ,strokeWidth, size, viewBox}) => {

return(
  <Svg
  color={color}
  className={className}
  stroke={stroke}
  strokeWidth={strokeWidth}
    width={size}
    height={size}
    viewBox={viewBox}
  >
  <path xmlns="http://www.w3.org/2000/svg" d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
  </Svg>
)

};
export const Undo= ({color,className,stroke ,strokeWidth, size, viewBox}) => {

return(
  <Svg
  color={color}
  className={className}
  stroke={stroke}
  strokeWidth={strokeWidth}
    width={size}
    height={size}
    viewBox={viewBox}
  >
  <path xmlns="http://www.w3.org/2000/svg" d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
  </Svg>
)

};

 const Icons = ({name, ...rest}) => {
  switch (name) {
    case 'Menu':
      return  <Menu {...rest} />
    case 'Refresh':
      return  <Refresh {...rest} />;
    case 'Notification':
      return  <Notification {...rest} />;
    case 'AddNotification':
      return  <AddNotification {...rest} />;
    case 'More':
      return  <More {...rest} />;
    case 'AddUser':
      return  <PersonAdd {...rest} />;
    case 'Redo':
      return  <Redo {...rest} />;
    case 'Undo':
      return  <Undo {...rest} />;
    case 'Color':
      return  <ColorAv {...rest} />;
    case 'Search':
      return  <Search {...rest} />
    case 'ListMode':
      return  <ListMode {...rest} />;
    case 'GridMode':
      return  <GridMode {...rest} />;
    case 'Mult':
      return  <MultDots {...rest} />;
    case 'Cross':
      return <Cross {...rest}/>;
    case 'Settings':
      return <Settings {...rest}/>;
    case 'UserCircle':
      return <UserCircle {...rest}/>;
    case 'Bulb':
      return <Bulb {...rest}/>;
    case 'Label':
      return <Label {...rest}/>;
    case 'Pencil':
      return <Pencil {...rest}/>;
    case 'Archive':
      return <Archive {...rest}/>;
    case 'Paint':
      return <Paint {...rest}/>;
    case 'Check':
      return <Check {...rest}/>;
    case 'CheckCircle':
        return <CheckCircle {...rest}/>;
    case 'Pinned':
      return <Pinned {...rest}/>;
    case 'Delete':
      return <DeleteI {...rest}/>;
    case 'Out':
      return <Logout {...rest}/>;
    case 'ImageH':
      return <ImageH {...rest}/>;
    default:
      return "";
  }
};

export default Icons;