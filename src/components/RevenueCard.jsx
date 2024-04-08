

export const RevenueCard = ({
    title,
    orderCount,
    amount,
    isFirstCard // Add a prop to indicate if it's the first card
}) => {
    return <div className={`${isFirstCard ? ' bg-[#146EB4] '  : 'bg-white'} rounded shadow-md p-4`}>
        <div className="text-gray-700 flex justify-center flex-col">
            <div className={`${isFirstCard ? ' text-white'  : 'text-black'} flex`}>
                <div>
                    {title}
                </div>
                <div className="ml-1 flex justify-center  flex-col ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        </div>

        <div className={`${isFirstCard ? ' text-white'  : 'text-black'} flex justify-between pt-2 `}>
                <div className="font-semibold text-2xl">
                ₹ {amount}
                </div>
                {orderCount ? <div className="flex cursor-pointer underline font-medium  flex-col justify-center">
                    <div className="flex">
                        <div className= {`${isFirstCard ? ' text-white'  : 'text-blue-800'} `}>
                                {orderCount} orders
                        </div> 
                        <div className="p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path className={`${isFirstCard ? 'text-white'  : 'text-[#146EB4]'} `} stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                 </div> : null}
        </div>
    </div>
} 