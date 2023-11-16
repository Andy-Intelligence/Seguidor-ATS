"use client"
import React, { PureComponent,useRef, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


interface SummaryProps{
    summaryHeader?:string;
    summaryTotal?:number;
    summaryDifference?:number;
}
const data = [
    {
      name: 'Page A',
      uv: 0,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 1000,
      pv: 1398,
      amt: 2210, 
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 3000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 4000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 5000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 6000,
      pv: 4300,
      amt: 2100,
    },
  ];

const Summary = ({summaryDifference,summaryHeader,summaryTotal}:SummaryProps) => {





  return (
    <div className='summary flex flex-col  w-[319px] h-auto rounded-[4px] p-2'>
        <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center gap-[8px]'>
                <span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="18" rx="9" fill="white"/>
                    <path d="M6.00001 16.5H12C15.015 16.5 15.555 15.2925 15.7125 13.8225L16.275 7.8225C16.4775 5.9925 15.9525 4.5 12.75 4.5H5.25001C2.04751 4.5 1.52251 5.9925 1.72501 7.8225L2.28751 13.8225C2.44501 15.2925 2.98501 16.5 6.00001 16.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 4.5V3.9C6 2.5725 6 1.5 8.4 1.5H9.6C12 1.5 12 2.5725 12 3.9V4.5" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 9.75V10.5C10.5 10.5075 10.5 10.5075 10.5 10.515C10.5 11.3325 10.4925 12 9 12C7.515 12 7.5 11.34 7.5 10.5225V9.75C7.5 9 7.5 9 8.25 9H9.75C10.5 9 10.5 9 10.5 9.75Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.2375 8.25C14.505 9.51 12.525 10.26 10.5 10.515" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.965 8.4525C3.6525 9.6075 5.5575 10.305 7.5 10.5225" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                
                <span className='summaryText font-500 text-[14px]'>{summaryHeader}</span>
            </div>
         

                <div>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#292D32" strokeWidth="1.5"/>
                        <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="#292D32" strokeWidth="1.5"/>
                        <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#292D32" strokeWidth="1.5"/>
                    </svg>
                </span>
            </div>
        </div>
        <section>
            <div className='flex flex-row items-center justify-between'>
                <div className=' flex flex-row items-center summaryCardTotal font-[400] text-[32px]'>
                    <h1 className='font-[400] text-[32px]'>{summaryTotal}</h1> <span className='font-[500] text-[14px]'>+25{summaryDifference}</span>
                </div>


                <div className='flex flex-col items-center'>
                        <div className=' w-[125px] h-[60px]'>    
                            <ResponsiveContainer  width="100%" height="100%">
                                <AreaChart
                                width={200}
                                height={60}
                                className=''
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5,
                                }}
                                >
                                    <Area type="monotone" dataKey="uv" stroke="green" fill="#A0DE83" />
                                    {/* #8884d8 */}
                                </AreaChart>
                        </ResponsiveContainer> 
                        </div>
                </div>

            </div>
            
            <div className='underline'></div>
            <div className='font-[400] text-[12px] flex items-center justify-start'>
                compared to last six months
            </div>
        </section>

    
    </div>
  )
}

export default Summary