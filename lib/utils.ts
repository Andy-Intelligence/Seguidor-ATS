import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const fileToBase64 = (file: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error('Failed to read file as data URL.'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
export const passportToBase64 = (file: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error('Failed to read file as data URL.'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
export const coverletterToBase64 = (file: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error('Failed to read file as data URL.'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};


export const FileToBase64 = (file:any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      if (typeof result === 'string') {
        const base64String = result.split(',')[1];
        resolve(base64String);
      } else {
        reject(new Error('Unexpected result type'));
      }
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};


export function formatDate(inputDate:any) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const dateObject = new Date(inputDate);
  const day = dateObject.getDate();
  const month = months[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  return `${day} ${month} ${year}`;
}



// export default function convertToStandardDate(dateString:any) {
//   const date = new Date(dateString);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   const hours = String(date.getHours()).padStart(2, '0');
//   const minutes = String(date.getMinutes()).padStart(2, '0');
//   const seconds = String(date.getSeconds()).padStart(2, '0');

//   const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
//   return formattedDate;
// }


export default function convertToStandardDate(dateString:any) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours() % 12 || 12).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;
  return formattedDate;
}


export function extractTimeWithMeridian(dateTimeString:any) {
  const dateObject = new Date(dateTimeString);

  // Extracting hours and minutes
  const hours = dateObject.getUTCHours();
  const minutes = dateObject.getUTCMinutes();

  // Determine AM or PM
  const meridian = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Format the time as a string
  const formattedTime = `${formattedHours}:${String(minutes).padStart(2, '0')} ${meridian}`;

  return formattedTime;
}


export function formatEmailDate(inputDate:any) {
  const date = new Date(inputDate);

  // Format date
  const formattedDate = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);

  // Format time
  const formattedTime = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);

  // Combine formatted date and time
  const result = `${formattedDate} by ${formattedTime}`;

  return result;
}


export function formatEmailStartTime(inputDate:any) {
  const date = new Date(inputDate);

  // Format time
  const formattedTime = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);

  return formattedTime;
}

export function formatEmailEndTime(inputDate:any) {
  const date = new Date(inputDate);

  // Format time
  const formattedTime = new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);

  return formattedTime;
}


