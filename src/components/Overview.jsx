
export function Overview(){
    return(
        <div className="flex justify-between m-6">
            <h1 className="font-medium text-2xl">Overview</h1>
            <div className="flex box-content gap-3 px-[14px] py-[6px] border items-center cursor-pointer ">
                <div>This Month</div>
                <div className="text-[#4D4D4D] p-2 sm:flex w-8 sm:w-10 sm:h-10 item-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}